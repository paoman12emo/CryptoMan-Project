require('dotenv').config()

const { request } = require('express');
const express = require("express");

const rp = require('request-promise');


const app = express();
const port = process.env.PORT || 4000

app.use(express.json());




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
  