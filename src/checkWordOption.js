const changeCoinName =  require("./changeCoinName.js");

function checkWord(msg){
    
    if(msg.substring(2,8) === "ดูราคา"){
        return changeCoinName(msg.substring(8,msg.length)); //cmราคาBTC
    }
    else if(msg.substring(3,9) === "ดูราคา"){
        return changeCoinName(msg.substring(9,msg.length)); // "cm ราคาBTC"
    }
    else if(msg.substring(2,4) === "ดู"){
        return changeCoinName(msg.substring(4,msg.length));  // "cmราคาBTC"
        } 
    else if(msg.substring(3,5) === "ดู"){
        return changeCoinName(msg.substring(5,msg.length));  // "cm ราคาBTC"
        } 
    else if(msg.substring(2,6) === "ราคา"){
        return changeCoinName(msg.substring(6,msg.length));  //cmราคาBTC
    }
    else if(msg.substring(3,7) === "ราคา"){
        return changeCoinName(msg.substring(7,msg.length));  // "cm ราคาBTC"
    }        
    else{
        return changeCoinName(msg.substring(3,msg.length)) 
        }

}

module.exports = checkWord;

