
const request = require('request');


 function reply(sender,name,price,change,vol,url,cur) {

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
                      "layout": "vertical",
                      "flex": 0,
                      "backgroundColor": "#F3F4ED",
                      "contents": [
                        {
                          "type": "text",
                          "text": name.toUpperCase()+" 💰",
                          "size": "xl",
                          "color": "#536162",
                          "contents": []
                        }
                      ]
                    },
                    "body": {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "md",
                      "action": {
                        "type": "uri",
                        "label": "Action",
                        "uri": "https://linecorp.com"
                      },
                      "contents": [
                        {
                          "type": "box",
                          "layout": "vertical",
                          "spacing": "sm",
                          "contents": [
                            {
                              "type": "box",
                              "layout": "baseline",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "Last Price",
                                  "weight": "bold",
                                  "color": "#424642",
                                  "flex": 0,
                                  "margin": "sm",
                                  "contents": []
                                },
                                {
                                  "type": "text",
                                  "text": price.toFixed(2)+" "+cur,
                                  "size": "xxs",
                                  "color": "#C06014",
                                  "align": "end",
                                  "contents": []
                                }
                              ]
                            },
                            {
                              "type": "box",
                              "layout": "baseline",
                              "spacing": "sm",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "24h Change",
                                  "weight": "bold",
                                  "color": "#424642",
                                  "flex": 0,
                                  "margin": "sm",
                                  "contents": []
                                },
                                {
                                  "type": "text",
                                  "text": change.toFixed(2)+" %",
                                  "size": "xxs",
                                  "color": "#C06014",
                                  "align": "end",
                                  "contents": []
                                }
                              ]
                            },
                            {
                              "type": "box",
                              "layout": "baseline",
                              "spacing": "sm",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": " 24h Vol",
                                  "weight": "bold",
                                  "color": "#424642",
                                  "flex": 0,
                                  "contents": []
                                },
                                {
                                  "type": "text",
                                  "text": vol.toFixed(2)+" "+cur,
                                  "size": "xxs",
                                  "color": "#C06014",
                                  "align": "end",
                                  "contents": []
                                }
                              ]
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
                          "size": "xxl"
                        },
                        {
                          "type": "button",
                          "action": {
                            "type": "uri",
                            "label": "More info",
                            "uri": url
                          },
                          "color": "#98DDCA",
                          "gravity": "bottom",
                          "style": "primary"
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
           })
         }

 function greeting(groupId) {

 let body = {
            to: groupId,
            messages: [
              {
                "type": "image",
                "originalContentUrl": "https://sv1.picz.in.th/images/2021/04/26/As6Fpa.jpg",
                "previewImageUrl": "https://sv1.picz.in.th/images/2021/04/26/As6Fpa.jpg"
              },
              {
                "type": "image",
                "originalContentUrl": "https://sv1.picz.in.th/images/2021/04/26/AsrzS2.jpg",
                "previewImageUrl": "https://sv1.picz.in.th/images/2021/04/26/AsrzS2.jpg"
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
        })
      }    


  function howTo(sender) {

        let body = {
                   to: sender,
                   messages: [
                    {
                      "type": "image",
                      "originalContentUrl": "https://sv1.picz.in.th/images/2021/04/26/AsrzS2.jpg",
                      "previewImageUrl": "https://sv1.picz.in.th/images/2021/04/26/AsrzS2.jpg"
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
               })
             }

  function fallBack(sender) {

        let body = {
                   to: sender,
                   messages: [
                    {
                      "type": "image",
                      "originalContentUrl": "https://sv1.picz.in.th/images/2021/04/26/AsnrFu.jpg",
                      "previewImageUrl": "https://sv1.picz.in.th/images/2021/04/26/AsnrFu.jpg"
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
               })
              }
  function reportNews(sender,newsLists) {

    let news_1 = newsLists[0]
    let news_2 = newsLists[1]
    let news_3 = newsLists[2]
    let news_4 = newsLists[3]
    let news_5 = newsLists[4]

    

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
                                  "backgroundColor": "#32C2CEFF",
                                  "contents": [
                                    {
                                      "type": "text",
                                      "text": "Crypto News",
                                      "weight": "bold",
                                      "size": "xl",
                                      "color": "#2D315BFF",
                                      "align": "center",
                                      "contents": []
                                    }
                                  ]
                                },
                                "hero": {
                                  "type": "image",
                                  "url": "https://mone.to/wp-content/uploads/2019/08/Bitcoin-Blockchain-and-Cryptocurrency-News-720x481.jpg",
                                  "size": "full",
                                  "aspectRatio": "20:13",
                                  "aspectMode": "cover",
                                  "action": {
                                    "type": "uri",
                                    "label": "Action",
                                    "uri": "https://www.coingecko.com/th/news"
                                  }
                                },
                                "body": {
                                  "type": "box",
                                  "layout": "vertical",
                                  "spacing": "md",
                                  "margin": "none",
                                  "contents": [
                                    {
                                      "type": "box",
                                      "layout": "vertical",
                                      "flex": 2,
                                      "contents": [
                                        {
                                          "type": "button",
                                          "action": {
                                            "type": "uri",
                                            "label": news_1.text.substring(0,60),
                                            "uri": news_1.url
                                          },
                                          "color": "#7AA0D5FF",
                                          "margin": "none",
                                          "height": "sm",
                                          "style": "link"
                                        },
                                        {
                                          "type": "separator"
                                        },
                                        {
                                          "type": "button",
                                          "action": {
                                            "type": "uri",
                                            "label": news_2.text.substring(0,60),
                                            "uri": news_2.url
                                          },
                                          "color": "#7AA0D5FF",
                                          "margin": "none",
                                          "height": "sm",
                                          "style": "link"
                                        },
                                        {
                                          "type": "separator"
                                        },
                                        {
                                          "type": "button",
                                          "action": {
                                            "type": "uri",
                                            "label": news_3.text.substring(0,60),
                                            "uri": news_3.url
                                          },
                                          "color": "#7AA0D5FF",
                                          "margin": "none",
                                          "height": "sm",
                                          "style": "link"
                                        },
                                        {
                                          "type": "separator"
                                        },
                                        {
                                          "type": "button",
                                          "action": {
                                            "type": "uri",
                                            "label": news_4.text.substring(0,60),
                                            "uri": news_4.url
                                          },
                                          "color": "#7AA0D5FF",
                                          "margin": "none",
                                          "height": "sm",
                                          "style": "link"
                                        },
                                        {
                                          "type": "separator"
                                        },
                                        {
                                          "type": "button",
                                          "action": {
                                            "type": "uri",
                                            "label": news_5.text.substring(0,60),
                                            "uri": news_5.url
                                          },
                                          "color": "#7AA0D5FF",
                                          "margin": "none",
                                          "height": "sm",
                                          "style": "link"
                                        },
                                        {
                                          "type": "separator"
                                        }
                                      ]
                                    }
                                  ]
                                },
                                "footer": {
                                  "type": "box",
                                  "layout": "horizontal",
                                  "contents": [
                                    {
                                      "type": "button",
                                      "action": {
                                        "type": "uri",
                                        "label": "More News",
                                        "uri": "https://www.coingecko.com/th/news"
                                      },
                                      "color": "#499C98FF",
                                      "style": "primary"
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
                       })
                     }
            





module.exports = {reply,greeting,howTo,fallBack,reportNews};