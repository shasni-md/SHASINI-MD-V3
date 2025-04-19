//lassna Dina  thama ane///

const { cmd } = require('../command');

cmd({
    pattern: "boom",
    desc: "Send a message multiple times",
    react: "📢",
    filename: __filename
}, async (conn, mek, m, { from, args }) => {
    if (args.length < 2) {
        return await conn.sendMessage(from, { text: "Usage: *.flood <count> <message>*\nExample: *.flood 500 Hello!*" });
    }

    const count = parseInt(args[0]);
    if (isNaN(count) || count <= 0 || count > 500) {
        return await conn.sendMessage(from, { text: "Please provide a valid count (1-500)." });
    }

    const message = args.slice(1).join(" ");

    for (let i = 0; i < count; i++) {
        await conn.sendMessage(from, { text: message });
        await new Promise(resolve => setTimeout(resolve, 500)); // 0.5-second delay to avoid spam detection
    }
});

// credit = dark tech zone
