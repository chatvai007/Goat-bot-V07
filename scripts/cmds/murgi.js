
module.exports.config = {
    name: "murgi",
    version: "3.0",
    role: 0,
    author: "Rayhan",
    description: "Funny Murgi Command",
    category: "fun",
    guide: "{pn} @mention",
    coolDown: 10
};

module.exports.onStart = async function ({ api, event }) {
    const mentions = event.mentions || [];

    if (!mentions.length || !mentions[0]?.id) {
        return api.sendMessage(
            "🐔 কাকে মুরগি বানাবো? আগে কাউকে @mention করো!",
            event.threadID,
            event.messageID
        );
    }

    const target = mentions[0];
    const name = target.name || "বন্ধু";
    const uid = target.id;

    const messages = [
        "🐔 কুট কুট! মুরগি সাহেব হাজির! 😂",
        "🤣 তুই কি মুরগির বংশের রাজপুত্র?",
        "🥚 ডিম কই? শুধু ডাকাডাকি করিস!",
        "🐔 তোর হাঁটা দেখলে মুরগিও লজ্জা পায়!",
        "😂 কুট কুট বাদ দে, একটু মানুষ হ!",
        "🐣 তুই তো মুরগির CEO!",
        "🤣 আজকে তোর মুরগি দিবস!",
        "🐔 তোর জন্য একটা মুরগির খাঁচা লাগবে!",
        "🥚 ডিমের হিসাব পরে দিস!",
        "😂 মুরগির জগতে তুই সেলিব্রিটি!",
        "🐓 কক কক! মুরগি সাহেবের আগমন!",
        "🤣 তোরে দেখলে মুরগিরাও হাসে!",
        "🐔 তুই কি মুরগির স্কুলে পড়িস?",
        "😂 কুট কুট ইউনিভার্সিটির গোল্ড মেডেল!",
        "🐣 মুরগি বাহিনীর প্রধান সেনাপতি!",
        "🤣 তোর ডাক শুনে মোরগও পালায়!",
        "🐔 তুই মুরগি নাকি মুরগির মামা?",
        "😂 খাঁচার VIP সদস্য হাজির!",
        "🐓 মুরগি সাহেব, সালাম নিন!",
        "🤣 মুরগি রাজ্যের ভবিষ্যৎ সম্রাট!"
    ];

    for (const msg of messages) {
        await new Promise(resolve => setTimeout(resolve, 2000));

        await new Promise(resolve => {
            api.sendMessage(
                `${name}, ${msg}`,
                event.threadID,
                () => resolve()
            );
        });
    }
};
