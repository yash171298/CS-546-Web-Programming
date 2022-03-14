let exportedMethods = {
   primeNumber(number){
    {

        if (number===1)
        {
          return false;
        }
        else if(number === 2)
        {
          return true;
        }
        else
        {
          for(let i = 2; i < number; i++)
          {
            if(number % i === 0)
            {
              return false;
            }
          }
          return true;  
        }
      }
   },
   fibonacci(num){
       if(!num) throw 'Provide a number';
       if(typeof num !== 'number'  ) throw 'The provided input is not a number'; 
    let x = 0;
    let fib = []; 
    
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i <= num ; i++) {
     
      fib[i] = fib[i - 2] + fib[i - 1];                  //reference stackoverflow
      x = fib[i] 
    }
    return x;
   }
};

module.exports = exportedMethods;
