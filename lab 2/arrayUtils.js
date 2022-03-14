//mean
const mean = function mean(array){
 if(!Array.isArray(array)) throw 'not a correct input' 
 if(arguments.length == 0) throw 'not a correct input';
 if (array.length == 0) throw 'not a correct input'  
    let totalSum = 0;
for(let i in array) {
 //if (typeof i != 'number') throw 'not a correct input';   
    totalSum += array[i];
}



let numsCnt = array.length;


let average = totalSum / numsCnt;
average = Math.round((average + Number.EPSILON) * 100) / 100

return average; 
}
console.log(mean([13, 9, 25, 17, 18, 22]));
//median

function MEDIAN(arr){
    if(!Array.isArray(arr)) throw 'not a correct input' 
    if(arguments.length == 0) throw 'not a correct input';
    if (arr.length == 0) throw 'not a correct input' 
    let value = 0, arrnum = arr.length;
    if (isNaN(arrnum)) throw 'not a correct input'
    arr.sort();
 
    if (
        arrnum % 2 === 0 
    ) {
        
        value = (arr[arrnum / 2 - 1] + arr[arrnum / 2]) / 2;
    } else { 
        value = arr[(arrnum - 1) / 2];
    }
    value = Math.pow(value,2);
    value = Math.round((value + Number.EPSILON) * 100) / 100
 return value;
}


//console.log(MEDIAN([1, 5, 4.5]));
//maxElement
const maxElement = function maxElement(maxarr){
    if(!Array.isArray(maxarr)) throw 'not a correct input' 
    if(arguments.length == 0) throw 'not a correct input';
    if (maxarr.length == 0) throw 'not a correct input'    ;

    let key_object = {};
    let maxnum = maxarr[0] ;
    let x = 0;
    for (let i=0 ; i < maxarr.length ; i++)
    {
      if (typeof i != 'number') throw 'not a number'  
        if(maxarr[i] > maxnum)
        {
            maxnum = maxarr[i];
            x = i;
            
        }
       
       
       
    }   
    key_object[maxnum]=x;
    return key_object;
    
    }
    console.log(maxElement([45, 55, 65]));

    //countRepeating
    const countRepeating = function countRepeating(array){
    if(!Array.isArray(array))    throw ' not an array';
    if(arguments.length == 0)    throw 'incorrect input';
        const count = {}
const result = []

array.forEach(item => {
    if (count[item]) {
       count[item] +=1
       return
    }
    count[item] = 1
})

for (let prop in count){
    if (count[prop] >=2){
        result.push(prop)
    }
}

return count;
return result;

}

console.log(countRepeating(['pencil', 'book','pencil', 1, 1, 'ab','ab']));

//fill
const fill = function fill( end , value ){
if(end < 0) throw 'not a correct input'
if(isNaN(end)) throw 'not a correct input'
if(arguments.length == 0) 'not a correct input'
    let arrayfill = new Array(end);
    for(let i=0; i < arrayfill.length ; i++)
    if(!value){
        arrayfill[i]= i;
    
    }
    
    else{
        arrayfill[i]=value;
    }
    return arrayfill;
    }
    
    console.log(fill(6,'welcome'));
    
 //isEqual
 const isEqual = function isEqual(array1 , array2) {
   if(arguments.length == 0) throw 'not a correct input';
   if(!Array.isArray(array1)) throw 'not a correct input';  
   if(!Array.isArray(array2)) throw 'not a correct input';
    array2.sort();
     array1.sort();
     if (!array1)
     return false;
 
 if (array2.length != array1.length)
     return false;

 for (let i = 0, l=array2.length; i < l; i++) {
     
     if (array2[i] instanceof Array && array1[i] instanceof Array) {
        
         if (!array2[i].equals(array1[i]))
             return false;       
     }           
     else if (array2[i] != array1[i]) { 
        return false;   
     }           
 }       
 return true;
}

console.log(isEqual(['a', 'b', 'c'],['b','a','c']));

module.exports = {
    mean,
    MEDIAN,
    maxElement,
    countRepeating,
    fill,
    isEqual
}
