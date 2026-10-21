
const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "kiss",
    aliases: ["kisspic"],
    version: "2.0.0",
    author: "Rayhan",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Create a kiss picture"
    },
    category: "fun",
    guide: {
      en: "{pn} @mention"
    }
  },

  onStart: async function ({ api, event, message }) {
    const mentions = Object.keys(event.mentions || {});

    if (!mentions.length) {
      return message.reply(
        "💋 কাউকে মেনশন করো!\nউদাহরণ: !kiss @Rayhan"
      );
    }

    let filePath;

    try {
      const senderID = event.senderID;
      const targetID = mentions[0];

      const info = await api.getUserInfo([
        senderID,
        targetID
      ]);

      const sender = info[senderID];
      const target = info[targetID];

      const avatar1 = sender && (sender.thumbSrc || sender.profileUrl);
      const avatar2 = target && (target.thumbSrc || target.profileUrl);

      if (!avatar1 || !avatar2) {
        return message.reply(
          "❌ Profile picture পাওয়া যায়নি।"
        );
      }

      const imageURL =
        "https://some-random-api.com/canvas/kiss" +
        "?avatar1=" + encodeURIComponent(avatar1) +
        "&avatar2=" + encodeURIComponent(avatar2);

      const response = await axios.get(imageURL, {
        responseType: "arraybuffer",
        timeout: 20000
      });

      if (
        !response.headers["content-type"] ||
        !response.headers["content-type"].includes("image")
      ) {
        throw new Error("Image API did not return an image");
      }

      filePath = path.join(
        __dirname,
        `kiss_${senderID}_${Date.now()}.png`
      );

      fs.writeFileSync(filePath, Buffer.from(response.data));

      return message.reply({
        body: `💋 ${sender.name || "Owner"} ❤️ ${target.name || "Friend"}`,
        attachment: fs.createReadStream(filePath)
      });
    } catch (error) {
      console.error("KISS COMMAND ERROR:", error.message);

      return message.reply(
        "❌ Kiss picture তৈরি হয়নি। API অথবা profile picture চেক করো।"
      );
    }
  }
};
        
