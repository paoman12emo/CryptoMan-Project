const express = require("express");
const bodyParser = require('body-parser');
const {greeting} = require("./src/replyModule.js");
const checkWord = require("./src/checkWordOption.js");
const mongoose = require("mongoose")
const {Sender} = require("./Model/Model.js")
const scheduleNews = require("./src/ScheduleNews.js")
const cron = require('node-cron');



const app = express();
const port = process.env.PORT || 4000


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


let urlDB ='mongodb+srv://paoman12emo:paoman12pao@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority' 

    mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });



//Message

app.post('/callback',(req, res) => {
  
 try{

  const status = req.body.events[0].type;
  let sender = req.body.events[0].source.groupId?req.body.events[0].source.groupId:req.body.events[0].source.userId;

  console.log({status:status,sender:sender});

  Sender.find({sender:sender},(err,res)=>{
    if(res.length===0){
      let register = new Sender({
        sender: sender
      })
        
      register.save((err)=>{
        if(err){
          console.log(err);
        }else{
          console.log("resigter complete");
        }
      })
      
    }else{
      console.log("Found ID");
    }
  })

  if(status === "join"|| status === "follow" ){
    greeting(sender)
  }
else{
  const char = req.body.events[0].message.text;

  let msg = char.replace(/\s/g, '');


  if(msg.substring(0,3).toUpperCase()==="CMT"&& msg.length !== 3||msg.substring(0,3).toUpperCase()==="CMU"&& msg.length !== 3){
   
    let coinName = checkWord(msg,sender);

        
    cron.schedule('* 5 * * *', () => {
      scheduleNews()

    });
    
  
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
  