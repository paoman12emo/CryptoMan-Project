const request = require('request');


function reply(sender,name,price,change,vol) {

    let body = {
               to: sender,
               messages: [
                 {
               type: 'text',
               text: name + "ราคาตอนนี้คือ " + price + " บาท"
               },
               {
                 type: 'text',
                 text: "ภายใน 24 ชั่วโมงปรับตัวไป " + change.toFixed(2) + " %"
               },
               {
                 type: 'text',
                 text: "ปริมาณการซื้อค้าภายใน 24 ชั่วโมง " + vol + " บาท"
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

 function greeting(groupId) {

 let body = {
            to: groupId,
            messages: [
              {
            type: 'text',
            text: "สวัสดี ทุกท่านผมชื่อ CryptoMan ท่านสามารถพิม ดูราคา และตามด้วยชื่อCoinที่ท่านอยากรู้ราคามาได้เลยจ้า"
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


module.exports = {reply,greeting};