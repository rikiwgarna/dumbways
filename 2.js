function reverseArr (n) {
  let result  = [];
  
  for (let i = n.length - 1;  i >= 0; i--) {
    result.push(n[i]);
  }
  
  return result;
}


console.log(reverseArr([19,22,3,28,26,17,18,4,28,0]));
console.log(reverseArr([1,2,3,4,5,6,7,8,9,0]));