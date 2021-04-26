const changeCoinName =  require("./changeCoinName.js");
const queryCoin = require("./MongoQuery.js")


function checkWord(char){

let msg = char.toUpperCase();
try{

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
    else if(msg.includes('CMTC')){
        return // function compare 2 coin
    }    
    else if(msg.includes('USD')){
        let coin = msg.replace("USD","").substring(3,msg.length);
        return {token:coin,cur:"USD"};
    }
    else{
        return queryCoin(msg.substring(3,msg.length));
        }
    }
    catch(err){
        console.log(err);
    }    

    console.log(queryCoin(msg.substring(3,msg.length)),msg.substring(3,msg.length));
}

module.exports = checkWord;

