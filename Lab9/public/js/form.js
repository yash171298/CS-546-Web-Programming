(function () {
    const checkerMethods =  {
           fibonacci(num){
               if(isNaN(num)) throw 'Provide a number';
               if(typeof num !== 'number'  ) throw 'The provided input is not a number'; 
               if(num < 0){
                   return 0;
               }
               if(num === 0){
                   return 0;
               }
               let n1 = 0; 
               let n2 = 1; 
               let nextTerm;
               for (let i = 1; i <= num; i++) {
               
                nextTerm = n1 + n2;
                n1 = n2;
                n2 = nextTerm;
            }
            return n1;                              //reference w3 schools, stackoverflow


        //     let fib = []; 
            
        //     fib[0] = 0;
        //     fib[1] = 1;
        //     let x = 0;
        //     for (let i = 2; i < num ; i++) {
             
        //      x = fib[0];
        //      x = fib[1];
        //       fib[i] = fib[i - 1] + fib[i - 2];                  //reference stackoverflow
        //       x = fib[i] + fib[i-1];
        //     }
        //    return x;
           },
     
           primeNumber(number){
            {
        
                if (number===1)
                {
                  return false;
                }
                else if(number === 2)
                {
                  return true;
                }else
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
           }

      };
  
    function operationStringToFunction(operation) {
      if (!operation) throw 'No operation provided';
  
      const returnFunction = checkerMethods[operation];
      //const returnFunction = checkerMethods;
  
      if (returnFunction === undefined) throw 'No such operation';
  
      return returnFunction;
    }
  
    const staticForm = document.getElementById('static-form');
  
    if (staticForm) {
      // We can store references to our elements; it's better to
      // store them once rather than re-query the DOM traversal each time
      // that the event runs.
      const firstNumberElement = document.getElementById('number1');
      const operationElement = document.getElementById('operation');
  
      const errorContainer = document.getElementById('error-container');
      const errorTextElement = errorContainer.getElementsByClassName(
        'text-goes-here'
      )[0];
  
      const resultContainer = document.getElementById('result-container');
      const resultTextElement = resultContainer.getElementsByClassName(
        'text-goes-here'
      )[0];
      let value = document.getElementById('isprime')
      let value2 = document.getElementById('notprime')
      let myUl = document.getElementById('results');
  
      // We can take advantage of functional scoping; our event listener has access to its outer functional scope
      // This means that these variables are accessible in our callback
      staticForm.addEventListener('submit', (event) => {
        event.preventDefault();
  
         try {
        //   // hide containers by default
        //   errorContainer.classList.add('hidden');
        //   resultContainer.classList.add('hidden');
  
        //   // Values come from inputs as strings, no matter what :(
          const firstNumberValue = firstNumberElement.value;
        //   const operationValue = operationElement.value;
  
           const parsedFirstNumberValue = parseInt(firstNumberValue);
        //   const operation = operationStringToFunction(operationValue);
  
           const result = checkerMethods.fibonacci(parsedFirstNumberValue);
          prime = checkerMethods.primeNumber(result);
          if(prime == true){
            errorContainer.classList.add('hidden');
            value = 'The Fibonacci of '+parsedFirstNumberValue+ " is " + result+ ".";
            let li = document.createElement('li');
           // let textnode = document.createTextNode(value);
            li.innerHTML = value;
            
            myUl.appendChild(li);
            li.className = "is-prime";
           // document.getElementsByClassName('is-prime')[0].appendChild(li);
          
          }
          else{
            errorContainer.classList.add('hidden');
            value2 = 'The Fibonacci of '+parsedFirstNumberValue+ " is " + result+ ".";
            let li = document.createElement('li');
           // let textnode = document.createTextNode(value);
            li.innerHTML = value2;
            
            myUl.appendChild(li);
            li.className = "not-prime";
           // value2 = 'The result is : ' + result;
        //     let li = document.createElement('li');
        //     let textnode = document.createTextNode(value2);
        //    // li.innerHTML = value;
            
        //     (textnode);
        //     document.getElementsByClassName('notprime')[0].appendChild(li);
               
          }
        } catch (e) {
          const message = typeof e === 'string' ? e : e.message;
          errorTextElement.textContent = e;
          errorContainer.classList.remove('hidden');
        }
      });
    }
  })();