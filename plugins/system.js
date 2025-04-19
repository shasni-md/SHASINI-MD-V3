const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "system",
    alias: ["status", "botinfo"],
    desc: "Check bot uptime and system info",
    category: "main",
    react: "👀",
    filename: __filename
},
async (conn, mek, m, { reply }) => {
    try {
        let status = `┌────────────────────
├ ⏰ *Runtime:* ${runtime(process.uptime())}    
├ 📟 *RAM Usage:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
├ ⚙️ *Platform:* ${os.hostname()}
├ 👨‍💻 *Owner:* Denuwan Kaushika   
├ 👾 *Version:* 1.0.0
└───────────────────────

*©ꜱʜᴀꜱɴɪ-ᴍᴅ ʙʏ ᴅᴇɴᴜᴡᴀɴ ᴋᴀᴜꜱʜɪᴋᴀッ*`;

        return reply(status);
    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
