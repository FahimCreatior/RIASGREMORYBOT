//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Nairobi,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "254797633626";
global.owner = process.env.OWNER_NUMBER || "254797633626";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0RGSXlGWVBUSjBBUFdwZERUU09XS1FMR2pFNVNLTThSdjdOMGdldjhXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVldVdnBTRSt0cHg5cVhtNFdBeDM0TmVXMXZaQ3IzTGIrSGdqSG1iN1prQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTk5JYWlkcmhqMW9ObFBrQzdLSHBXVWxVcUd1UUV4NTRqaWRDSVJra2xBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1aVh2eVBxMEhJWGdhblp5am9PT1ViYm1mck1IdGhzaXk4VDByNWdiVFVnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1FSVZrVzlGZTBmaUF4VXhPVko4QXlQK0Q2UkNVOFRtZTZGcWxZbjkzRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdnMU9WVWhBd2FZenE4QVEzc2dOTWh5UnlQQkMzajRKRUtOd0haUzBQUUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU96VkFoaHl0VDNLVGhYZFZKZWFsbFpkbStocUlOd1dsMUx5TGFvaHpXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEFkSWZYOUQxY3Y2cUxWandzOXBJTXNwSDNhc1d2Zk82QnBSNloxTXRGYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRvamYzVGxRdXZ3NXVETzNIc1diTy95OTV2L0hOT3RRZFZoK1lPdkNaQ3lkTTQyQzZQQWVxTW1ucGR3bU5RTzhpTnJ0cnZEM0ljblduMTNFTFhRdWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6Imd2S0wrVERHbU96TktmN1lmekZkUGNmZWtRWXdITHJSVE5UOWE3V1VOclE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Inl2aFMyM3NRUW1xZVA1R1AyUVNraWciLCJwaG9uZUlkIjoiYTQ2NDMyYmUtNmQyNS00NGI5LTlhYTUtN2RiNDA5MjEzYTFkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRwWWRrZ3BmM1Y1ajRWYWxVYjR4UjEvZmpUMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4UDlqSjBnWlhqVTE2Ulc2emJnMnVjWUFDMEE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMjc1TTkxODUiLCJtZSI6eyJpZCI6IjI1NDc5NzYzMzYyNjoyNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEZVBDTWFzdGVyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOT1BxWllHRU82VnhMVUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKQnh1bGZoa2ErTTM1OWMzOGhRUHBaMEhtZHdhd0YxamYrOHhMR3duRUhjPSIsImFjY291bnRTaWduYXR1cmUiOiI1S0I1b0hGdFIxOFVTTytyNC8zb2RKRFFsb0t1WkRLT0QvaVFhRHhMQjF0Q2c1ZzM1VWxVc1U1SUVzdk5YbTNsUm1VMW5zcmh2dyt6ZFprcGNaUHJCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiblZFOXVWWTNXV1JHdUFLNnVGN0xibW9ONDR5ZWluVVdYU21tM2Zma3d1UXRWNmVZV0d0b3owQzc0WGVVcVdFeGlpVEc0dVJKcnJLdDg2YURlamhOakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3OTc2MzM2MjY6MjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU1FjYnBYNFpHdmpOK2ZYTi9JVUQ2V2RCNW5jR3NCZFkzL3ZNU3hzSnhCMyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjg3ODcxNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFNjEifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
