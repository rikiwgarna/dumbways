function trianglePascal(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  let result = [];
  for (let i = 1; i <= numRows; i++) {
      let arr = [];
      for (let j = 0; j < i; j++) {
          if (j === 0 || j === i - 1) {
              arr.push(1);
          } else {
              arr.push((result[i-2][j-1] + result[i-2][j]));
          }
      }
      result.push(arr);
  }
  return result;
}

var triangle = trianglePascal(3);

for (let i = 0; i < triangle.length; i++) {
console.log(triangle[i] + "\n")
}

