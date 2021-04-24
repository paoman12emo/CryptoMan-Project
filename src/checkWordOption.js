const changeCoinName =  require("./changeCoinName.js");


function checkWord(char){

let msg = char.toUpperCase();


    if(msg.includes('CMTดูราคา')){
        return changeCoinName(msg.substring(9,msg.length)); 
    }
    else if(msg.includes('CMTดู')){
        return changeCoinName(msg.substring(5,msg.length));  
        } 
    else if(msg.includes('CMTราคา')){
        return changeCoinName(msg.substring(7,msg.length));  
    }
    else if(msg.includes('CMTใช้ยังไง')){
        return "howTo"
    }   
    else{
        return changeCoinName(msg.substring(3,msg.length)) 
        }

}

module.exports = checkWord;

