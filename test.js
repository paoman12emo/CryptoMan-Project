// const mongoose = require('mongoose');
// const Coin = require("./Model/Model.js");


// mongoose.connect('mongodb+srv://paoman12emo:Paoman12pao@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
//   });

// let coin = new Coin({
//   coinFullName: "NEO" ,
//   coinShortName: "NEO",
//   URL: "https://coinmarketcap.com/currencies/NEO/"
// })

// console.log(coin);
// coin.save((err)=>{
//   if(!err){
//     console.log("ok");
//   }else{
//     console.log(err);
//   }
// })
require('dotenv').config()

let urlDB ='mongodb+srv://paoman12emo:'+process.env.DB_KEY+'@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority' 

console.log(typeof(urlDB));









// let a ={
//   "_id": {
//       "$oid": "6086a53486b526e2f85dd062"
//   },
//   "coinFullName": "TETHER",
//   "coinShortName": "USDT",
//   "URL": "https://coinmarketcap.com/currencies/tether/"
// }