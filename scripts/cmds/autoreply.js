
module.exports = {
  config: {
    name: "autoreply",
    version: "4.0.0",
    author: "Rayhan",
    countDown: 0,
    role: 0,
    category: "chat"
  },

  onChat: async ({ event, message }) => {
    return async () => {
      if (!event.body) return;

      const msg = event.body.toLowerCase().trim();

      const responses = {
        "hi": "হ্যালো! কেমন আছো? 😊",
        "hello": "হ্যালো! কী খবর? ❤️",
        "hey": "Hey! বলো কী হয়েছে? 😄",
        "assalamu alaikum": "ওয়ালাইকুম আসসালাম ❤️",
        "salam": "ওয়ালাইকুম আসসালাম!",
        "good morning": "Good Morning! 🌸",
        "good night": "Good Night! 🌙",
        "kemon acho": "আমি ভালো আছি! তুমি কেমন আছো?",
        "ki koro": "তোমাদের সাথেই আড্ডা দিচ্ছি! 😁",
        "owner": "আমার Developer Rayhan ❤️",
        "developer": "My Developer is Rayhan 👑",
        "tomar nam ki": "আমার নাম GoatBot! 🤖",
        "bot": "জি! আমি আছি 🤖",
        "bye": "আবার কথা হবে! 👋",
        "love": "ভালোবাসা সবার জন্য! ❤️"
      };

      if (responses[msg]) {
        await message.reply(responses[msg]);
      }
    };
  }
};
