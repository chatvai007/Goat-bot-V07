
module.exports = {
  config: {
    name: "quiz",
    aliases: ["qz", "mcq"],
    version: "1.0",
    author: "Rayhan",
    countDown: 5,
    role: 0,
    category: "game",
    shortDescription: "Play a quiz game",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    const questions = [
      {
        q: "বাংলাদেশের রাজধানী কোনটি?",
        options: ["ঢাকা", "চট্টগ্রাম", "খুলনা", "রাজশাহী"],
        answer: 0
      },
      {
        q: "বাংলাদেশের জাতীয় ফুল কোনটি?",
        options: ["গোলাপ", "শাপলা", "জবা", "বেলি"],
        answer: 1
      },
      {
        q: "সূর্য কোন দিকে ওঠে?",
        options: ["পশ্চিম", "উত্তর", "পূর্ব", "দক্ষিণ"],
        answer: 2
      },
      {
        q: "এক সপ্তাহে কত দিন?",
        options: ["৫ দিন", "৬ দিন", "৭ দিন", "৮ দিন"],
        answer: 2
      },
      {
        q: "বাংলাদেশের জাতীয় ফল কোনটি?",
        options: ["আম", "কাঁঠাল", "লিচু", "কলা"],
        answer: 1
      },
      {
        q: "পৃথিবীর উপগ্রহ কোনটি?",
        options: ["সূর্য", "মঙ্গল", "চাঁদ", "শুক্র"],
        answer: 2
      },
      {
        q: "ইংরেজি বর্ণমালায় মোট কয়টি অক্ষর?",
        options: ["২৪টি", "২৫টি", "২৬টি", "২৭টি"],
        answer: 2
      },
      {
        q: "পানির রাসায়নিক সংকেত কী?",
        options: ["CO2", "H2O", "O2", "NaCl"],
        answer: 1
      },
      {
        q: "বাংলাদেশের জাতীয় পশু কোনটি?",
        options: ["সিংহ", "হরিণ", "রয়েল বেঙ্গল টাইগার", "হাতি"],
        answer: 2
      },
      {
        q: "২ + ৮ × ২ = কত?",
        options: ["২০", "১৮", "১৬", "১২"],
        answer: 1
      }
    ];

    const quiz =
      questions[Math.floor(Math.random() * questions.length)];

    const letters = ["A", "B", "C", "D"];

    const text =
      "🎯 QUIZ TIME 🎯\n\n" +
      "❓ " + quiz.q + "\n\n" +
      quiz.options
        .map((option, i) => letters[i] + ". " + option)
        .join("\n") +
      "\n\n💬 উত্তর দিতে লিখো:\n" +
      "!ans A / !ans B / !ans C / !ans D";

    global.GoatBotQuiz = global.GoatBotQuiz || {};
    global.GoatBotQuiz[message.threadID] = {
      answer: letters[quiz.answer],
      question: quiz.q
    };

    return message.reply(text);
  }
};
