const dotenv = require("dotenv");
dotenv.config()
const express = require("express");
const bodyParser = require('body-parser')
const request = require('request')

const app = express();
const port = process.env.PORT || 4000


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())




//Message

app.post('/webhook', (req, res) => {
  let reply_token = req.body.events[0].replyToken;
  let msg = req.body.events[0].message.text;
  

    const options = {
      method: 'GET',
      url: 'https://coingecko.p.rapidapi.com/simple/price',
      qs: {ids: msg, vs_currencies: 'THB', include_last_updated_at: 'true'},
      headers: {
        'x-rapidapi-key': '6c6939db0amsh5ec1aff2cab3017p199644jsn6945f7f35b64',
        'x-rapidapi-host': 'coingecko.p.rapidapi.com',
        useQueryString: true
      }
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      let coinInfo = JSON.parse(body);
      
      let name = Object.keys(coinInfo)[0];

      let price = coinInfo[name].thb;

      // reply_token

      reply(reply_token,name,price);
    });

  res.sendStatus(200)
})



function reply(reply_token,name,price) {

  let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {process.env.CHANNEL_TOKEN}'
  }
 let body = JSON.stringify({
            replyToken: reply_token,
            messages: [{
            type: 'text',
            text: "ราคาของ" + name + "คือ" + price + "บาท"
            }]
         })
  
  request.post({
      url: 'https://api.line.me/v2/bot/message/reply',
      headers: headers,
      body: body
  }, (err, res, body) => {
      console.log('status = ' + res.statusCode);
  });
}







app.listen(port, function() {
    console.log("Server is online.")
  });
  