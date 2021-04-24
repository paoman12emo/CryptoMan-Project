let msg = "cm BTC"

if(msg.substring(2,8) === "ดูราคา"){
    console.log(msg.substring(8,msg.length)); //cmราคาBTC
}
else if(msg.substring(3,9) === "ดูราคา"){
    console.log(msg.substring(9,msg.length)); // "cm ราคาBTC"
}
else if(msg.substring(2,4) === "ดู"){
        console.log(msg.substring(4,msg.length));  // "cmราคาBTC"
    } 
else if(msg.substring(3,5) === "ดู"){
        console.log(msg.substring(5,msg.length));  // "cm ราคาBTC"
    } 
else if(msg.substring(2,6) === "ราคา"){
    console.log(msg.substring(6,msg.length));  //cmราคาBTC
}
else if(msg.substring(3,7) === "ราคา"){
    console.log(msg.substring(7,msg.length));  // "cm ราคาBTC"
}        
else{
        console.log(msg.substring(3,msg.length)) 
    }

