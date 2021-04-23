require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser')
const request = require('request')

const app = express();
const port = process.env.PORT || 4000


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())




//Message

app.post('/callback', (req, res) => {
  // let reply_token = req.body.events[0].replyToken;
  let msg = req.body.events[0].message.text;
  let sender = req.body.events[0].source.userId
 
  
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

      reply(sender,name,price);
    });

  res.sendStatus(200)
})

function reply(sender,name,price) {

 let body = {
            to: sender,
            messages: [
              {
            type: 'text',
            text: name + "ราคาตอนนี้คือ" + price + "บาท"
            }
          ]
         }
  
request({
          headers:  {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer {MFUej68ETDOmnN95+n7dOkr9SGQ8bPw9mn9C4RmlE1wud2zkVcAHbzK7ibC6+mHC6tcWSL6LVKgxU5Mg5i+juHoLGbKxfB5pJmquyre71iSSs886P3KB7wMWVargRO1aEEoGeWhrpGhv2aArMD7U0AdB04t89/1O/w1cDnyilFU=}'
        },
          url: 'https://api.line.me/v2/bot/message/push',
          method: 'POST',
          body: body,
          json: true
        }, function (err, res, body) {
          if (err) console.log('error')
          if (res) console.log('success')
          if (body) console.log(body)
        })
      }







app.listen(port, function() {
    console.log("Server is online.")
  });
  