const { cmd, commands } = require('../lib/command')
const config = require('../config')
var { get_set , input_set } = require('../lib/set_db') 
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')

cmd({
    pattern: "heartreact",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.heartreact on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.HEART_REACT == 'true') return reply('already on ')
  await input_set('HEART_REACT' , 'true')
  return reply('heartreact turned on')
  }
if ( q == 'off' ) {
   if ( config.HEART_REACT !== 'true') return reply('already off')
  await input_set('HEART_REACT' , 'false')
  return reply('heartreact turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})


cmd({
    pattern: "autovoice",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.autovoice on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.AUTO_VOICE == 'true') return reply('already on ')
  await input_set('AUTO_VOICE' , 'true')
  return reply('autovoice turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_VOICE !== 'true') return reply('already off')
  await input_set('AUTO_VOICE' , 'false')
  return reply('autovoice turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})


cmd({
    pattern: "autosticker",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.autosticmer on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.AUTO_STICKER == 'true') return reply('already on ')
  await input_set('AUTO_STICKER' , 'true')
  return reply('autosticker turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_STICKER !== 'true') return reply('already off')
  await input_set('AUTO_STICKER' , 'false')
  return reply('autosticker turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})


cmd({
    pattern: "autobio",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.autobio on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.AUTO_BIO == 'true') return reply('already on ')
  await input_set('AUTO_BIO' , 'true')
  return reply('autobio turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_BIO !== 'true') return reply('already off')
  await input_set('AUTO_BIO' , 'false')
  return reply('autobio turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "autowelcome",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.autowelcome on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.AUTO_WELCOME == 'true') return reply('already on ')
  await input_set('AUTO_WELCOME' , 'true')
  return reply('autowelcome turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_WELCOME !== 'true') return reply('already off')
  await input_set('AUTO_WELCOME' , 'false')
  return reply('autowelcome turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "antibot",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.antibot on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.ANTI_BOT == 'true') return reply('already on ')
  await input_set('ANTI_BOT' , 'true')
  return reply('antibot turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_BOT !== 'true') return reply('already off')
  await input_set('ANTI_BOT' , 'false')
  return reply('antibot turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "antilink",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.antilink on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.ANTI_LINK == 'true') return reply('already on ')
  await input_set('ANTI_LINK' , 'true')
  return reply('antilink turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_LINK !== 'true') return reply('already off')
  await input_set('ANTI_LINK' , 'false')
  return reply('antilink turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

	  
cmd({
    pattern: "antibad",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.antibad on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");
if (q == 'on') {
  if ( config.ANTI_BAD == 'true') return reply('already on ')
  await input_set('ANTI_BAD' , 'true')
  return reply('antibad turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_BAD !== 'true') return reply('already off')
  await input_set('ANTI_BAD' , 'false')
  return reply('antibad turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	


cmd({
    pattern: "autostatus",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.autostatus on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.AUTO_READ_STATUS == 'true') return reply('already on ')
  await input_set('AUTO_READ_STATUS' , 'true')
  return reply('autostatus turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_READ_STATUS !== 'true') return reply('already off')
  await input_set('AUTO_READ_STATUS' , 'false')
  return reply('autostatus turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "autotyping",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.autotyping on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.AUTO_TYPING == 'true') return reply('already on ')
  await input_set('AUTO_TYPING' , 'true')
  return reply('autotyping turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_TYPING !== 'true') return reply('already off')
  await input_set('AUTO_TYPING' , 'false')
  return reply('autotyping turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

cmd({
    pattern: "autorecording",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.autorecording on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.RECORDING == 'true') return reply('already on ')
  await input_set('RECORDING' , 'true')
  return reply('autorecording turned on')
  }
if ( q == 'off' ) {
   if ( config.RECORDING !== 'true') return reply('already off')
  await input_set('RECORDING' , 'false')
  return reply('autorecording turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

cmd({
    pattern: "cmdread",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.autotyping on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.READ_CMD == 'true') return reply('already on ')
  await input_set('READ_CMD' , 'true')
  return reply('cmd turned on')
  }
if ( q == 'off' ) {
   if ( config.READ_CMD !== 'true') return reply('already off')
  await input_set('READ_CMD' , 'false')
  return reply('cmdread turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

cmd({
    pattern: "autoreact",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.autoreact on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");
if (q == 'on') {
  if ( config.AUTO_REACT == 'true') return reply('already on ')
  await input_set('AUTO_REACT' , 'true')
  return reply('autoreact turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_REACT !== 'true') return reply('already off')
  await input_set('AUTO_REACT' , 'false')
  return reply('autoreact turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	



cmd({
    pattern: "alwaysonline",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.alwaysonline on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.ALWAYS_ONLINE == 'true') return reply('already on ')
  await input_set('ALWAYS_ONLINE' , 'true')
  return reply('alwaysonline turned on')
  }
if ( q == 'off' ) {
   if ( config.ALWAYS_ONLINE !== 'true') return reply('already off')
  await input_set('ALWAYS_ONLINE' , 'false')
  return reply('alwaysonline turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

cmd({
    pattern: "212block",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.212block on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.NUMBER_212_BLOCK == 'true') return reply('already on ')
  await input_set('NUMBER_212_BLOCK' , 'true')
  return reply('212block turned on')
  }
if ( q == 'off' ) {
   if ( config.NUMBER_212_BLOCK !== 'true') return reply('already off')
  await input_set('NUMBER_212_BLOCK' , 'false')
  return reply('212block turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "anticall",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.anticall on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.ANTI_CALL == 'true') return reply('already on ')
  await input_set('ANTI_CALL' , 'true')
  return reply('anticall turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_CALL !== 'true') return reply('already off')
  await input_set('ANTI_CALL' , 'false')
  return reply('anticall turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "antidelete",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.antidelete on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.ANTI_DELETE == 'true') return reply('already on ')
  await input_set('ANTI_DELETE' , 'true')
  return reply('antidelete turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_DELETE !== 'true') return reply('already off')
  await input_set('ANTI_DELETE' , 'false')
  return reply('antidelete turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "antidelete",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.antidelete on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.ANTI_DELETE == 'true') return reply('already on ')
  await input_set('ANTI_DELETE' , 'true')
  return reply('antidelete turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_DELETE !== 'true') return reply('already off')
  await input_set('ANTI_DELETE' , 'false')
  return reply('antidelete turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "aichat",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.aichat on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.AI_CHAT == 'true') return reply('already on ')
  await input_set('AI_CHAT' , 'true')
  return reply('aichat turned on')
  }
if ( q == 'off' ) {
   if ( config.AI_CHAT !== 'true') return reply('already off')
  await input_set('AI_CHAT' , 'false')
  return reply('aichat turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "autosongsend",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.autosongsend on/off',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");	
if (q == 'on') {
  if ( config.AUTO_SONG_SENDER == 'true') return reply('already on ')
  await input_set('AUTO_SONG_SENDER' , 'true')
  return reply('autosongsend turned on')
  }
if ( config.AUTO_SONG_SENDER !== 'true') return reply('already off')
  await input_set('AUTO_SONG_SENDER' , 'false')
  return reply('autosongsend turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})


cmd({
    pattern: "mode",
    react: "🗣️",
    desc: "",
    category: "",
    use: '.mode public/private',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isOwner) return reply("❌ You are not the owner!");		
if (q == 'private') {
  if ( config.MODE == 'private') return reply('already private ')
  await input_set('MODE' , 'private')
  return reply('private mode turned on')
  }
if ( q == 'public' ) {
   if ( config.MODE !== 'public') return reply('already public')
  await input_set('MODE' , 'public')
  return reply('public mode turned off')
}
if ( q == 'inbox' ) {
   if ( config.MODE !== 'inbox') return reply('already inbox')
  await input_set('MODE' , 'inbox')
  return reply('inbox mode turned off')
}
if ( q == 'groups' ) {
   if ( config.MODE !== 'groups') return reply('already groups')
  await input_set('MODE' , 'groups')
  return reply('groups mode turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "settings",
    react: "🗣️",
    alias: ["setting"],
    desc: "Check bot online or not.",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isOwner) return;

        const vv = await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/za6ytm.jpg' },
            caption: `*[ •  DIDULA-MD-V2 - SETTINGS‎ • ]*
*╭┈───────────────•*
*┊* *♾️ AUTO_READ_STATUS:* ➠ ${config.AUTO_READ_STATUS}
*┊* *♾️ MODE:* ➠ ${config.MODE} 
*┊* *♾️ AI_CHAT:* ➠ ${config.AI_CHAT} 
*┊* *♾️ ANTI_DELETE:* ➠ ${config.ANTI_DELETE} 
*┊* *♾️ AUTO_VOICE:* ➠ ${config.AUTO_VOICE} 
*┊* *♾️ AUTO_STICKER:* ➠ ${config.AUTO_STICKER} 
*┊* *♾️ ALIVE_IMG:* ➠ ${config.ALIVE_IMG
*┊* *♾️ ALIVE_MSG:* ➠ ${config.ALIVE_MSG}  
*┊* *♾️ SUDO:* ➠ ${config.SUDO}
*┊* *♾️ ANTI_LINK:* ➠ ${config.ANTI_LINK}
*┊* *♾️ ANTI_CALL:* ➠ ${config.ANTI_CALL} 
*┊* *♾️ ANTI_BAD:* ➠ ${config.ANTI_BAD} 
*┊* *♾️ PREFIX:* ➠ [${config.PREFIX}]
*┊* *♾️ AUTO_RECORDING:* ➠ ${config.RECORDING} 
*┊* *♾️ HEART_REACT:* ➠ ${config.HEART_REACT} 
*┊* *♾️ FOOTER:* ➠ ${config.FOOTER}
*┊* *♾️ AUTO_SONG_SENDER:* ➠ ${config.AUTO_SONG_SENDER} 
*┊* *♾️ CMD_READ:* ➠ ${config.READ_CMD}
*╰┈───────────────•*
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃      🔗  *CUSTOMIZE YOUR SETTINGS* ⤵️
┗━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃       🔧 *OPTIONS MENU* 🔧
┃━━━━━━━━━━━━━━━━━━━━━━━┃

┣━ *_WORK MODE_* ⤵️
┃   ┣ 1.1 🔹 *Public Work*
┃   ┣ 1.2 🔹 *Private Work*
┃   ┣ 1.3 🔹 *Groups Only*
┃   ┗ 1.4 🔹 *Inbox Only*

┣━ *_AUTO VOICE_* ⤵️
┃   ┣ 2.1 🔊 *Auto Voice On*
┃   ┗ 2.2 🔕 *Auto Voice Off*

┣━ *_AUTO STATUS SEEN_* ⤵️
┃   ┣ 3.1 👁️‍🗨️ *Auto Read Status On*
┃   ┗ 3.2 👁️❌ *Auto Read Status Off*

┣━ *_AUTO BIO_* ⤵️
┃   ┣ 4.1 ✍️ *Auto Bio On*
┃   ┗ 4.2 ✍️❌ *Auto Bio Off*

┣━ *_AUTO TYPING_* ⤵️
┃   ┣ 5.1 📝 *Activate Auto Typing*
┃   ┗ 5.2 📝❌ *Deactivate Auto Typing*

┣━ *_AUTO COMMAND READ_* ⤵️
┃   ┣ 6.1 🖊️ *Activate Auto Command Read*
┃   ┗ 6.2 🖊️❌ *Deactivate Auto Command Read*

┣━ *_ANTI CALL_* ⤵️
┃   ┣ 7.1 🔊 *Anti Call On*
┃   ┗ 7.2 🔕 *Anti Call Off*

┣━ *_HEART REACT_* ⤵️
┃   ┣ 8.1 ✍️ *Heart React On*
┃   ┗ 8.2 ✍️❌ *Heart React Off*

┣━ *_ANTI DELETE_* ⤵️
┃   ┣ 9.1 📝 *Activate Anti Delete*
┃   ┗ 9.2 📝❌ *Deactivate Anti Delete*

┣━ *_AUTO STICKER_* ⤵️
┃   ┣ 10.1 👁️‍🗨️ *Auto Sticker On*
┃   ┗ 10.2 👁️❌ *Auto Sticker Off*

┣━ *_AI CHAT* ⤵️
┃   ┣ 11.1 📝 *Activate Ai Chat*
┃   ┗ 11.2 📝❌ *Deactivate Ai Chat*

┣━ *_ANTI LINK_* ⤵️
┃   ┣ 12.1 🖊️ *Activate Anti Link*
┃   ┗ 12.2 🖊️❌ *Deactivate Anti Link*

┣━ *_ANTI BAD_* ⤵️
┃   ┣ 13.1 👁️‍🗨️ *Anti Bad On*
┃   ┗ 13.2 👁️❌ *Anti Bad Off*

┣━ *_AUTO RECORDING_* ⤵️
┃   ┣ 14.1 🔊 *Auto Recording On*
┃   ┗ 14.2 🔕 *Auto Recording Off*

┣━ *_AUTO SONG SENDER_* ⤵️
┃   ┣ 15.1 👁️‍🗨️ *Auto Song Sender On*
┃   ┗ 15.2 👁️❌ *Auto Song Sender Off*
┗━━━━━━━━━━━━━━━━━━━━━━━┛

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ DIDULA*
`
        }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply(".mode public" );
                        reply(".restart");
                        break;
                    case '1.2':               
                        reply(".mode private");
                        reply(".restart");
                        break;
                    case '1.3':               
                          reply(".mode groups");
                        reply(".restart");
                      break;
                    case '1.4':     
                        reply(".mode inbox");
                        reply(".restart");
                      break;
                    case '2.1':     
                        reply("autovoice on");
                        reply(".restart");
                        break;
                    case '2.2':     
                        reply(".autovoice off");
                        reply(".restart");
                    break;
                    case '3.1':    
                        reply(".autostatus on");
                        reply(".restart");
                    break;
                    case '3.2':    
                        reply(".autostatus off");
                        reply(".restart");
                    break;
                    case '4.1': 
                    reply(".autobio on");
                    reply(".restart");
                    break;
                    case '4.2': 
                    reply(".autobio off");
                    reply(".restart");
                    break;
                    case '5.1':      
                        reply(".autotyping on");
                        reply(".restart");
                        break;
                    case '5.2':   
                        reply(".autotyping off");
                        reply(".restart");
                    break;
                    case '6.1': 
                        reply(".cmdread on");
                        reply(".restart");
                    break;
                    case '6.2':   
                        reply(".cmdread off");
                        reply(".restart");
                    break;
                    case '7.1': 
                        reply(".anticall on");
                        reply(".restart");
                    break;
                    case '7.2':   
                        reply(".anticall off");
                        reply(".restart");
                        break;
                    case '8.1': 
                        reply(".heartreact on");
                        reply(".restart");
                    break;
                    case '8.2':   
                        reply(".heartreact off");
                        reply(".restart");
                        break;
                    case '9.1': 
                        reply(".antidelete on");
                        reply(".restart");
                    break;
                    case '9.2':   
                        reply(".antidelete off");
                        reply(".restart");
                        break;
                    case '10.1': 
                        reply(".autosticker on");
                        reply(".restart");
                    break;
                    case '10.2':   
                        reply(".autosticker off");
                        reply(".restart");
                        break;
                    case '11.1': 
                        reply(".aichat on");
                        reply(".restart");
                    break;
                    case '11.2':   
                        reply(".aichat off");
                        reply(".restart");
                        break;
                    case '12.1': 
                        reply(".antilink on");
                        reply(".restart");
                    break;
                    case '12.2':   
                        reply(".antilink off");
                        reply(".restart");
                        break;
                    case '13.1': 
                        reply(".antibad on");
                        reply(".restart");
                    break;
                    case '13.2':   
                        reply(".antibad off");
                        reply(".restart");
                        break;
                    case '14.1': 
                        reply(".autorecording on");
                        reply(".restart");
                    break;
                    case '14.2':   
                        reply(".autorecording off");
                        reply(".restart");
                        break;
                    case '15.1': 
                        reply(".autosongsend on");
                        reply(".restart");
                    break;
                    case '15.2':   
                        reply(".autosongsend off");
                        reply(".restart");
                    
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});