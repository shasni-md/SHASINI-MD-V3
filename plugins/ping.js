const config = require('../config')
const { cmd, commands } = require('../command')

// Define the ping command
cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "✅",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Start timer to calculate ping
        const startTime = Date.now()

        // Send initial message
        const message = await conn.sendMessage(from, { text: '> *ꜱʜᴀꜱɴɪ-ᴍᴅ..ᴘɪɴɢ ᴛᴇꜱᴛ😼💖(ꜱᴄʜɴ ᴛᴏ ᴘɪɴɢ😫)*' })

        // End timer and calculate ping
        const endTime = Date.now()
        const ping = endTime - startTime

        // Channel information text
        const channelInfo = `
         _*☊ ꜱʜᴀꜱɴɪ-ᴍᴅ ☊*_ : ${ping}ms
          ꜱʜᴀꜱɴɪ-ᴍᴅ ꜰᴏʀ ᴅᴇɴᴜᴡᴀɴ ᴋᴀᴜꜱʜɪᴋᴀ🫣🔷
        `;

        // Send the ping result along with the channel info
        await conn.sendMessage(
            from,
            {
                text: channelInfo,
                contextInfo: {
                    externalAdReply: {
                        title: "ꜱʜᴀꜱɴɪ-ᴍᴅ",
                        body: "© ꜱʜᴀꜱɴɪ-ᴍᴅ🫣",
                        thumbnail: { url: "https://i.ibb.co/ccKB4JM8/6426.jpg" },
                        sourceUrl: "https://whatsapp.com/channel/0029Vb2bq7tCHDyi6w2zfG0r",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            },
            { quoted: message }
        );
    } catch (e) {
        // Log any errors to the console and reply with error message
        console.log(e)
        reply(`Error: ${e.message}`)
    }
});
