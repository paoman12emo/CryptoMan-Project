price = 8000000

if(price/1000>=1){
    if(price/1000000>=1){
     console.log(price/1000000 +"M")
    }else{
      console.log(price/1000 +"k")
    }
  }