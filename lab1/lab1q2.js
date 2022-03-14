const questionTwo = function questionTwo(arr) { 
  // Implement question 2 here
 let sum = 0;
 for(let i=0;i<arr.length;i++){
  sum += Math.pow(arr[i], 2);

 }
  sum = Math.pow(sum,5);
  sum = Math.sqrt(sum,2);
  sum = Math.round((sum + Number.EPSILON) * 100) / 100

﻿
    return sum;
}
console.log(questionTwo([5, 3, 10])); 