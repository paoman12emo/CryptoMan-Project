var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");
var HmacSHA1 = require("crypto-js/hmac-sha512");


console.log(CryptoJS.HmacSHA1("Message", "Key"));

