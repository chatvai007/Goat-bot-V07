
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "kiss",
    aliases: ["kisspic"],
    version: "1.0.0",
    author: "Rayhan",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Send a kiss picture"
    },
    category: "fun",
    guide: {
      en: "{pn} or {pn} @mention"
    }
  },

  onStart: async function ({ event, message }) {
    const imagePath = path.join(__dirname, "kiss.png");

    if (!fs.existsSync(imagePath)) {
      return message.reply(
        "❌ kiss.png পাওয়া যায়নি।"
      );
    }

    const mentions = Object.keys(event.mentions || {});
    const name = mentions.length
      ? event.mentions[mentions[0]]
      : "Someone special";

    return message.reply({
      body: `💋 Kiss for ${name} ❤️`,
      attachment: fs.createReadStream(imagePath)
    });
  }
};
