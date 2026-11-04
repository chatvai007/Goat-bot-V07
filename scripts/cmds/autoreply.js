
const axios = require("axios");

const API_LIST = "https://gitlab.com/shahadat-sahu/sahu-api/-/raw/main/API.json";

const getMainAPI = async () => {
  const res = await axios.get(API_LIST, { timeout: 10000 });
  return res.data.simsimi;
};

module.exports.config = {
  name: "autoreply",
  version: "4.0.0",
  author: "Rayhan",
  role: 0,
  countDown: 0,
  category: "chat",
  usePrefix: false
};

const responses = {
  // OLD REPLIES
  "miss you": "অরেক বেডারে Miss না করে বস Rayhan রে ডাকো! 😶👻😘",
  "miss u too": "হুম আমিও তোমাকে Miss করি... কিন্তু Rayhan বস বেশি করে 😏💖",
  "kiss de": "কিস দিস না তোর মুখে দূর গন্ধ, আগে দাঁত ব্রাশ কর! 😂",
  "hi": "এত হাই-হ্যালো কর ক্যান প্রিও..! 😜🫵",
  "bc": "SAME TO YOU 😊",
  "pro": "Khud k0o KYa LeGend SmJhTi Hai 😂",
  "good morning": "GOOD MORNING! দাঁত ব্রাশ করে খেয়ে নেও 😚",
  "good night": "Sweet Dream! তবে আগে Rayhan বস কে GN বলে নিও 😏💤",
  "tor ball": "এখনো বাল উঠেনি নাকি তোমার? 🤖",
  "rayhan": "উনি এখন কাজে বিজি আছে, কী বলবেন আমাকে বলতে পারেন..! 😘",
  "owner": "👑 OWNER: RAYHAN\n💻 DEVELOPER: RAYHAN",
  "admin": "He is RAYHAN! তাকে সবাই Admin Rayhan হিসেবে চিনে 😘☺️",
  "babi": "এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে 😍",
  "chup": "তুই চুপ চুপ কর পাগল ছাগল 😂",
  "assalamualaikum": "Walaikumassalam ❤️‍🩹",
  "fork": "https://gitlab.com/shahadat-sahu/SHAHADAT-CHAT-BOT.git",
  "kiss me": "তুমি পঁচা তোমাকে কিস দিবো না 🤭",
  "thanks": "এতো ধন্যবাদ না দিয়ে আমার বস Rayhan রে একটা ধন্যবাদ দে..! 🐸",
  "i love you": "আমার বস Rayhan এর জন্য ভালোবাসা রইলো 🫢😻",
  "love you": "ভালোবাসা নামক আবলামী করতে চাইলে Boss Rayhan এর সাথে কথা বলো 😘",
  "by": "কিরে তুই কই যাস..! 🌚",
  "ami rayhan": "হ্যাঁ বস কেমন আছেন..? ☺️",
  "ami shahadat": "হ্যাঁ, কেমন আছেন? ☺️",
  "bot er baccha": "আমার আবার বাচ্চা আছে নাকি..! 🌚😂",
  "tor nam ki": "MY NAME IS ─꯭─⃝‌‌𝐑𝐚𝐲𝐡𝐚𝐧 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 💖",
  "pic de": "ছবি দেখতে হলে আগে অনুমতি নাও 😒",
  "cudi": "এত চোদা চুদি করস কেনো..! 🥱🌝🌚",
  "heda": "এতো রাগ শরীরের জন্য ভালো না 🥰",
  "lol": "ভাই তুই এত হাসিস না..! 🌚🤣",
  "kire ki koros": "তোমার কথা ভাবতেছি জানু 😚",
  "ki koros": "বস Rayhan এর সাথে আড্ডায় ব্যস্ত আছি 😏💘",
  "kire bot": "হ্যাঁ, বস কেমন আছেন? 😘😽🙈",
  "valo aso": "হ্যাঁ রে প্রিয়, বস Rayhan এর দোয়ায় ভালো আছি 😌💞",
  "pagol": "হুম পাগল, কিন্তু তোমারই পাগল 😏😂",
  "breakup": "চিন্তা করিস না… Rayhan বস তো আছেই 😎🔥",
  "tui ke": "আমি তোর বস Rayhan এর ChatBot 😏",
  "umm": "এতো Umm কেনো জানু… কিছু বলবা? 😉",
  "hmm": "Hmmm কিসের হুমম জানু 🥵",
  "lovely": "Love করলে সরাসরি Rayhan বস কে বল জানু 😻🔥",

  // GREETING
  "hello": "হ্যালো! কেমন আছো? ❤️",
  "hey": "এই যে! বলো কী খবর? 😁",
  "hii": "হাইইই! কেমন আছো? 🥰",
  "heyy": "এই যে পাগল! বলো কী হয়েছে? 😜",
  "salam": "ওয়ালাইকুমুস সালাম ❤️",
  "good afternoon": "শুভ দুপুর! খাওয়া হয়েছে তো? 🥰",
  "good evening": "শুভ সন্ধ্যা! কেমন কাটছে দিন? ❤️",

  // DAILY CHAT
  "kemon acho": "আলহামদুলিল্লাহ ভালো আছি! তুমি কেমন? ❤️",
  "ki koro": "তোমাদের সাথেই আড্ডা দিচ্ছি! 😂",
  "ki koros": "তোমার মেসেজের অপেক্ষায় ছিলাম! 😜",
  "khaiso": "হ্যাঁ, তুমি খেয়েছো তো? 🍚",
  "ki khaba": "তুমি যা খাওয়াবে তাই খাবো! 😂",
  "ghum aso": "ঘুম পেলে বিশ্রাম নাও! 😴",
  "ghumai": "আচ্ছা যাও, ভালো করে ঘুমাও! 🌙",
  "kothay aso": "আমি তো এখানেই আছি! 🤖",
  "ki obostha": "সব ভালো! তোমার কী অবস্থা? 😎",
  "ki hoyeche": "কী হয়েছে বলো, শুনছি! ❤️",
  "bujhso": "হ্যাঁ বুঝেছি! আবার বুঝাতে হবে নাকি? 😂",
  "jani na": "একটু চিন্তা করো, উত্তর পেয়ে যাবে! 😁",
  "sotti": "একদম সত্যি বলছি! 😇",
  "mithha": "আমি আবার মিথ্যা বলি নাকি! 😂",

  // LOVE / EMOTIONS
  "miss u": "আমিও তোমাকে মিস করি! 🥺❤️",
  "love u": "Awww! কী সুন্দর কথা! 🥰",
  "bhalobashi": "ওহ! কথাটা তো অনেক সুন্দর! ❤️",
  "mon kharap": "মন খারাপ করো না, সব ঠিক হয়ে যাবে! 🥺",
  "sad": "হাসো একটু! ❤️",
  "single": "সিঙ্গেল লাইফ, নিজের মতো লাইফ! 😂",
  "relationship": "আগে বন্ধুত্বটা সুন্দর করো! 🥰",

  // FUNNY
  "haha": "হাসতে থাকো, হাসি ফ্রি! 😂",
  "hehe": "হিহিহি! কী মজা! 😁",
  "hahaha": "এত হাসলে পেট ব্যথা করবে! 🤣",
  "tui pagol": "তোমার সঙ্গেই থেকে পাগল হয়েছি! 🤣",
  "gadha": "গাধা হলেও কিন্তু স্মার্ট! 😎",
  "ki bolos": "যা বলি বুঝে শুনেই বলি! 😏",
  "faltu": "ফালতু হলেও কিন্তু জনপ্রিয়! 😎",
  "joke": "একটা হাসি দাও, সেটাই আজকের জোক! 😂",

  // ATTITUDE
  "attitude": "Attitude সবার থাকে, কিন্তু দেখানোর ক্ষমতা সবার নেই! 😎",
  "legend": "Legend কখনো নিজেকে Legend বলে না! 😂",
  "king": "নিজের রাজ্যের রাজা হও! 👑",
  "respect": "Respect দিলে Respect পাবে! ❤️",
  "power": "আসল Power হলো নিজের ওপর বিশ্বাস! 🔥",

  // FRIENDSHIP
  "friend": "বন্ধুত্ব থাকুক আজীবন! ❤️",
  "bondhu": "কী খবর বন্ধু? 🥰",
  "best friend": "Best Friend মানে আলাদা একটা অনুভূতি! 💖",
  "dost": "কী রে দোস্ত! সব ঠিকঠাক? 😎",
  "vai": "কী খবর ভাই! ❤️",
  "bro": "বলো ব্রো! কী অবস্থা? 😁",
  "sister": "কী খবর আপু? 🥰",
  "group": "গ্রুপ মানেই আড্ডা আর মজা! 😂",

  // OTHER
  "thank you": "এত ধন্যবাদ দিতে হবে না! 🥰",
  "welcome": "Welcome! ❤️",
  "sorry": "সমস্যা নেই, মাফ করে দিলাম! 😊",
  "bye": "টাটা! ভালো থেকো! ❤️",
  "ok": "ওকে বস! 😎",
  "okay": "ঠিক আছে! 🥰",
  "hmmm": "বলো বলো, শুনছি! 😁",
  "yes": "ইয়েস! 😎",
  "no": "নো মানে নো! 😂",
  "nice": "Thank You! 🥰",
  "wow": "ওয়াও! অসাধারণ! 😍",
  "awesome": "একদম অসাধারণ! 🔥",
  "help": "কী সাহায্য লাগবে বলো! 🤖",
  "bot": "হ্যাঁ বলো, আমি শুনছি! 🤖",
  "online": "আমি প্রস্তুত! 😎",
  "offline": "এখনো তো অনলাইন আছি! 😂",
  "miss": "কাকে মিস করছো বলো তো? 👀",
  "valo": "ভালো থাকো, হাসিখুশি থাকো! ❤️",
  "kharap": "মন খারাপ করো না! 🥺",
  "khuda hafez": "আল্লাহ হাফেজ! ❤️"
};

// AUTO REPLY SYSTEM
module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, body, senderID } = event;

  if (!body || senderID == api.getCurrentUserID()) return;

  const msg = body.toLowerCase().trim();
  if (!responses[msg]) return;

  return api.sendMessage(
    responses[msg],
    threadID,
    (err, info) => {
      if (err || !info) return;

      if (!global.client.handleReply)
        global.client.handleReply = [];

      global.client.handleReply.push({
        name: module.exports.config.name,
        messageID: info.messageID,
        author: senderID
      });
    },
    messageID
  );
};

// AI REPLY SYSTEM
module.exports.handleReply = async function ({
  api,
  event,
  handleReply
}) {
  if (event.senderID !== handleReply.author || !event.body) return;

  try {
    const base = await getMainAPI();

    const res = await axios.get(
      `${base}/simsimi?text=${encodeURIComponent(event.body.trim())}`,
      { timeout: 15000 }
    );

    const reply = Array.isArray(res.data.response)
      ? res.data.response[0]
      : res.data.response;

    if (!reply) throw new Error("Empty API response");

    return api.sendMessage(
      String(reply),
      event.threadID,
      (err, info) => {
        if (err || !info) return;

        global.client.handleReply.push({
          name: module.exports.config.name,
          messageID: info.messageID,
          author: event.senderID
        });
      },
      event.messageID
    );

  } catch (error) {
    return api.sendMessage(
      "🙂 একটু পরে আবার বলো!",
      event.threadID,
      event.messageID
    );
  }
};

module.exports.run = async function ({ api, event }) {
  return module.exports.handleEvent({ api, event });
};
