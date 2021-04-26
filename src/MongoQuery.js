const mongoose = require('mongoose');
const Coin = require("../Model/Model.js");


 function queryCoin(name){


 try { mongoose.connect('mongodb+srv://paoman12emo:Paoman12pao@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });



let coin = Coin.find({coinShortName: name},(err,res)=>{
  return res[0].coinFullName;
})
console.log(coin);
// return coin
}
catch(err){
  console.log(err);
}
}


module.exports= queryCoin;