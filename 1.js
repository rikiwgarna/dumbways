function count(s) {
  let upperCase = 0
  
  for (let i = 0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      upperCase++;
    }
  }
  
  return upperCase;
}

// function count(s) {
//   let upperCase = 0
  
//   for (let i = 0; i < s.length; i++){
//     if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <=90){
//       upperCase++;
//     }
//   }
  
//   return upperCase;
// }


console.log(count('PapaMakanJerukWaktuBuka'))