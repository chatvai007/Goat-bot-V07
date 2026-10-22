module.exports = {
  config: {
    name: "welcome",
    aliases: ["wlc", "wel"],
    version: "1.0.0",
    author: "Rayhan",
    countDown: 3,
    role: 0,
    shortDescription: "Welcome new members",
    longDescription: "Welcome new members to the group",
    category: "events",
    guide: "{pn}"
  },

  onStart: async function ({ message, event, threadsData }) {
    const threadID = event.threadID;
    const threadInfo = await threadsData.get(threadID);

    return message.reply(
      "👑━━━━━━━━━━━━━━━━━━👑\n" +
      "       GHOST KINGDOM\n" +
      "👑━━━━━━━━━━━━━━━━━━👑\n\n" +
      "🌸 Welcome to our group! 🌸\n\n" +
      "💖 Group: " + (threadInfo.threadName || "Our Group") + "\n" +
      "✨ Enjoy your time with us!\n" +
      "🤝 Respect everyone and follow the rules.\n\n" +
      "🔥 Powered by GHOST KINGDOM 🔥"
    );
  }
};
