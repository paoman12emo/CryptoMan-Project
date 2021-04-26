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
const request = require('request');


function queryCoin(coinName){

  try{
   const options = {
     method: 'GET',
     url: 'https://coingecko.p.rapidapi.com/simple/price',
     qs: {ids: coinName, vs_currencies: "THB",
          include_24hr_change: 'true',
          include_24hr_vol: 'true'
          },
     headers: {
       'x-rapidapi-key': '6c6939db0amsh5ec1aff2cab3017p199644jsn6945f7f35b64',
       'x-rapidapi-host': 'coingecko.p.rapidapi.com',
       useQueryString: true
     }
   };  
   request(options, function (err, response, body) {
 
     const coinInfo = JSON.parse(body);
  
    console.log(coinInfo);

});
  }
 catch(err){
  
   console.log(err);
 }
}

queryCoin("BITCOIN-CASH");