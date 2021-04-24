require('dotenv').config();
 const x = process.env.CHANNEL_ACCESS_TOKEN

console.log("Bearer {"+process.env.CHANNEL_ACCESS_TOKEN+"}");