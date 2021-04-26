const mongoose = require('mongoose');
const Coin = require('../Model/model.js')

mongoose.connect("mongodb+srv://paoman12emo:Paoman12pao@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority",{
useNewUrlParser: true, useUnifiedTopology: true
});


function checkCoin(coin){
    console.log(coin);
    Coin.find({coinShortName:coin},(err, res)=>{
        console.log(res);
    });
}



module.exports = checkCoin;
