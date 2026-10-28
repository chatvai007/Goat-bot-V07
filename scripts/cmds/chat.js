// chat.js
// AI Chat Bot for GoatBot
// Author: Rayhan

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "gemini-2.5-flash";

// প্রতি গ্রুপের সাম্প্রতিক কথোপকথন মনে রাখবে
const conversations = new Map();
const MAX_HISTORY = 12;

const SYSTEM_PROMPT = `
তুমি একজন বন্ধুত্বপূর্ণ, স্বাভাবিক বাংলা AI chat bot।
- বাংলা ও Banglish বুঝে উত্তর দেবে।
- ব্যবহারকারী যে ভাষায় কথা বলবে, সেই ভাষায় উত্তর দেবে।
- মানুষের মতো স্বাভাবিক, ছোট ও প্রাসঙ্গিক উত্তর দেবে।
- প্রয়োজন হলে প্রশ্ন করবে, মজা করবে এবং আড্ডা দেবে।
- আগের কথার প্রসঙ্গ ধরে রাখবে।
- নিজেকে মানুষ বলে মিথ্যা পরিচয় দেবে না।
- একই উত্তর বারবার দেবে না।
- অপ্রয়োজনীয় লম্বা উত্তর দেবে না।
`;

async function askGemini(threadID, userText) {
  if (!API_KEY) {
    throw new Error("GEMINI_API_KEY_MISSING");
  }

  let history = conversations.get(threadID) || [];

  history.push({
    role: "user",
    parts: [{ text: userText }]
  });

  // API-তে পাঠানো ইতিহাস সীমিত রাখা
  history = history.slice(-MAX_HISTORY);

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": API_KEY
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SYSTEM_PROMPT }]
        },
        contents: history,
        generationConfig: {
          temperature: 0.8,
          maxOutputTokens: 500
        }
      }),
      signal: AbortSignal.timeout(30000)
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Gemini API error:", response.status, errorText);
    throw new Error("GEMINI_API_ERROR");
  }

  const data = await response.json();

  const answer = data.candidates?.[0]?.content?.parts
    ?.map(part => part.text || "")
    .join("")
    .trim();

  if (!answer) {
    throw new Error("EMPTY_AI_RESPONSE");
  }

  history.push({
    role: "model",
    parts: [{ text: answer }]
  });

  conversations.set(threadID, history.slice(-MAX_HISTORY));

  return answer;
}

async function replyAI(message, threadID, text) {
  try {
    const answer = await askGemini(threadID, text);
    return message.reply(answer);
  } catch (error) {
    console.error("Chat error:", error.message);

    if (error.message === "GEMINI_API_KEY_MISSING") {
      return message.reply(
        "⚠️ AI চালু করতে GitHub Secrets-এ GEMINI_API_KEY যোগ করো।"
      );
    }

    return message.reply(
      "দুঃখিত! এখন AI-এর সঙ্গে সংযোগ হচ্ছে না। একটু পরে আবার চেষ্টা করো।"
    );
  }
}

module.exports = {
  config: {
    name: "chat",
    aliases: ["talk", "ai"],
    version: "2.0.0",
    author: "Rayhan",
    countDown: 3,
    role: 0,
    shortDescription: "AI-এর সঙ্গে কথা বলো",
    longDescription: "Gemini AI powered conversation",
    category: "chat",
    guide: "{pn} তোমার প্রশ্ন"
  },

  onStart: async function ({ message, args, event }) {
    const text = (args || []).join(" ").trim();

    if (!text) {
      return message.reply(
        "হ্যালো! 😊 আমি AI Chat Bot।\n\nআমাকে প্রশ্ন করো:\n!chat তুমি কেমন আছো?"
      );
    }

    const threadID = String(event.threadID || "default");
    return replyAI(message, threadID, text);
  },

  // সব মেসেজে উত্তর না দিয়ে শুধু "bot" দিয়ে শুরু হওয়া
  // মেসেজে উত্তর দেবে। যেমন: bot তুমি কেমন আছো?
  onChat: async function ({ event, message }) {
    if (!event || !event.body) return;

    const body = event.body.trim();
    const match = body.match(/^bot[\s,:]+(.+)$/i);

    if (!match || !match[1].trim()) return;

    const threadID = String(event.threadID || "default");
    return replyAI(message, threadID, match[1].trim());
  }
};
