function gateCheck(msg){


    switch(msg) {
          case "ดูราคา":
            return true;
            break;
          case "ราคา":
            return true;
            break;
          case "ดู":
            return true;
            break;
          default:
            return false
        }
  
  }
  
  module.exports = gateCheck;