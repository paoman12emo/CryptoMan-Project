const mongoose = require('mongoose');
const Coin = require("./Model/Model.js");


 function queryCoin(name){


 try {

    mongoose.connect('mongodb+srv://paoman12emo:Paoman12pao@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });


 Coin.find({},(err,res)=>{
  let coinData = res[0];
  if(name===coinData.coinShortName){
    console.log(coinData.coinFullName)
  }else{
    console.log(coinData.URL)
  }


})


}
catch(err){
  console.log(err);
}
}

queryCoin("BITCOIN")