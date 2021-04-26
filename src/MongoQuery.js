const mongoose = require('mongoose');
const Coin = require("./Model/Model.js");


 function queryCoin(name){

   mongoose.connect('mongodb+srv://paoman12emo:Paoman12pao@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  console.log(name);

Coin.find({coinShortName: name},(err,res)=>{
  return (res[0].coinFullName);
})

}


module.exports= queryCoin;