const {reply,fallBack} = require("./replyModule.js");
const request = require('request');

function queryCoin(coinName,sender){
    const options = {
        method: 'GET',
        url: 'https://coingecko.p.rapidapi.com/simple/price',
        qs: {ids: coinName, vs_currencies: 'THB',
             include_24hr_change: 'true',
             include_24hr_vol: 'true'
             },
        headers: {
          'x-rapidapi-key': '6c6939db0amsh5ec1aff2cab3017p199644jsn6945f7f35b64',
          'x-rapidapi-host': 'coingecko.p.rapidapi.com',
          useQueryString: true
        }
      };
      
      request(options, function (error, response, body) {
       if(!error){
        const coinInfo = JSON.parse(body);
        
        const name = Object.keys(coinInfo)[0];
        
  
        const price = coinInfo[name].thb;
        
        const change = coinInfo[name].thb_24h_change;
  
        const vol = coinInfo[name].thb_24h_vol;

     if(name=== undefined || price===undefined){

      fallBack(sender)
     }else{
      
      reply(sender,name,price,change,vol);
     }
  
       }
  
      });
}

module.exports = queryCoin;