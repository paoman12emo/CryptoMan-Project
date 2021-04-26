function checkWord(char){

  let msg = char.toUpperCase();
  try{
  
      if(msg.includes('CMTดูราคา')){
           console.log(msg.substring(9,msg.length)); 
      }
      else if(msg.includes('CMTดู')){
        console.log(msg.substring(5,msg.length));  
          } 
      else if(msg.includes('CMTราคา')){
        console.log(msg.substring(7,msg.length));  
      }
      else{
          queryName(msg.substring(3,msg.length));
          }
      }
      catch(err){
          console.log(err);
      }    
  
      
  }

  checkWord("CMTดูราคาBTC")
