// function rangeOfNumbers(startNum, endNum) {
//   if (endNum - startNum === 0) {
//     return [startNum];
//   } else {
//     const range = rangeOfNumbers(startNum, endNum - 1);
//     range.unshift(endNum);
//     return range;
//   }
// }
// console.log(rangeOfNumbers(1, 10));
// function square(n) {
//     if (n==1){
//         return [n*n]
//     } else {
//         const sqr = square(n-1);
//         sqr.push(n*n);
//         return sqr;
//     }
// }
// console.log(square(10));

console.log(square(10));