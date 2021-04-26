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


function queryCoin(coinName,cur){

   try{
    const options = {
      method: 'GET',
      url: 'https://coingecko.p.rapidapi.com/simple/price',
      qs: {ids: coinName, vs_currencies: cur,
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
   

      let name = Object.keys(coinInfo)[0];
      console.log(name);

      if(name== undefined){
        console.log("ok");
      }else{
        console.log("not");
      }
   

});
   }
  catch(err){
 
    console.log(err);
  }
}



queryCoin("BITCOINCASH","THB")




// let a ={
//   "_id": {
//       "$oid": "6086a53486b526e2f85dd062"
//   },
//   "coinFullName": "TETHER",
//   "coinShortName": "USDT",
//   "URL": "https://coinmarketcap.com/currencies/tether/"
// }