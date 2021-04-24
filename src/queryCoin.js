const {reply} = require("./replyModule.js");
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
        let coinInfo = JSON.parse(body);
        
        let name = Object.keys(coinInfo)[0];
  
        let price = coinInfo[name].thb;
  
        let change = coinInfo[name].thb_24h_change;
  
        let vol = coinInfo[name].thb_24h_vol;
  
        reply(sender,name,price,change,vol);

       }
  
      });
}

module.exports = queryCoin;