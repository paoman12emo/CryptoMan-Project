const {reply,fallBack} = require("./replyModule.js");
const request = require('request');


function queryCoin(coinName,sender,url,cur){

   try{
    const options = {
      method: 'GET',
      url: 'https://coingecko.p.rapidapi.com/simple/price',
      qs: {ids: coinName, vs_currencies: cur,
           include_24hr_change: 'true',
           include_24hr_vol: 'true'
           },
      headers: {
        'x-rapidapi-key': '6c6939db0amsh5ec1aff2cab3017p199644jsn6945f7f35b64',
        'x-rapidapi-host': 'coingecko.p.rapidapi.com',
        useQueryString: true
      }
    };  
    request(options, function (err, response, body) {
  
      const coinInfo = JSON.parse(body);
   
      const name = Object.keys(coinInfo)[0]; 

      if(name == undefined){

        fallBack(sender)
       
      }
     else{
      const price = coinInfo[name].thb?coinInfo[name].thb:coinInfo[name].usd;
      
      const change = coinInfo[name].thb?coinInfo[name].thb_24h_change:coinInfo[name].usd_24h_change;

      const vol = coinInfo[name].thb?coinInfo[name].thb_24h_vol:coinInfo[name].usd_24h_vol;

      let us = coinInfo[name].thb?"฿":"$"

      reply(sender,name,price,change,vol,url,us);
      }

});
   }
  catch(err){
   
    console.log(err);
  }
}

  
      

    
module.exports = queryCoin;