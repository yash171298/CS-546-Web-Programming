const computeObject = function computeObject(object,func){

    if(typeof(object)!= 'object') throw 'not a correct input'
    if(arguments.length == 0) throw 'not a correct  input' ;
    if(object.length < 1) throw 'not a correct object'
    //if(typeof object.keys != 'numbers') throw ' not a correct input'
    if (typeof func != 'function') throw 'not a correct input'
    let x = 0; 
    x = Object.values(object)
    let key_array={};
    let j = 0;
    j = Object.keys(object);
    let  k = 0;

    for(let i=0;i< x.length; i++){
       key_array[j[i]]= func(x[i]);
            
    }
    
    return  key_array;
}
    

console.log(computeObject({ a: 3, b: 7, c: 5 }, n => n / 2));


const DeepEqual = function DeepEqual(obj1 , obj2){
 if(typeof obj1 != 'object') throw 'not an object';
 if(typeof obj2 != 'object') throw 'not an object';
 if(arguments.length == 0) throw 'not an object'; 
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  
    for (let [key, value] of Object.entries(obj1)) {
      if (!obj2[key] || obj2[key] !== value) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(DeepEqual({
                       name:'hela',
                       age: 5000
                      }, 
                      {
                       name:'hela', 
                       age: 5000
                      })); // true
  
  console.log(DeepEqual({
                       name:'hela',
                       age: 5000, 
                       power: 90000
                       }, 
                       {
                        name:'hela', 
                        age: 5000
                       })); // false
  
  console.log(DeepEqual({
                       name:'hela',
                       age: 5000
                      }, 
                      {
                       name:'hela', 
                       age: 4000
                      }));

const makeArrays = function makeArrays (obj){
    if(arguments.length == 0) throw 'not a correct input' ; 
    if(typeof obj != 'object') throw 'not a correct input' ;
    if (obj.length < 2) throw ' not a correct input';
        let newarray = [];
        obj.forEach(eachobject => newarray.push(Object.entries(eachobject)));
        
        return newarray.flat();
 }
 const first = { x: 2, y: 3};
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };
console.log (makeArrays([first,second,third]));


module.exports = {
    computeObject,
    DeepEqual,
    makeArrays

}



