const mongoose = require("mongoose")



const coinSchema = mongoose.Schema({
    coinFullName: String,
    coinShortName: String,
    URL: String
});




const Coin = mongoose.model("CoinName",coinSchema);


module.exports = {Coin, Word}; 