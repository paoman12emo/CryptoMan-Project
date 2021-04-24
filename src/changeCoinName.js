
function changeCoinName(char){

  const chare = char.toUpperCase();

  switch(chare) {
        case "BTC":
          return "Bitcoin";
          break;
        case "ETH":
          return "Ethereum";
          break;
        case "BNB":
          return "Binancecoin";
          break;
        case "BINANCE":
          return "Binancecoin";
          break;
        case "LTC":
          return "Litecoin";
          break;
        case "USDT":
          return "Tether";
          break;
          case "ADA":
          return "Cardano";
          break;
        case "DOGE":
          return "Dogecoin";
          break;
          case "AUR":
          return "Auroracoin";
          break;
        case "XPM":
          return "Primecoin";
          break;
          case "NXT":
          return "Nxt";
          break;
        case "XRP":
          return "Ripple";
          break;
        default:
          return char
      }

}

module.exports = changeCoinName;