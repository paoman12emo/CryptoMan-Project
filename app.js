require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const {greeting} = require("./src/replyModule.js");
const checkWord = require("./src/checkWordOption.js");
const queryCoin = require("./src/queryCoin.js");
const changeCoinName = require("./src/changeCoinName");


const app = express();
const port = process.env.PORT || 4000


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())




//Message

app.post('/callback',(req, res) => {
  
  const status = req.body.events[0].type;
  const groupId = req.body.events[0].source.groupId?req.body.events[0].source.groupId:req.body.events[0].source.userId;

   status === "join"&& greeting(groupId);
  


if(status!= "join"){
  let msg = req.body.events[0].message.text;
  let sender = req.body.events[0].source.groupId?req.body.events[0].source.groupId:req.body.events[0].source.userId


  if(msg.substring(0,1)==="cm" || "CM" || "Cm"){
    console.log("ok");
    let coinName = checkWord(msg);
    

     queryCoin(coinName,sender)

 

    res.sendStatus(200)

  }else{
    res.sendStatus(200)
  }

  } 

})








app.listen(port, function() {
    console.log("Server is online.")
  });
  