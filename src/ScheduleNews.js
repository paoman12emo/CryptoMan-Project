const axios = require('axios');
const cheerio = require('cheerio');
const {Sender} = require("../Model/Model.js");
const mongoose = require('mongoose');

const {reportNews}= require('./replyModule.js');

 
async function scheduleNews(){


let urlDB ='mongodb+srv://paoman12emo:paoman12pao@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority' 

mongoose.connect(urlDB, {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true
});
  try{
    const response =  await axios.get(`https://www.coingecko.com/th/news`)
    const html = response.data
    const $ = cheerio.load(html)
    const news = $('.tw-text-xl a[target]');
    const newsLists = []

    news.each((index, element)=>{
        newsLists.push({
            text: $(element).text(), 
            url: $(element).attr('href'), 
          });
        });


   await Sender.find({sender:'Ud664f827d5ae526a36458104b75da483'},(err,res)=>{
      res.forEach((item)=>{
        let sender = item.sender;

         reportNews(sender,newsLists);

       console.log(sender);
      })
    })
  
  
  }
 catch(err){
   console.log(err);
 }

    


}
module.exports= scheduleNews;