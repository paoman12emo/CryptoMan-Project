const mongoose = require('mongoose');
const Coin = require("../Model/Model.js");


 function queryCoin(name){


 try { mongoose.connect('mongodb+srv://paoman12emo:Paoman12pao@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });


Coin.find({coinShortName: name},(err,res)=>{
  console.log(res[0].coinFullName,res);
  return (res[0].coinFullName);
})
}
catch(err){
  console.log(err);
}
}


module.exports= queryCoin;