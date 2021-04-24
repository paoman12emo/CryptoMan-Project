const changeCoinName =  require("./changeCoinName.js");

function checkWord(msg){
    switch(msg) {
        case msg.substring(0,6) === "ดูราคา":
          return changeCoinName(msg.substring(6,msg.length));
          break;
          case msg.substring(0,7) === "ดูราคา ":
            return changeCoinName(msg.substring(7,msg.length));
            break;
        default:
          return msg
      }

}

module.exports = checkWord;