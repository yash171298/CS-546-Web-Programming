const questionFour = function questionFour(num1, num2,num3) {
    // Implement question 4 here
    let monthlypayment = 0;
let interestRate = num2
    interestRate /= 100.0;
let monthlyRate = interestRate / 12.0;
let termInYears = num3    
let termInMonths = termInYears * 12;

monthlypayment = 
(num1*monthlyRate) / 
   (1-Math.pow(1+monthlyRate, -termInMonths));
   monthlypayment = Math.round((monthlypayment + Number.EPSILON) * 100) / 100

﻿
    
   return monthlypayment;
   

    
}


console.log(questionFour(25000, 3.11, 5)); 
