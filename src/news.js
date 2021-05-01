const axios = require('axios');
const cheerio = require('cheerio');
const {Sender} = require("../Model/Model.js");
const cron = require('node-cron');
const mongoose = require('mongoose');

const {reportNews}= require('./replyModule.js');



async function getNews(sender){

let urlDB ='mongodb+srv://paoman12emo:@cluster0.mf24n.mongodb.net/CryptoMan?retryWrites=true&w=majority' 

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

        await reportNews(sender,newsLists);
  }
 catch(err){
   console.log(err);
 }

}

module.exports = getNews;