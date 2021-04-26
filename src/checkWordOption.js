const changeCoinName =  require("./changeCoinName.js");
const queryName = require("./MongoQuery.js")


function checkWord(char,sender){

let msg = char.toUpperCase();
try{

    if(msg.includes('CMTดูราคา')){
         queryName(msg.substring(9,msg.length)); 
    }
    else if(msg.includes('CMTดู')){
        queryName(msg.substring(5,msg.length));  
        } 
    else if(msg.includes('CMTราคา')){
         queryName(msg.substring(7,msg.length));  
    }
    else if(msg.includes('CMTใช้ยังไง')){
        return "howTo"
    } 
    // else if(msg.includes('CMTC')){
    //     return  function compare 2 coin
    // }    
    // else if(msg.includes('USD')){
    //     let coin = msg.replace("USD","").substring(3,msg.length);
    //     return {token:coin,cur:"USD"};
    // }
    else{
        queryName(msg.substring(3,msg.length),sender);
        }
    }
    catch(err){
        console.log(err);
    }    

    console.log(msg.substring(9,msg.length));
}

module.exports = checkWord;

