const changeCoinName =  require("./changeCoinName.js");

function checkWord(char){


let msg = char.replace(/\s/g, '');

    if(msg.substring(2,8) === "ดูราคา"){
        return changeCoinName(msg.substring(8,msg.length)); 
    }
    else if(msg.substring(2,4) === "ดู"){
        return changeCoinName(msg.substring(4,msg.length));  
        } 
    else if(msg.substring(2,6) === "ราคา"){
        return changeCoinName(msg.substring(6,msg.length));  
    }    
    else{
        return changeCoinName(msg.substring(3,msg.length)) 
        }

}

module.exports = checkWord;

