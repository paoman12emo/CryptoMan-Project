require('dotenv').config()
const mongoose = require('mongoose');
const Coin = require("../Model/Model.js");
const queryCoin = require("./queryCoin");


 function queryName(name,sender,cur){

  let urlDB ='mongodb+srv://paoman12emo:'+process.env.DB_KEY+'@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority' 


 try { mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

  Coin.find({coinShortName : name},(err,res)=>{
    let coinData = res[0];
    if(name===coinData.coinShortName){
      
      queryCoin(coinData.coinFullName,sender,coinData.URL,cur)
    }else{
      
      queryCoin(name,sender,coinData.URL,cur)
    }
  
  
  })

}
catch(err){
  console.log(err);
}
}


module.exports= queryName;