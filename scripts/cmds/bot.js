
const fs = require("fs");
const path = require("path");

const statusFile = path.join(__dirname, "botStatus.json");

function getStatus() {
  try {
    return JSON.parse(fs.readFileSync(statusFile, "utf8"));
  } catch {
    return { on: true };
  }
}

function saveStatus(on) {
  fs.writeFileSync(
    statusFile,
    JSON.stringify({ on }, null, 2)
  );
}

module.exports = {
  config: {
    name: "bot",
    aliases: ["boton", "botoff"],
    version: "1.0.1",
    author: "Rayhan",
    countDown: 2,
    role: 0,
    category: "owner",
    guide: {
      en: "{pn} on/off"
    }
  },

  onStart: async function ({ message, args, event }) {
    const OWNER_ID = "61579066187293";

    if (String(event.senderID) !== OWNER_ID) {
      return message.reply(
        "⛔ শুধু Owner Rayhan এই কমান্ড ব্যবহার করতে পারবে!"
      );
    }

    const action = (args[0] || "").toLowerCase();

    if (action === "on") {
      saveStatus(true);
      return message.reply(
        "✅ BOT ON\n💬 এখন থেকে আমি গ্রুপে কথা বলব!"
      );
    }

    if (action === "off") {
      saveStatus(false);
      return message.reply(
        "🔕 BOT OFF\nOwner আবার ON না করা পর্যন্ত চ্যাটের উত্তর দেব না!"
      );
    }

    return message.reply(
      "⚙️ BOT CONTROL\n\n✅ !bot on\n🔕 !bot off"
    );
  }
};
