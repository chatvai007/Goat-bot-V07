
const axios = require("axios");

const API_LIST = "https://gitlab.com/shahadat-sahu/sahu-api/-/raw/main/API.json";

const getMainAPI = async () => {
  const res = await axios.get(API_LIST, { timeout: 10000 });
  return res.data.simsimi;
};

module.exports.config = {
  name: "autoreply",
  version: "3.0.0",
  author: "Rayhan",
  role: 0,
  countDown: 0,
  category: "chat",
  usePrefix: false
};

const responses = {
  "miss you": "অরেক বেডারে Miss না করে xan মেয়ে হলে বস Rayhan রে হাঙ্গা করো😶👻😘",
  "miss u too": "হুম আমি ও তোমাকে Miss করি... কিন্তু Rayhan বস বেশি করে 😏💖",
  "kiss de": "কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬",
  "hi": "এত হাই-হ্যালো কর ক্যান প্রিও..!😜🫵",
  "bc": "SAME TO YOU😊",
  "pro": "Khud k0o KYa LeGend SmJhTi Hai 😂",
  "good morning": "GOOD MORNING দাঁত ব্রাশ করে খেয়ে নেও😚",
  "good night": "Sweet Dream babu… তবে আগে Rayhan বস কে GN বলে নিও 😏💤",
  "tor ball": "~ এখনো বাল উঠে নাই নাকি তোমার?? 🤖",
  "rayhan": "উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",
  "owner": "‎[𝐎𝐖𝐍𝐄𝐑:☞ RAYHAN ☜\nDeveloper: Rayhan",
  "admin": "He is RAYHAN তাকে সবাই Admin Rayhan হিসেবে চিনে😘☺️",
  "babi": "এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে😍.",
  "chup": "তুই চুপ চুপ কর পাগল ছাগল",
  "assalamualaikum": "Walaikumassalam❤️‍🩹",
  "fork": "https://gitlab.com/shahadat-sahu/SHAHADAT-CHAT-BOT.git",
  "kiss me": "তুমি পঁচা তোমাকে কিস দিবো না 🤭",
  "thanks": "এতো ধন্যবাদ না দিয়ে আমার বস Rayhan রে একটা ধন্যবাদ দে..!🐸",
  "i love you": "আমার বস Rayhan এর জন্য ভালোবাসা রইলো 🫢😻",
  "love you": "ভালোবাসা নামক আবলামী করতে চাইলে Boss Rayhan এর সাথে কথা বলো 😘",
  "by": "কিরে তুই কই যাস..!🌚",
  "ami rayhan": "হ্যা বস কেমন আছেন..?☺️",
  "ami shahadat": "হ্যা, কেমন আছেন? ☺️",
  "bot er baccha": "আমার আবার বাচ্চা আছে নাকি..!🌚😂",
  "tor nam ki": "MY NAME IS ─꯭─⃝‌‌𝐑𝐚𝐲𝐡𝐚𝐧 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭💖",
  "pic de": "এন থেকে সর দুরে গিয়া মর😒",
  "cudi": "এত চোদা চুদি করস কেনো..!🥱🌝🌚",
  "heda": "এতো রাগ শরীরের জন্য ভালো না 🥰",
  "lol": "ভাই তুই এত হাসিস না..!🌚🤣",
  "kire ki koros": "তোমার কথা ভাবতে ছি জানু 😚",
  "ki koros": "বস Rayhan এর সাথে আড্ডায় ব্যস্ত আছি 😏💘",
  "kire bot": "হ্যাঁ, বস কেমন আছেন? 😘😽🙈",
  "valo aso": "হ্যাঁ রে প্রিও, বস Rayhan এর দোয়ায় ভালো আছি 😌💞",
  "pagol": "হুম পাগল, কিন্তু তোমারই পাগল 😏😂",
  "breakup": "চিন্তা করিস না… Rayhan বস তো আছেই 😎🔥",
  "tui ke": "আমি তোর বস Rayhan এর ChatBot 😏",
  "umm": "এতো Umm কেনো জানু… কিছু বলবা? 😉",
  "hmm": "Hmmm কিসের হুমম জানু 🥵",
  "lovely": "Love করলে সরাসরি Rayhan বস কে বল জানু 😻🔥",

  "hello": "হ্যালো! কেমন আছো? ❤️",
  "hey": "এই যে! বলো কী খবর? 😁",
  "good": "বাহ! ভালো থেকো সবসময় ❤️",
  "nice": "Thank You! 🥰",
  "wow": "ওয়াও! 😍",
  "kemon acho": "আলহামদুলিল্লাহ ভালো আছি। তুমি?",
  "khaiso": "হ্যাঁ, তুমি খেয়েছো তো? 🍚",
  "single": "এটা ব্যক্তিগত ব্যাপার! 😂",
  "joke": "হাসতে থাকো, জীবন সুন্দর! 😂"
};

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
