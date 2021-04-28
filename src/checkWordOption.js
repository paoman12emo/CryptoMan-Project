const queryName = require("./MongoQuery.js");
const {howTo} = require("./replyModule.js");
const getNews = require("./news.js");
const getTopLists = require("./topTenLists.js");


function checkWord(char,sender){

let msg = char.toUpperCase();
try{

    if(msg.includes('CMTดูราคา')){
         queryName(msg.substring(9,msg.length),sender); 
    }
    else if(msg.includes('CMTดู')){
        queryName(msg.substring(5,msg.length),sender);  
        } 
    else if(msg.includes('CMTราคา')){
         queryName(msg.substring(7,msg.length),sender);  
    }
    else if(msg.includes('CMTใช้ยังไง')||msg.includes('CMTHOWTO')){
        howTo(sender);
    } 
    else if(msg.includes('CMU')){
        queryName(msg.substring(3,msg.length),sender,"USD");
    } 
    else if(msg.includes('CMTNEWS')){
        getNews(sender)
    }  
    else if(msg.includes('CMTLISTS')){
        getTopLists(sender)
    }  
    else{
        queryName(msg.substring(3,msg.length),sender,"THB");
        }
    }
    catch(err){
        
        console.log(err);
    }    

   
}

module.exports = checkWord;

