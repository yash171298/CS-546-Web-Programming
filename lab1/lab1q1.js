const questionOne = function questionOne(arr) {

let key_object = {};
for(let i = 0 ; i < arr.length ; i++)
{
    if (arr[i] == 1) 
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
console.log(questionOne([13, 9, 25, 17, 18, 22]));