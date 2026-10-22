
module.exports.config = {
  name: "wlc",
  version: "1.0.1",
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

  try {
    if (!fs.existsSync(imagePath)) {
      return api.sendMessage(
        `❌ wlc.png পাওয়া যায়নি!\nফাইলের লোকেশন: ${imagePath}`,
        event.threadID,
        event.messageID
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
      (err) => {
        if (err) {
          console.error("WLC send error:", err);
        }
      },
      event.messageID
    );
  } catch (err) {
    console.error("WLC command error:", err);

    return api.sendMessage(
      "❌ Welcome image পাঠানো যায়নি। Terminal-এর error চেক করো।",
      event.threadID,
      event.messageID
    );
  }
};
