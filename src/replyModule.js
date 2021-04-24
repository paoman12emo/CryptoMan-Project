require('dotenv').config({path: __dirname + '/.env'});

const request = require('request');




function reply(sender,name,price,change,vol) {

  
 


    let body = {
               to: sender,
               messages: [
                {
                  "type": "flex",
                  "altText": "This is a Flex Message",
                  "contents": {
                    "type": "bubble",
                    "header": {
                      "type": "box",
                      "layout": "horizontal",
                      "margin": "none",
                      "backgroundColor": "#F3F4ED",
                      "contents": [
                        {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "text",
                              "text": name,
                              "size": "4xl",
                              "color": "#536162",
                              "contents": []
                            }
                          ]
                        }
                      ]
                    },
                    "body": {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "none",
                      "margin": "none",
                      "position": "relative",
                      "contents": [
                        {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "text",
                              "text": "ราคาตอนนี้",
                              "weight": "bold",
                              "size": "md",
                              "color": "#424642",
                              "align": "start",
                              "gravity": "top",
                              "margin": "none",
                              "style": "normal",
                              "contents": []
                            },
                            {
                              "type": "text",
                              "text": "ปรับตัวใน24hr",
                              "weight": "bold",
                              "size": "md",
                              "color": "#424642",
                              "align": "start",
                              "contents": []
                            },
                            {
                              "type": "text",
                              "text": "มูลค่าภายใน24hr",
                              "weight": "bold",
                              "size": "md",
                              "color": "#424642",
                              "align": "start",
                              "contents": []
                            }
                          ]
                        },
                        {
                          "type": "box",
                          "layout": "vertical",
                          "spacing": "none",
                          "margin": "none",
                          "position": "absolute",
                          "offsetBottom": "11%",
                          "offsetStart": "60%",
                          "contents": [
                            {
                              "type": "text",
                              "text": price +"บาท",
                              "weight": "regular",
                              "size": "md",
                              "color": "#C06014",
                              "align": "end",
                              "contents": []
                            },
                            {
                              "type": "text",
                              "text": change.toFixed(2)+"%",
                              "weight": "regular",
                              "size": "md",
                              "color": "#C06014",
                              "align": "end",
                              "contents": []
                            },
                            {
                              "type": "text",
                              "text": vol+"บาท",
                              "weight": "regular",
                              "size": "md",
                              "color": "#C06014",
                              "align": "end",
                              "contents": []
                            }
                          ]
                        }
                      ]
                    },
                    "footer": {
                      "type": "box",
                      "layout": "vertical",
                      "backgroundColor": "#424642",
                      "contents": [
                        {
                          "type": "spacer",
                          "size": "md"
                        }
                      ]
                    }
                  }
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
            text: "สวัสดี ทุกท่านผมชื่อ CryptoMan ท่านสามารถพิมพ์ CMT หริอ cmt และตามด้วยชื่อCoinที่ท่านอยากรู้ราคามาได้เลยจ้า"
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


  function howTo(sender) {

        let body = {
                   to: sender,
                   messages: [
                     {
                   type: 'text',
                   text: "ง่ายๆ พิมพ์ cmt ตามด้วยชื่อcoinหรือชื่อเต็มก็ได้"
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

  function fallBack(sender) {

        let body = {
                   to: sender,
                   messages: [
                     {
                   type: 'text',
                   text: "ขอโทษครับ ไม่พบข้อมูล หรือ พิมพ์ผิดรึเปล่าครับ"
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
module.exports = {reply,greeting,howTo,fallBack};