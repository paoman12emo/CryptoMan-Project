// const mongoose = require('mongoose');
// const Coin = require("./Model/Model.js");


// mongoose.connect('mongodb+srv://paoman12emo:paoman12pao@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
//   });

// let coin = new Coin({
//   coinFullName: "SOLANA" ,
//   coinShortName: "SOL",
//   URL: "https://coinmarketcap.com/currencies/SOLANA/"
// })

// console.log(coin);
// coin.save((err)=>{
//   if(!err){
//     console.log("ok");
//   }else{
//     console.log(err);
//   }
// })

const mongoose = require('mongoose');
const Coin = require("./Model/Model.js");

 function queryName(name){
  try { 
  let urlDB ='mongodb+srv://paoman12emo:paoman12pao@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority' 

    mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

  Coin.find({coinShortName : name},(err,res)=>{
    let coinData = res[0];
    console.log(coinData);
    if(coinData==undefined){
      console.log("ok");
    }else{
      console.log("not");
    }
  
  })

}
catch(err){
  console.log(err);
}
}

queryName("hhhh")






// let a ={
//   "_id": {
//       "$oid": "6086a53486b526e2f85dd062"
//   },
//   "coinFullName": "TETHER",
//   "coinShortName": "USDT",
//   "URL": "https://coinmarketcap.com/currencies/tether/"
// }