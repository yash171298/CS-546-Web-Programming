const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let key_object = {};
  for(let i = 0 ; i < arr.length ; i++)
  {
      if (arr[i] == 1) 
      {
      key_object[arr[i]]=true;
      }
      if (arr[i] == 2)
      {
      key_object[arr[i]]=true;
      }
      if (arr[i] > 1)
      {
          for (let j = 2; j < arr[i]; j++){
  
    
              if (arr[i] % j == 0) {
              key_object[arr[i]]=false;
              break;
           }
           else{
              key_object[arr[i]]=true;
           }
      } 
  }   
      
  }
  return key_object;
  }
  
  const questionTwo = function questionTwo(number1) { 
    // Implement question 2 here
    let sum = 0;
   for(let x=0; x< number1.length ;x++){
    sum += Math.pow(number1[x], 2);
  
   }
    sum = Math.pow(sum,5);
    sum = Math.sqrt(sum,2);
    sum = Math.round((sum + Number.EPSILON) * 100) / 100
  
  ﻿
      return sum;
  
  
  }
  
  const questionThree = function questionThree(text) {
    // Implement question 3 here
    let vowels = 'aeiouAEIOU';
    let vcount = 0;
    let consonants = 0;
    let space = 0;
    let numbers = 0;
    let punctuations = 0;
    let specialcharacters = 0;
    
    for(let y = 0; y < text.length ; y++)
    {
      if (vowels.indexOf(text[y]) !== -1)
      {
        vcount += 1;
      }
      if(text[y] == ' ')
      {
          space += 1;
      }
      if( text[y] == 'b'|| text[y] == 'c'|| text[y] == 'd'|| text[y] == 'f'|| text[y] == 'g'|| text[y] == 'h'|| text[y] == 'j'|| text[y] == 'k'|| text[y] == 'l'|| text[y] == 'm'|| text[y] == 'n'|| text[y] == 'p'|| text[y] == 'q'|| text[y] == 'r'|| text[y] == 's'|| text[y] == 't'|| text[y] == 'v'|| text[y] == 'w'|| text[y] == 'x'|| text[y] == 'y'|| text[y] == 'z'
      || text[y] == 'B'|| text[y] == 'C'|| text[y] == 'D'|| text[y] == 'F'|| text[y] == 'G'|| text[y] == 'H'|| text[y] == 'J'|| text[y] == 'K'|| text[y] == 'L'|| text[y] == 'M'|| text[y] == 'N'|| text[y] == 'P'|| text[y] == 'Q'|| text[y] == 'R'|| text[y] == 'S'|| text[y] == 'T'|| text[y] == 'V'|| text[y] == 'W'|| text[y] == 'X'|| text[y] == 'Y'|| text[y] == 'Z') 
      {consonants += 1}
      if(text[y] =='1'|| text[y] == '2' || text[y]== '3'||text[y]== '4'||text[y]== '5'||text[y]== '6'||text[y]== '7'||text[y]== '8'||text[y]== '8'||text[y]== '9'||text[y]== '0')
       {
        numbers += 1;
       }
      if(text[y] == ';'||text[y] == '"'||text[y] == '?'||text[y] == '.'||text[y] == ')'||text[y] == '('||text[y] == '!'||text[y] == '_'||text[y] == '-'||text[y] == ','||text[y] == ':'||text[y] == ']'||text[y] == '['||text[y] == ',')
      {
          punctuations += 1;
      }
      if(text[y] == '`'||text[y] == '*'||text[y] == '&'||text[y] == '^'||text[y] == '%'||text[y] == '$'||text[y] == '#'||text[y] == '@')
      {
          specialcharacters += 1;
      }
  
    }
    return {vcount , consonants , space , numbers , punctuations , specialcharacters};
  
  }
  
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
  
  module.exports = {
    firstName: "Yash Avinash", 
    lastName: "Patole", 
    studentId: "10460520",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
  };
 