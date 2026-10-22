
module.exports = {
  config: {
    name: "roast",
    aliases: ["ro"],
    version: "1.0.0",
    author: "Rayhan",
    countDown: 3,
    role: 0,
    shortDescription: "Funny roast",
    longDescription: "Random funny roast",
    category: "fun",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    const roasts = [
      "😂 তোর ব্রেইন কি Airplane Mode-এ আছে?",
      "😎 তোর অ্যাটিটিউড দেখে WiFi-ও কানেকশন কেটে দেয়!",
      "🤣 তুই এতটাই লেজেন্ড, Google-ও তোকে খুঁজে পায় না!",
      "🔥 তোর লজিক দেখে Calculator-ও Error দেখায়!",
      "😂 তুই অনলাইনে থাকলেই নেটওয়ার্কের টেনশন বাড়ে!",
      "😜 তোর কথা শুনে নীরবতাও কথা বলতে চায়!",
      "👑 GHOST KINGDOM-এ তোর এন্ট্রি, কমেডির নতুন সিজন শুরু!"
    ];

    const roast = roasts[Math.floor(Math.random() * roasts.length)];
    return message.reply(roast);
  }
};
