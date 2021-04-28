const axios = require('axios');
const cheerio = require('cheerio');
const {replyTopLists}= require('./replyModule.js');




async function getTopLists(sender){
  try{
    const response =  await axios.get(`https://www.coingecko.com/en`)
    const html = response.data
    const $ = cheerio.load(html)
    const tops = $('.coin-name');
    const topsLists = []

    tops.each((index, element)=>{
        topsLists.push({
            text: $(element).attr('data-text')
          });
        });
  
        await replyTopLists(sender,topsLists);

        //[{},{}]
  }
 catch(err){
   console.log(err);
 }

}

module.exports = getTopLists;