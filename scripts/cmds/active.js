
module.exports = {
  config: {
    name: "ac",
    aliases: ["active", "act"],
    version: "1.0.0",
    author: "Rayhan",
    countDown: 5,
    role: 0,
    shortDescription: "Show active group members",
    longDescription: "Show active members with mentions",
    category: "group",
    guide: "{pn} 10"
  },

  onStart: async function ({ api, event, args }) {
    const threadID = event.threadID;
    const limit = parseInt(args[0]);

    if (!limit || limit < 1 || limit > 100) {
      return api.sendMessage(
        "⚠️ ব্যবহার: !ac 10\nসর্বোচ্চ ১০০ জন পর্যন্ত লিখতে পারবে।",
        threadID
      );
    }

    try {
      const info = await api.getThreadInfo(threadID);
      const members = info.participantIDs || [];
      const botID = api.getCurrentUserID();

      const users = members.filter(
        id => String(id) !== String(botID)
      );

      const selected = users.slice(0, limit);

      if (selected.length === 0) {
        return api.sendMessage("কোনো Member পাওয়া যায়নি।", threadID);
      }

      const mentions = [];
      let body = `👑 𝐆𝐇𝐎𝐒𝐓 𝐊𝐈𝐍𝐆𝐃𝐎𝐌\n`;
      body += `━━━━━━━━━━━━━━\n`;
      body += `🔥 Group Members: ${selected.length}\n\n`;

      for (let i = 0; i < selected.length; i++) {
        const uid = selected[i];

        try {
          const userInfo = await api.getUserInfo(uid);
          const name = userInfo[uid]?.name || `Member ${i + 1}`;

          const start = body.length;
          body += `${i + 1}. ${name}\n`;

          mentions.push({
            id: String(uid),
            tag: name,
            fromIndex: start + `${i + 1}. `.length,
            toIndex: start + `${i + 1}. `.length + name.length
          });
        } catch (e) {
          body += `${i + 1}. Member ${i + 1}\n`;
        }
      }

      body += `\n━━━━━━━━━━━━━━\n`;
      body += `⚡ Owner Rayhan`;

      return api.sendMessage(
        { body, mentions },
        threadID
      );
    } catch (error) {
      return api.sendMessage(
        "❌ Member list পাওয়া যায়নি। Bot API বা permission চেক করো।",
        threadID
      );
    }
  }
};
        
