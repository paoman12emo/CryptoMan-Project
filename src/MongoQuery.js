const mongoose = require('mongoose');
const Coin = require("../Model/Model.js");
const queryCoin = require("./queryCoin");


 function queryName(name,sender){


 try { mongoose.connect('mongodb+srv://paoman12emo:Paoman12pao@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

  Coin.find({},(err,res)=>{
    let coinData = res[0];
    if(name===coinData.coinShortName){
      queryCoin(coinData.coinFullName,sender,coinData.URL)
    }else{
      queryCoin(name,sender,coinData.URL)
    }
  
  
  })

}
catch(err){
  console.log(err);
}
}


module.exports= queryName;