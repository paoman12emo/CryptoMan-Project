require('dotenv').config();
 const x = process.env.CHANNEL_ACCESS_TOKEN

console.log(typeof('Bearer {'+process.env.CHANNEL_ACCESS_TOKEN+'.}'));