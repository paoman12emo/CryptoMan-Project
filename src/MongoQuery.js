const mongoose = require('mongoose');
const Coin = require("../Model/Model.js");
const queryCoin = require("./queryCoin");
const {fallBack} = require("./replyModule.js");


 function queryName(name,sender,cur){
  try { 
  let urlDB ='mongodb+srv://paoman12emo:paoman12pao@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority' 

    mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

  Coin.find({$or:[{coinShortName : name},{coinFullName : name}]},(err,res)=>{
    let coinData = res[0];
 
    if(coinData==undefined){
      fallBack(sender)
    }
     else if(name===coinData.coinShortName){
      
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