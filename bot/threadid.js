
const { log } = global.utils;

module.exports = async function ({
  api,
  getText
}) {
  const PREFIX = "!";
  const OWNER = "Rayhan";
  const THREAD_ID = "YOUR_THREAD_ID";

  const message = `
╭━━━━━━━━━━━━━━━━━━━━╮
┃ 🤖 𝐑𝐀𝐘𝐇𝐀𝐍 𝐁𝐎𝐓
┣━━━━━━━━━━━━━━━━━━━━┫
┃
┃ ✅ 𝐁𝐎𝐓 𝐈𝐒 𝐍𝐎𝐖 𝐎𝐍𝐋𝐈𝐍𝐄 🎉
┃
┃ 👑 𝐎𝐰𝐧𝐞𝐫 : ${OWNER}
┃ ⚡ 𝐏𝐫𝐞𝐟𝐢𝐱 : ${PREFIX}
┃ 💚 𝐒𝐭𝐚𝐭𝐮𝐬 : Active
┃
┃ ✨ 𝐄𝐧𝐣𝐨𝐲 𝐓𝐡𝐞 𝐁𝐨𝐭!
┃
┃ 📌 𝐇𝐞𝐥𝐩 𝐂𝐨𝐦𝐦𝐚𝐧𝐝
┃ ➜ ${PREFIX}help
┃
┃ 👤 𝐎𝐰𝐧𝐞𝐫 𝐏𝐫𝐨𝐟𝐢𝐥𝐞:
┃ https://www.facebook.com/share/1DsbA72sZr/
┃
╰━━━━━━━━━━━━━━━━━━━━╯
`;

  // Send startup message to the selected group
  if (THREAD_ID !== "YOUR_THREAD_ID") {
    api.sendMessage(message, THREAD_ID, (err) => {
      if (err) {
        log.error("RAYHAN BOT", err);
      } else {
        log.info("RAYHAN BOT startup message sent");
      }
    });
  }

  // Refresh Facebook session data every 48 hours
  setInterval(() => {
    api.refreshFb_dtsg()
      .then(() => {
        log.info("Facebook session data refreshed");
      })
      .catch((err) => {
        log.error("Facebook session refresh failed", err);
      });
  }, 48 * 60 * 60 * 1000);
};
                  
