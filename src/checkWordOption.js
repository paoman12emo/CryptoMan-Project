const changeCoinName =  require("./changeCoinName.js");


function checkWord(char){


let msg = char.replace(/\s/g, '');

    if(msg.substring(3,9) === "ดูราคา"){
        return changeCoinName(msg.substring(9,msg.length)); 
    }
    else if(msg.substring(3,5) === "ดู"){
        return changeCoinName(msg.substring(5,msg.length));  
        } 
    else if(msg.substring(3,7) === "ราคา"){
        return changeCoinName(msg.substring(7,msg.length));  
    }
    else if(msg.substring(3,11) === "ใช้ยังไง"){
        return "howTo"
    }     
    else{
        return changeCoinName(msg.substring(3,msg.length)) 
        }

}

module.exports = checkWord;

