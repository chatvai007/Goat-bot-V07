module.exports = {
  config: {
    name: "owner",
    aliases: ["ownerinfo", "creator"],
    version: "1.0.0",
    author: "Rayhan",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Show bot owner information"
    },
    longDescription: {
      en: "Displays information about the bot owner"
    },
    category: "info",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ message }) {
    const ownerInfo = `
╭━━━━━━━━━━━━━━━━━━╮
┃ 👑  OWNER INFORMATION
╰━━━━━━━━━━━━━━━━━━╯

👤 Owner Name : Rayhan
🤖 Bot Name   : Goat-Bot V2
⚙️ Prefix     : !
💻 Platform   : Messenger
📱 Support    : Mobile

━━━━━━━━━━━━━━━━━━━━
💖 Thanks for using our bot!
🔥 Powered by Rayhan
━━━━━━━━━━━━━━━━━━━━
`;

    return message.reply(ownerInfo);
  }
};
