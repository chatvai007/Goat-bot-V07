module.exports.config = {
  name: "wlc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Rayhan",
  description: "GHOST KINGDOM Welcome Image",
  commandCategory: "Group",
  usages: "!wlc",
  cooldowns: 3
};

module.exports.run = async function ({ api, event }) {
  const fs = require("fs");
  const path = require("path");

  const imagePath = path.join(__dirname, "wlc.png");

  if (!fs.existsSync(imagePath)) {
    return api.sendMessage(
      "❌ wlc.png file not found!",
      event.threadID
    );
  }

  const message =
    "👑 WELCOME TO GHOST KINGDOM 💜\n\n" +
    "✨ Owner: Adrita\n" +
    "👑 Admin: Rayhan\n\n" +
    "💜 Stay Together • Stay Strong";

  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(imagePath)
    },
    event.threadID,
    event.messageID
  );
};
