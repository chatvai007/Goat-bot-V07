
module.exports.config = {
    name: "murgi",
    version: "2.1.0",
    role: 0,
    author: "Rayhan",
    description: "Mention করে ৫টি মজার রোস্ট পাঠাবে",
    category: "fun",
    guide: "{pn} @mention",
    coolDown: 30
};

module.exports.onStart = async function ({ api, event }) {
    const threadID = event.threadID;
    const mentions = event.mentions || {};
    const targetID = Object.keys(mentions)[0];

    if (!targetID) {
        return api.sendMessage(
            "🐔 কাকে মুরগি বানাবে? 😂\n\nব্যবহার: !murgi @mention",
            threadID
        );
    }

    const name = mentions[targetID];

    const messages = [
        `🐔 ${name}, কক কক! আজকে তোমার মুরগি দিবস! 😂`,
        `🤣 ${name}, তোমার বুদ্ধি কি ছুটিতে গেছে নাকি?`,
        `😎 ${name}, গ্রুপে ঢুকলেই মুরগির ডাক শোনা যায়!`,
        `😂 ${name}, তোমার সঙ্গে তর্ক করতে হলে মুরগির ভাষা শিখতে হবে!`,
        `🐔 ${name}, আজকের মুরগি কিং তুমি! অভিনন্দন! 👑`
    ];

    const sleep = ms =>
        new Promise(resolve => setTimeout(resolve, ms));

    for (let i = 0; i < messages.length; i++) {
        try {
            await new Promise((resolve, reject) => {
                api.sendMessage(
                    {
                        body: messages[i],
                        mentions: [{
                            tag: name,
                            id: targetID
                        }]
                    },
                    threadID,
                    err => err ? reject(err) : resolve()
                );
            });

            if (i < messages.length - 1) {
                await sleep(3000);
            }
        } catch (err) {
            console.error("[MURGI ERROR]", err);
            return api.sendMessage(
                "❌ মেসেজ পাঠাতে সমস্যা হয়েছে। Bot-এর লগ চেক করো।",
                threadID
            );
        }
    }
};
