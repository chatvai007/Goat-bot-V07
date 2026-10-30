
module.exports = {
  config: {
    name: "wlc",
    version: "1.0.2",
    author: "Rayhan",
    description: "Auto Welcome New Members",
    category: "events"
  },

  onStart: async function () {},

  onEvent: async function ({ api, event }) {
    if (event.logMessageType !== "log:subscribe") return;

    const users = event.logMessageData?.addedParticipants;
    if (!users || users.length === 0) return;

    for (const user of users) {
      const name = user.fullName || user.firstName || "Friend";

      const msg = `
╭━━━〔 🖤 WELCOME 🖤 〕━━━╮

🎉 Welcome to our group!

👤 MEMBER: ${name}

💖 আমাদের গ্রুপে তোমাকে স্বাগতম।
সবার সাথে সুন্দর সময় কাটাও।
সবসময় হাসিখুশি থেকো।

🤝 Stay Together • Stay Strong

━━━━━━━━━━━━━━━━━━
👨‍💻 DEVELOPER: RAYHAN
╰━━━━━━━━━━━━━━━━━━╯
`;

      await api.sendMessage(msg, event.threadID);
    }
  }
};
