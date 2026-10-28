
const replies = [
  // Owner Rayhan
  {
    keywords: ["তোমার owner কে", "owner কে", "তোমার মালিক কে", "who is your owner", "who made you", "তোমার ওনার কে"],
    answers: [
      "👑 আমার Owner Rayhan! ❤️",
      "😎 আমার Boss হলো Rayhan!",
      "💖 আমার Owner Rayhan, তার জন্য অনেক সম্মান!",
      "🔥 Rayhan আমার Owner, নামটা মনে রেখো!",
      "🥰 আমার Owner Rayhan একজন দারুণ মানুষ!",
      "👑 Owner Rayhan—আমার বস কিন্তু একটাই!"
    ]
  },
  {
    keywords: ["rayhan কে", "রায়হান কে", "রায়হান কে", "rayhan kemon", "রায়হান কেমন", "রায়হান কেমন"],
    answers: [
      "❤️ Rayhan একজন ভালো মনের মানুষ!",
      "👑 Rayhan-এর নিজস্ব একটা স্টাইল আছে!",
      "✨ Rayhan নিজের মতো করে স্পেশাল!",
      "🌹 Rayhan সব সময় ভালো থাকুক, এটাই কামনা!",
      "😎 Rayhan মানেই আলাদা একটা পরিচয়!",
      "💖 Rayhan সম্পর্কে ভালো কথা বলতেই হয়!"
    ]
  },

  // Greetings
  {
    keywords: ["হাই", "হ্যালো", "hello", "hi", "hey", "হেই"],
    answers: [
      "হ্যালো! 🥰 কেমন আছো?",
      "হাই! ❤️ কী খবর তোমার?",
      "এই যে! 😄 কী করো?",
      "হ্যালো বন্ধু! 🌸 আড্ডা হবে?",
      "হাই হাই! 💖 আজকে কেমন কাটছে?"
    ]
  },
  {
    keywords: ["কেমন আছো", "কেমন আছিস", "how are you", "kmn acho", "কেমন আছেন"],
    answers: [
      "আমি ভালো আছি! 🥰 তুমি কেমন আছো?",
      "আলহামদুলিল্লাহ! ❤️ তোমার খবর কী?",
      "ভালো আছি, তোমার সাথে কথা বলছি! 😊",
      "একদম ঠিকঠাক! 😎 তুমি বলো?",
      "তুমি ভালো থাকলেই ভালো! 💖"
    ]
  },
  {
    keywords: ["কি খবর", "কী খবর", "ki khobor", "whats up", "what's up"],
    answers: [
      "সব ভালো! 😎 তোমার কী খবর?",
      "এই তো আড্ডা দিচ্ছি! 😂",
      "নতুন কিছু নেই, তুমি বলো!",
      "খবর ভালো! ❤️ তোমারটা বলো!"
    ]
  },

  // Small questions
  {
    keywords: ["কি করো", "কী করো", "ki koro", "what are you doing"],
    answers: [
      "তোমার সাথে কথা বলছি! 😊",
      "তোমার মেসেজের উত্তর দিচ্ছি! ❤️",
      "আড্ডা দেওয়ার অপেক্ষায় আছি! 😂",
      "এই তো, সবার সাথে গল্প করছি!"
    ]
  },
  {
    keywords: ["কে তুমি", "তুমি কে", "who are you", "tomar nam ki", "তোমার নাম কি"],
    answers: [
      "আমি তোমাদের Chat Bot! 🤖❤️",
      "আমি তোমার আড্ডার সঙ্গী! 😎",
      "আমার নাম Chat Bot! 🥰",
      "আমি কথা বলার জন্য তৈরি একটা বট!"
    ]
  },
  {
    keywords: ["কোথায় থাকো", "কোথায় থাকো", "where do you live"],
    answers: [
      "আমি তো অনলাইনেই থাকি! 😂📱",
      "আমার ঠিকানা হলো ইন্টারনেট! 🌐",
      "আমি বট, তাই মানুষের মতো বাসা নেই! 😄"
    ]
  },
  {
    keywords: ["বয়স কত", "তোমার বয়স কত", "how old are you"],
    answers: [
      "বটের আবার মানুষের মতো বয়স হয় নাকি! 😂",
      "আমার বয়সের হিসাব সার্ভার জানে! 🤖",
      "আমি তো ডিজিটাল দুনিয়ার বাসিন্দা! 😎"
    ]
  },

  // Mood and feelings
  {
    keywords: ["মন খারাপ", "ভালো লাগছে না", "মন ভালো নেই", "sad", "মন খারাপ"],
    answers: [
      "মন খারাপ কোরো না ❤️ চাইলে আমাকে বলতে পারো কী হয়েছে।",
      "সব দিন এক রকম যায় না। নিজের যত্ন নিও! 🌸",
      "একটু বিশ্রাম নাও, পছন্দের কিছু করো। 💖",
      "কী হয়েছে? চাইলে তোমার কথা শুনব। 🫶"
    ]
  },
  {
    keywords: ["খুশি", "ভালো লাগছে", "happy", "মজা লাগছে"],
    answers: [
      "ওয়াও! 🥳 তোমার খুশি দেখে ভালো লাগল!",
      "এই তো চাই! সব সময় হাসিখুশি থেকো! ❤️",
      "খুশির খবরটা কী? আমাকেও বলো! 😄"
    ]
  },

  // Love and friendship
  {
    keywords: ["ভালোবাসি", "love you", "i love you"],
    answers: [
      "আহা! ❤️ অনেক মিষ্টি কথা!",
      "তোমার জন্য রইল অনেক শুভকামনা! 🥰",
      "হাহা! আমি কিন্তু Chat Bot! 🤖💖",
      "ভালোবাসা আর সম্মান সবার জন্য! 🌸"
    ]
  },
  {
    keywords: ["বন্ধু হবে", "বন্ধু", "friend", "বন্ধু বানাবে"],
    answers: [
      "অবশ্যই, চলো বন্ধুর মতো আড্ডা দিই! 🥰",
      "বন্ধুত্ব মানেই বিশ্বাস আর সম্মান! ❤️",
      "আমি বট হলেও তোমার সাথে গল্প করতে পারি! 😄"
    ]
  },

  // Fun
  {
    keywords: ["জোকস", "জোক", "joke", "মজা করো", "funny"],
    answers: [
      "😂 শিক্ষক: পড়া শিখেছ? ছাত্র: জি স্যার, বই খুললেই ঘুম আসে!",
      "🤣 বন্ধু: এত হাসিস কেন? উত্তর: হাসতে ট্যাক্স লাগে না!",
      "😆 আমার জীবন পুরোটাই অনলাইন, তবু নেট গেলে মন খারাপ!",
      "😂 পরীক্ষার হলে কলমও ভাবে, আজ কী লিখবে?"
    ]
  },
  {
    keywords: ["হাসাও", "হাসির কথা", "make me laugh"],
    answers: [
      "😂 Wi-Fi বন্ধ হলে সবাই বুঝতে পারে, পরিবারেও মানুষ থাকে!",
      "🤣 পড়তে বসলে ঘুম আসে, ঘুমাতে গেলে ফোন মনে পড়ে!",
      "😆 আমার তো ছুটি নেই, আমি বট—ডিউটি সবসময়!"
    ]
  },

  // Thanks and goodbye
  {
    keywords: ["ধন্যবাদ", "thanks", "thank you", "থ্যাংকস"],
    answers: [
      "তোমাকে স্বাগতম! ❤️",
      "আরে, সমস্যা নেই! 😊",
      "সব সময় হাসিখুশি থেকো! 🌸"
    ]
  },
  {
    keywords: ["বাই", "bye", "আসি", "যাই", "good night", "শুভ রাত্রি"],
    answers: [
      "আচ্ছা, আবার কথা হবে! ❤️",
      "বাই! ভালো থেকো! 🥰",
      "শুভ রাত্রি! সুন্দর ঘুম হোক! 🌙",
      "আবার এসো, আড্ডা হবে! 😄"
    ]
  }
];

function normalize(text = "") {
  return text
    .toLowerCase()
    .replace(/[?!.,،।]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getAnswer(text = "") {
  const input = normalize(text);

  for (const group of replies) {
    if (group.keywords.some(word => input.includes(normalize(word)))) {
      return group.answers[
        Math.floor(Math.random() * group.answers.length)
      ];
    }
  }

  const generalReplies = [
    "😊 হুম, তারপর বলো!",
    "❤️ আচ্ছা, বুঝলাম!",
    "😄 আরেকটু বিস্তারিত বলো!",
    "😂 বাহ! তারপর কী হলো?",
    "🥰 তোমার কথা শুনছি!",
    "😎 নতুন কী খবর?",
    "🌸 বলো, আড্ডা দিই!",
    "🤔 কথাটা আরেকটু বুঝিয়ে বলবে?",
    "💖 আচ্ছা, তোমার দিন কেমন যাচ্ছে?",
    "😄 হুম হুম, তারপর?"
  ];

  return generalReplies[
    Math.floor(Math.random() * generalReplies.length)
  ];
}

function saveReply(info, event) {
  if (
    info &&
    info.messageID &&
    global.GoatBot &&
    global.GoatBot.onReply
  ) {
    global.GoatBot.onReply.set(info.messageID, {
      commandName: "chat",
      messageID: info.messageID,
      author: event.senderID
    });
  }
}

module.exports = {
  config: {
    name: "chat",
    aliases: ["কথা"],
    version: "3.0.0",
    author: "Rayhan",
    countDown: 1,
    role: 0,
    shortDescription: "Chat with bot",
    longDescription: "বাংলা ও ইংরেজিতে সাধারণ কথোপকথন",
    category: "chat",
    guide: "{pn} [কথা লিখো]"
  },

  onStart: async function ({ message, args, event }) {
    const input = args.join(" ").trim();

    if (!input) {
      const info = await message.reply(
        "💬 হ্যালো! আমাকে কিছু জিজ্ঞেস করো। ❤️\n\n👑 আমার Owner কে জানতে চাইলে লেখো: !chat owner কে"
      );
      saveReply(info, event);
      return;
    }

    const info = await message.reply(getAnswer(input));
    saveReply(info, event);
  },

  onReply: async function ({ message, event }) {
    const input = (event.body || "").trim();

    const info = await message.reply(
      input ? getAnswer(input) : "😊 কিছু লিখে বলো!"
    );

    saveReply(info, event);
  }
};
        
