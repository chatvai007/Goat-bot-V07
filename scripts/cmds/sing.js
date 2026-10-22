const ytSearch = require("yt-search");
const { execFile } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");
const util = require("util");

const execFileAsync = util.promisify(execFile);

module.exports = {
  config: {
    name: "sing",
    version: "24.0",
    author: "Rayhan",
    role: 0,
    description: {
      en: "Search songs and send audio directly"
    },
    category: "audio",
    guide: {
      en: "{pn} song name"
    }
  },

  onStart: async ({ api, args, event }) => {
    const keyword = args.join(" ").trim();

    if (!keyword) {
      return api.sendMessage(
        "🎵 গান খুঁজতে লিখো: !sing Believer",
        event.threadID,
        event.messageID
      );
    }

    let workDir;

    try {
      api.setMessageReaction(
        "🔎",
        event.messageID,
        () => {},
        true
      );

      // Search YouTube
      const search = await ytSearch(keyword);
      const video = search.videos?.[0];

      if (!video) {
        return api.sendMessage(
          "❌ কোনো গান পাওয়া যায়নি।",
          event.threadID,
          event.messageID
        );
      }

      // Create temporary directory
      workDir = fs.mkdtempSync(
        path.join(os.tmpdir(), "goatbot-sing-")
      );

      const outputTemplate = path.join(
        workDir,
        "%(id)s.%(ext)s"
      );

      api.setMessageReaction(
        "⏳",
        event.messageID,
        () => {},
        true
      );

      // Requires yt-dlp and FFmpeg installed
      await execFileAsync(
        "yt-dlp",
        [
          "--no-playlist",
          "--no-warnings",
          "--no-progress",
          "--match-filter",
          "duration <= 600",
          "-f",
          "bestaudio/best",
          "-x",
          "--audio-format",
          "mp3",
          "--max-filesize",
          "20M",
          "-o",
          outputTemplate,
          video.url
        ],
        {
          timeout: 180000,
          maxBuffer: 2 * 1024 * 1024
        }
      );

      const files = fs.readdirSync(workDir);
      const audioName = files.find(
        name => name.toLowerCase().endsWith(".mp3")
      );

      if (!audioName) {
        throw new Error(
          "Audio file তৈরি হয়নি। yt-dlp ও FFmpeg পরীক্ষা করো।"
        );
      }

      const audioPath = path.join(workDir, audioName);
      const stat = fs.statSync(audioPath);

      if (!stat.size) {
        throw new Error("Audio file খালি।");
      }

      // Send audio attachment directly to Messenger
      await new Promise((resolve, reject) => {
        api.sendMessage(
          {
            body:
              "🎧 গান: " + video.title +
              "\n🎵 Artist: " +
              (video.author?.name || "Unknown"),
            attachment: fs.createReadStream(audioPath)
          },
          event.threadID,
          err => {
            if (err) reject(err);
            else resolve();
          },
          event.messageID
        );
      });

      api.setMessageReaction(
        "✅",
        event.messageID,
        () => {},
        true
      );

    } catch (err) {
      console.error(
        "SING ERROR:",
        err.stderr || err.stack || err.message
      );

      api.sendMessage(
        "❌ গান পাঠানো যায়নি।\nসমস্যা: " +
          (err.killed
            ? "Download timeout হয়েছে।"
            : err.message),
        event.threadID,
        event.messageID
      );

    } finally {
      // Remove temporary audio after processing
      if (workDir) {
        setTimeout(() => {
          fs.promises.rm(workDir, {
            recursive: true,
            force: true
          }).catch(console.error);
        }, 5000);
      }
    }
  }
};
