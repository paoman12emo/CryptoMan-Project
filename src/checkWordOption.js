const changeCoinName =  require("./changeCoinName.js");

function checkWord(msg){

console.log(msg.substring(2,3),msg.substring(4,msg.length));

if(msg.substring(2,7) === "ดูราคา"){
    return changeCoinName(msg.substring(7,msg.length));
}
else if(msg.substring(2,3) === "ดู"){
        return changeCoinName(msg.substring(4,msg.length));  
    }
    
else if(msg.substring(2,5) === "ราคา"){
        return changeCoinName(msg.substring(6,msg.length));  
    }     
    else{
        return changeCoinName(msg.substring(2,msg.length)) 
    }

}

module.exports = checkWord;

