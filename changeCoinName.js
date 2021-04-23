
function changeCoinName(char){


  switch(char) {
        case BTC:
          return Bitcoin;
          break;
        default:
          return char
      }

}

module.exports = changeCoinName;