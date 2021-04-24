const express = require("express");
const bodyParser = require('body-parser');
const {greeting,howTo,fallBack} = require("./src/replyModule.js");
const checkWord = require("./src/checkWordOption.js");
const queryCoin = require("./src/queryCoin.js");
const changeCoinName = require("./src/changeCoinName");


const app = express();
const port = process.env.PORT || 4000


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())




//Message

app.post('/callback',(req, res) => {
  
 try{

  const status = req.body.events[0].type;
  const sender = req.body.events[0].source.groupId?req.body.events[0].source.groupId:req.body.events[0].source.userId;
  

  status === "join"&& greeting(sender);
  
  const char = req.body.events[0].message.text;

  let msg = char.replace(/\s/g, '');

if(status!= "join"){

  if(msg.substring(0,3).toUpperCase()==="CMT"&& msg.length !== 3){
   
    let coinName = checkWord(msg);
     
   console.log(coinName.token,coinName.cur.coinName);

   if( coinName === "howTo"){
     
    howTo(sender)

   }

   else if(coinName.cur){
     console.log(ok);
    queryCoin(coinName.token,sender,coinName.cur);
   }
   
   else{
    queryCoin(coinName,sender)
   }
          
  
    res.sendStatus(200)

  }else{
    res.sendStatus(200)
  }

   } 
  }
  catch(err){
    console.log(err);
  }
});




app.listen(port, function() {
    console.log("Server is online.")
  });
  