require('dotenv').config()

const express = require("express");
const bodyParser = require('body-parser')
const request = require('request')
const rp = require('request-promise');


const app = express();
const port = process.env.PORT || 4000


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())




//Message

app.post('/webhook', (req, res) => {
  let reply_token = req.body.events[0].replyToken;
  let msg = req.body.events[0].message.text;
  reply(reply_token, msg);
  res.sendStatus(200)
})


function reply(reply_token, msg) {
  let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {MFUej68ETDOmnN95+n7dOkr9SGQ8bPw9mn9C4RmlE1wud2zkVcAHbzK7ibC6+mHC6tcWSL6LVKgxU5Mg5i+juHoLGbKxfB5pJmquyre71iSSs886P3KB7wMWVargRO1aEEoGeWhrpGhv2aArMD7U0AdB04t89/1O/w1cDnyilFU=}'
  }
    if(msg === 'Crypto'){
            let body = JSON.stringify({
              replyToken: reply_token,
              messages: [{
                  type: 'text',
                  text: "Ok let's see."
              }]
          })
    }

 
  request.post({
      url: 'https://api.line.me/v2/bot/message/reply',
      headers: headers,
      body: body
  }, (err, res, body) => {
      console.log('status = ' + res.statusCode);
  });
}

const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '5000',
    'convert': 'THB',
     'price_min' : 0,
     'price_max' : 10000000000
  },
  headers: {
    'X-CMC_PRO_API_KEY': process.env.API_KEY
  },
  json: true,
  gzip: true
};

rp(requestOptions).then(response => {
  console.log(response);
}).catch((err) => {
  console.log('API call error:', err.message);
});







app.listen(port, function() {
    console.log("Server is online.")
  });
  