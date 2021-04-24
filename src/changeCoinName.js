
function changeCoinName(char){


  switch(char) {
        case "BTC":
          return "Bitcoin";
          break;
        case "ETH":
          return "Ethereum";
          break;
        case "BNB":
          return "Binancecoin";
          break;
        case "Binance Coin":
          return "Binancecoin";
          break;
        case "BTC":
          return "Bitcoin";
          break;
        case "USDT"||"usdt":
          return "Tether";
          break;
          case "ADA":
          return "Cardano";
          break;
        case "DOGE":
          return "Dogecoin";
          break;
          case "GRC":
          return "Gridcoin";
          break;
        case "XPM":
          return "Primecoin";
          break;
          case "BTC":
          return "Bitcoin";
          break;
        case "XRP":
          return "Ripple";
          break;
        default:
          return char
      }

}

module.exports = changeCoinName;