module.exports = {
  config: {
    name: "roast",
    aliases: ["funroast"],
    version: "1.0.0",
    author: "Rayhan",
    countDown: 3,
    role: 0,
    shortDescription: { en: "Funny Bangla roast" },
    longDescription: { en: "Sends a funny roast" },
    category: "fun",
    guide: { en: "{pn} [name]" }
  },

  onStart: async function ({ message, args }) {
    const name = args.join(" ") || "বন্ধু";

    const roasts = [
      "তোর বুদ্ধি এত স্লো যে কচ্ছপও তোকে দেখে হর্ন দেয়! 😂",
      "তুই এত লেজেন্ড, Google-ও তোকে সার্চ করে খুঁজে পায় না! 🤣",
      "তোর প্ল্যান এত দুর্দান্ত যে শুরু হওয়ার আগেই শেষ! 😆",
      "তোর WiFi-এর চেয়ে তোর চিন্তাভাবনার স্পিড কম! 😂",
      "তুই অলসতার ব্র্যান্ড অ্যাম্বাসেডর হওয়ার যোগ্য! 🏆",
      "তোর আত্মবিশ্বাস দেখে ভুল উত্তরও লজ্জা পায়! 🤣",
      "তুই এত ইউনিক যে তোর মতো আরেকজন হলে সেও অবাক হতো! 😜",
      "তোর মাথায় আইডিয়া আসে, কিন্তু দরজায় এসে ফিরে যায়! 😂",
      "তুই কাজ শুরু করিস কাল থেকে, সেই কাল আর আসে না! 🤣",
      "তোর লজিক দেখে ক্যালকুলেটরও রিস্টার্ট নেয়! 😆",
      "তুই এমন ব্যস্ত, কিছু না করতেও সময় পাওয়া কঠিন! 😂",
      "তোর ভাগ্য এত স্লো যে লোডিং স্ক্রিনও বিরক্ত! 🤣",
      "তুই কথা শুরু করলে Google-ও বলে: Skip intro! 😂",
      "তোর স্মৃতিশক্তি এমন, নিজের কথাও তোকে রিমাইন্ডার দিতে হয়! 😜",
      "তুই এত কুল যে ফ্যানও তোকে দেখে ছুটি নেয়! 😂"
    ];

    const roast = roasts[
      Math.floor(Math.random() * roasts.length)
    ];

    return message.reply(
      `🔥 GHOST KINGDOM ROAST 🔥\n\n` +
      `🎯 Target: ${name}\n\n` +
      `${roast}\n\n` +
      `😂 মজা করলাম, সিরিয়াস নিস না!`
    );
  }
};
