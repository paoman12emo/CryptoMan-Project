const mongoose = require("mongoose")



const coinSchema = mongoose.Schema({
    coinFullName: String,
    coinShortName: String,
    URL: String
});


const senderSchema = mongoose.Schema({
    sender: String
});



const Sender = mongoose.model("Sender",senderSchema)
const Coin = mongoose.model("CoinName",coinSchema);



module.exports = {Coin, Sender}; 