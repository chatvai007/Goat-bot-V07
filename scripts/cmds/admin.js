module.exports = {
  config: {
    name: "admin",
    aliases: ["admininfo", "admins"],
    version: "1.1.0",
    author: "Rayhan",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Show admin information"
    },
    longDescription: {
      en: "Displays bot admin information"
    },
    category: "info",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ message }) {
    const adminInfo = `
╭━━━━━━━━━━━━━━━━━━╮
┃ 🛡️ ADMIN INFORMATION
╰━━━━━━━━━━━━━━━━━━╯

👑 Admin Name : Adrita
🤖 Bot Name   : Goat-Bot V2
⚙️ Prefix     : !
💻 Platform   : Messenger

━━━━━━━━━━━━━━━━━━━━

🔗 Admin Facebook:
https://www.facebook.com/share/19SbBaPHoJ/

💚⃟ 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 ꧁༺ 01638759227 ༻꧂ 💚

━━━━━━━━━━━━━━━━━━━━
💖 Thanks for using our bot!
🔥 Powered by Rayhan
━━━━━━━━━━━━━━━━━━━━
`;

    return message.reply(adminInfo);
  }
};
