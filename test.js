// const mongoose = require('mongoose');
// const Coin = require("./Model/Model.js");


// mongoose.connect('mongodb+srv://paoman12emo:Paoman12pao@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
//   });

// let coin = new Coin({
//   coinFullName: "TETHER" ,
//   coinShortName: "USDT",
//   URL: "https://coinmarketcap.com/currencies/tether/"
// })

// coin.save()


let cur = "USD"

let price = cur==="THB"?"1":"2"

console.log(price);









// let a ={
//   "_id": {
//       "$oid": "6086a53486b526e2f85dd062"
//   },
//   "coinFullName": "TETHER",
//   "coinShortName": "USDT",
//   "URL": "https://coinmarketcap.com/currencies/tether/"
// }