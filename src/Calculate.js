function cal(num){
    if(num/1000>=1){
        if(num/1000000>=1){
          return num/1000000 +"M"
        }else{
          return num/1000 +"k"
        }
      }
}

module.exports = cal ;