const axios = require('axios');
const cheerio = require('cheerio');

const {reportNews}= require('./replyModule.js');



async function getNews(sender){
  try{
    const response =  await axios.get(`https://www.coingecko.com/th/news`)
    const html = response.data
    const $ = cheerio.load(html)
    const news = $('.posts-article-snippet-title a');
    const newsLists = []

    news.each((index, element)=>{
        newsLists.push({
            text: $(element).text(), 
            url: $(element).attr('href'), 
          });
        }).then(reportNews(sender,newsLists));
  
  }
 catch(err){
   console.log(err);
 }

}

module.exports = getNews;