const changeCoinName =  require("./changeCoinName.js");

function checkWord(msg){



if(msg.substring(0,6) === "ดูราคา"){
    return changeCoinName(msg.substring(6,msg.length));
}
else if(msg.substring(0,6) === "ดูราคา "){
        return changeCoinName(msg.substring(6,msg.length));  
    }
    else{
        return changeCoinName(msg) 
    }

}

module.exports = checkWord;

