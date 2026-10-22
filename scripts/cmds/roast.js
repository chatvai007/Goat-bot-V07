module.exports = {
  config: {
    name: "roast",
    aliases: ["ro"],
    version: "1.1.0",
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
      "👑 GHOST KINGDOM-এ তোর এন্ট্রি, কমেডির নতুন সিজন শুরু!",

      // New roasts 😂🔥
      "🤣 তোর বুদ্ধি দেখে Google নিজেই Search বন্ধ করে দিয়েছে!",
      "😂 তোর মাথায় কি RAM-এর বদলে শুধু ফাঁকা জায়গা?",
      "😎 তোর ভাব দেখে মনে হয় তুই নিজের সিনেমার হিরো!",
      "💀 তোর লজিক শুনে বিজ্ঞানীও ছুটি নিয়ে নেয়!",
      "🤡 তুই এমন এক পিস, তোকে দেখে সার্কাসও লজ্জা পায়!",
      "📶 তোর IQ মনে হয় 2G নেটওয়ার্কে চলে!",
      "😂 তোর প্ল্যান শুনে ব্যর্থতাও হাসতে থাকে!",
      "🔥 তুই কথা শুরু করলেই কমেডি অটো-স্টার্ট হয়!",
      "😜 তোর আত্মবিশ্বাস NASA-তে পাঠানো উচিত!",
      "💻 তোর মাথার Software-টা মনে হয় Update হয়নি!",
      "🤣 তোর যুক্তি শুনে ChatGPT-ও বলে, ভাই আমি পারব না!",
      "👀 তোর ভাব দেখে মনে হয় পুরো Facebook তোর ফ্যান!",
      "😂 তোর স্টাইল দেখে আয়নাও Confused হয়ে যায়!",
      "⚡ তুই এমন এক Legend, Tutorial দেখেও Noob থাকিস!",
      "😎 তোর Attitude Premium, কিন্তু Logic Free Trial!",
      "🤯 তোর কথা শুনে মাথা নিজেই Restart নিতে চায়!",
      "📱 তুই অনলাইনে আসলেই Notification-এরও মন খারাপ হয়!",
      "🤣 তোর কমেডি দেখে হাসি না, হাসির কারণ খুঁজতে হয়!",
      "🔥 তুই নিজেকে Boss ভাবিস, কিন্তু নিজের ঘড়িরও Control নাই!",
      "😂 তোর ব্রেইন Buffering-এ আছে, একটু অপেক্ষা কর!",
      "😈 তুই এমন Player, Loading Screen-এই Game Over!",
      "👑 GHOST KINGDOM-এর Comedy Department-এর VIP তুই!"
    ];

    const roast = roasts[
      Math.floor(Math.random() * roasts.length)
    ];

    return message.reply(roast);
  }
};
