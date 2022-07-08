
let results = document.querySelector("#output")



function rot13(message) {

  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let specChar = "!@#$%^&*~".split('')
  let alphaArr = alphabets.split("");
  let messageArr = message.split("");
  let cipherArr =[];
  for (i = 0; i < messageArr.length; i++) {
    
    let index = alphaArr.indexOf(messageArr[i]);
    

    if(alphaArr.includes(messageArr[i].toLowerCase())){
         if (index === -1){
       index = alphaArr.indexOf(messageArr[i].toLowerCase());
       index =index+13;
       if(index > 26){
        cipherArr.push(specChar[Math.floor(Math.random()*specChar.length)])
        cipherArr.push(alphaArr[index-26].toLocaleUpperCase())
      }else{
        cipherArr.push(specChar[Math.floor(Math.random()*specChar.length)])
        cipherArr.push(alphaArr[index].toUpperCase())
      }

     }else{
      index = index+13
        if(index > 26){
          cipherArr.push(specChar[Math.floor(Math.random()*specChar.length)])
          cipherArr.push(alphaArr[index-26])
        }else{
          cipherArr.push(alphaArr[index])
        }
  }

    }else{
      cipherArr.push(specChar[Math.floor(Math.random()*specChar.length)])
      cipherArr.push(messageArr[i])
    }
     
  
     }

    
     results.innerText = cipherArr.join("");
     return cipherArr.join('')
     
}



