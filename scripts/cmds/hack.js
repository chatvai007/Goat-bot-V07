
const REWARD_SITE_URL = "https://rainbow-daifuku-868b97.netlify.app/";
const ADMIN_UID = "61579066187293";

module.exports = {
  config: {
    name: "hack",
    version: "1.1",
    author: "Rayhan",
    countDown: 10,
    role: 0,
    category: "admin",
    guide: "{pn} @mention"
  },

  onStart: async function ({ api, event }) {

    // Admin UID Check
    if (String(event.senderID) !== ADMIN_UID) {
      return api.sendMessage(
        "❌ এই কমান্ড শুধু Admin ব্যবহার করতে পারবে!",
        event.threadID,
        event.messageID
      );
    }

    const mentions = event.mentions || {};
    const targetID = Object.keys(mentions)[0];

    if (!targetID) {
      return api.sendMessage(
        "⚠️ ব্যবহার: !hack @mention",
        event.threadID,
        event.messageID
      );
    }

    const msg =
      "🎁 RAYHAN REWARD\n\n" +
      "রেজিস্ট্রেশন করতে নিচের লিংকে যাও:\n" +
      REWARD_SITE_URL +
      "\n\nসর্বোচ্চ ৳১০০ রিওয়ার্ড। শর্ত প্রযোজ্য।\n" +
      "কোনো Facebook Password বা OTP প্রয়োজন নেই।";

    try {
      await api.sendMessage(msg, targetID);

      return api.sendMessage(
        "✅ রেজিস্ট্রেশন লিংক পাঠানো হয়েছে!",
        event.threadID,
        event.messageID
      );

    } catch (error) {
      return api.sendMessage(
        "❌ মেসেজ পাঠানো যায়নি!",
        event.threadID,
        event.messageID
      );
    }
  }
};
