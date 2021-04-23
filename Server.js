require('dotenv').config()

const { request } = require('express');
const express = require("express");
const bodyParser = require('body-parser')
const request = require('request')
const rp = require('request-promise');


const app = express();
const port = process.env.PORT || 4000


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());



//Message

app.post('/webhook', (req, res) => {
  let reply_token = req.body.events[0].replyToken
  reply(reply_token)
  res.sendStatus(200)
})


function reply(reply_token) {
  let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {xxxxxxx}'
  }
  let body = JSON.stringify({
      replyToken: reply_token,
      messages: [{
          type: 'text',
          text: 'Hello'
      },
      {
          type: 'text',
          text: 'How are you?'
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

// const requestOptions = {
//   method: 'GET',
//   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//   qs: {
//     'start': '1',
//     'limit': '5000',
//     'convert': 'THB',
//      'price_min' : 0,
//      'price_max' : 10000000000
//   },
//   headers: {
//     'X-CMC_PRO_API_KEY': process.env.API_KEY
//   },
//   json: true,
//   gzip: true
// };

// rp(requestOptions).then(response => {
//   console.log(response);
// }).catch((err) => {
//   console.log('API call error:', err.message);
// });







app.listen(port, function() {
    console.log("Server is online.")
  });
  