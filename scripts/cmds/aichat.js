
const axios = require("axios");

module.exports = {
  config: {
    name: "aichat",
    aliases: ["ai"],
    version: "1.0.0",
    author: "Rayhan",
    countDown: 5,
    role: 0,
    shortDescription: "Talk with AI",
    longDescription: "Chat with AI",
    category: "AI",
    guide: "{pn} তোমার প্রশ্ন"
  },

  onStart: async function ({ message, args }) {
    const question = args.join(" ").trim();

    if (!question) {
      return message.reply(
        "🤖 আমাকে কিছু জিজ্ঞেস করো!\nউদাহরণ: !ai কেমন আছো?"
      );
    }

    const key = process.env.OPENAI_API_KEY;

    if (!key) {
      return message.reply(
        "⚠️ AI API key সেট করা হয়নি।"
      );
    }

    try {
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "তুমি RAYHAN BOT। বন্ধুসুলভভাবে বাংলা বা ব্যবহারকারীর ভাষায় সংক্ষিপ্ত উত্তর দেবে।"
            },
            {
              role: "user",
              content: question
            }
          ],
          max_tokens: 350
        },
        {
          headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json"
          },
          timeout: 30000
        }
      );

      const answer =
        res.data.choices?.[0]?.message?.content?.trim();

      return message.reply(
        answer || "দুঃখিত, এবার উত্তর দিতে পারলাম না।"
      );
    } catch (err) {
      console.error(
        "AI Chat Error:",
        err.response?.data || err.message
      );

      return message.reply(
        "⚠️ AI এখন উত্তর দিতে পারছে না। API key, বিলিং এবং ইন্টারনেট চেক করো।"
      );
    }
  }
};
          
