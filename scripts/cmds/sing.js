const axios = require("axios");
const ytSearch = require("yt-search");

module.exports = {
  config: {
    name: "sing",
    version: "23.0",
    author: "Arafat",
    role: 0,
    description: {
      en: "🎵 Music Search and Downloader"
    },
    category: "audio",
    guide: {
      en: "{pn} song name\n{pn} -l song name"
    }
  },

  onStart: async ({ api, args, event, commandName }) => {
    if (!args.length) {
      return api.sendMessage(
        "🎵 Please type a song name.\nExample: !sing Believer\nExample: !sing -l Believer",
        event.threadID,
        event.messageID
      );
    }

    const isList = args[0] === "-l";
    const keyword = (isList ? args.slice(1) : args).join(" ").trim();

    if (!keyword) {
      return api.sendMessage(
        "❌ Please enter a song name.",
        event.threadID,
        event.messageID
      );
    }

    try {
      api.setMessageReaction("🔎", event.messageID, () => {}, true);

      let searchResult;

      try {
        searchResult = await ytSearch(keyword);
      } catch (err) {
        console.error("YT SEARCH ERROR:", err.message);
        return api.sendMessage(
          "❌ YouTube search failed. Please try again later.",
          event.threadID,
          event.messageID
        );
      }

      const results = (searchResult.videos || []).slice(0, 6);

      if (!results.length) {
        return api.sendMessage(
          "❌ No songs found. Try another song name.",
          event.threadID,
          event.messageID
        );
      }

      if (isList) {
        let text = "╭───────────────❍\n";
        text += "│ 🎵 𝑺𝒐𝒏𝒈 𝑳𝒊𝒔𝒕\n";
        text += "╰───────────────❍\n\n";

        results.forEach((video, index) => {
          text += `╭─❍\n`;
          text += `┊ ${index + 1}. ${video.title}\n`;
          text += `┊ ⏳ ${video.timestamp || "Unknown"}\n`;
          text += `┊ 📺 ${video.author?.name || "Unknown"}\n`;
          text += `╰───────────────❍\n\n`;
        });

        text += "Reply with a number from 1 to " + results.length + ".";

        return api.sendMessage(
          { body: text },
          event.threadID,
          (err, info) => {
            if (err || !info) {
              console.error("LIST MESSAGE ERROR:", err);
              return;
            }

            global.GoatBot.onReply.set(info.messageID, {
              commandName,
              messageID: info.messageID,
              author: event.senderID,
              results
            });
          },
          event.messageID
        );
      }

      await this.downloadSong({
        api,
        event,
        video: results[0]
      });
    } catch (err) {
      console.error("SING ERROR:", err.stack || err.message);

      return api.sendMessage(
        `❌ Sing command failed.\nReason: ${err.message}`,
        event.threadID,
        event.messageID
      );
    }
  },

  downloadSong: async ({ api, event, video }) => {
    try {
      const apiBase = String(
        global.GoatBot?.config?.Arafat?.api || ""
      ).trim().replace(/\/+$/, "");

      if (!apiBase) {
        return api.sendMessage(
          "❌ API Base URL is empty!\nConfigure GoatBot.config.Arafat.api first.",
          event.threadID,
          event.messageID
        );
      }

      if (!video?.url) {
        return api.sendMessage(
          "❌ Invalid YouTube video URL.",
          event.threadID,
          event.messageID
        );
      }

      api.setMessageReaction("⏳", event.messageID, () => {}, true);

      const finalURL =
        `${apiBase}/download/arafatadl?url=${encodeURIComponent(video.url)}`;

      console.log("SING API REQUEST:", finalURL);

      const res = await axios({
        url: finalURL,
        method: "GET",
        responseType: "stream",
        timeout: 120000,
        validateStatus: () => true
      });

      console.log("API STATUS:", res.status);
      console.log("CONTENT TYPE:", res.headers["content-type"]);
      console.log("CONTENT LENGTH:", res.headers["content-length"]);

      if (res.status !== 200) {
        res.data?.destroy?.();

        return api.sendMessage(
          `❌ Download API failed.\nHTTP Status: ${res.status}`,
          event.threadID,
          event.messageID
        );
      }

      const contentType = String(
        res.headers["content-type"] || ""
      ).toLowerCase();

      if (
        contentType.includes("application/json") ||
        contentType.includes("text/html")
      ) {
        let errorBody = "";

        try {
          for await (const chunk of res.data) {
            errorBody += chunk.toString();
            if (errorBody.length > 1500) break;
          }
        } catch (_) {}

        console.error("API ERROR RESPONSE:", errorBody);

        return api.sendMessage(
          "❌ API audio দেয়নি; JSON/HTML response এসেছে। API endpoint পরীক্ষা করো।",
          event.threadID,
          event.messageID
        );
      }

      let streamError = false;
      res.data.on("error", err => {
        streamError = true;
        console.error("AUDIO STREAM ERROR:", err.message);
      });

      const message = await new Promise(resolve => {
        api.sendMessage(
          {
            body:
              "╭───────────────❍\n" +
              "│ 🎧 𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝑺𝒖𝒄𝒄𝒆𝒔𝒔\n" +
              "├───────────────❍\n" +
              `│ 🎵 ${video.title}\n` +
              "╰───────────────❍",
            attachment: res.data
          },
          event.threadID,
          (err, info) => resolve({ err, info }),
          event.messageID
        );
      });

      if (message.err) {
        console.error("SEND AUDIO ERROR:", message.err);
        return api.sendMessage(
          "❌ গান Messenger-এ পাঠানো যায়নি। Audio stream বা file size পরীক্ষা করো।",
          event.threadID,
          event.messageID
        );
      }

      api.setMessageReaction("🎀", event.messageID, () => {}, true);
    } catch (err) {
      console.error("DOWNLOAD ERROR:", err.stack || err.message);

      return api.sendMessage(
        `❌ Failed to download song.\nReason: ${err.message}`,
        event.threadID,
        event.messageID
      );
    }
  },

  onReply: async ({ event, api, Reply }) => {
    try {
      const { results, author, messageID } = Reply;

      if (event.senderID !== author) return;

      const choiceText = String(event.body || "").trim();

      if (!/^[1-6]$/.test(choiceText)) {
        return api.sendMessage(
          `❌ Reply with a number from 1 to ${results.length}.`,
          event.threadID,
          event.messageID
        );
      }

      const choice = Number(choiceText);

      if (choice < 1 || choice > results.length) {
        return api.sendMessage(
          `❌ Choose a number from 1 to ${results.length}.`,
          event.threadID,
          event.messageID
        );
      }

      const video = results[choice - 1];

      await module.exports.downloadSong({
        api,
        event,
        video
      });

      try {
        api.unsendMessage(messageID, () => {});
      } catch (_) {}
    } catch (err) {
      console.error("REPLY ERROR:", err.stack || err.message);

      return api.sendMessage(
        `❌ Reply failed.\nReason: ${err.message}`,
        event.threadID,
        event.messageID
      );
    }
  }
};
