const express = require("express");
const bodyParser = require('body-parser');
const {greeting} = require("./src/replyModule.js");
const checkWord = require("./src/checkWordOption.js");




const app = express();
const port = process.env.PORT || 4000


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())




//Message

app.post('/callback',(req, res) => {
  
 try{

  const status = req.body.events[0].type;
  const sender = req.body.events[0].source.groupId?req.body.events[0].source.groupId:req.body.events[0].source.userId;

  console.log({status:status, sender:sender});
  

  status === "join"&& greeting(sender);
  
  const char = req.body.events[0].message.text;

  let msg = char.replace(/\s/g, '');
  console.log(msg);

if(status!= "join"){

  if(msg.substring(0,3).toUpperCase()==="CMT"&& msg.length !== 3||msg.substring(0,3).toUpperCase()==="CMU"&& msg.length !== 3){
   
    let coinName = checkWord(msg,sender);
     
  
   if( coinName === "howTo"){
     
    howTo(sender)

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
  