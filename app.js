require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser')
const request = require('request')

const line = require('@line/bot-sdk');

const config = {
  channelAccessToken: "MFUej68ETDOmnN95+n7dOkr9SGQ8bPw9mn9C4RmlE1wud2zkVcAHbzK7ibC6+mHC6tcWSL6LVKgxU5Mg5i+juHoLGbKxfB5pJmquyre71iSSs886P3KB7wMWVargRO1aEEoGeWhrpGhv2aArMD7U0AdB04t89/1O/w1cDnyilFU=",
  channelSecret: "ff1b43dd6fe2ac67ef30f90bd5784b2b",
};

const client = new line.Client(config);

const app = express();
const port = process.env.PORT || 4000


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())




//Message

app.post('/callback', line.middleware(config), (req, res) => {

  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  const x = [];

  const options = {
    method: 'GET',
    url: 'https://coingecko.p.rapidapi.com/simple/price',
    qs: {ids: event.message.text, vs_currencies: 'THB', include_last_updated_at: 'true'},
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
   
  // create a text message

   const result = { type: 'text', text: name + "ราคาตอนนี้คือ" + price + "บาท" };
  
    x.push(result);
  });

  let b = x[0];

  // use reply API
  return client.replyMessage(event.replyToken, b);
}



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

});



app.listen(port, function() {
    console.log("Server is online.")
  });
  