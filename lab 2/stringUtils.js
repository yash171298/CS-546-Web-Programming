
//camelcase

function Camelcase(string){
    //if(!Array.isArray(string))   throw 'not a correct camelcase input' ;
    if(arguments.length == 0) throw 'not a correct camelcase input' ;
    if(string < 0) throw 'enter correct string'
    //if(typeof(string)!= 'object') throw 'not a correct input'
    if (string = ('')) throw 'empty string'
    return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g,
    function(camelCaseMatch, i) {
       if (+camelCaseMatch ===  0)
          return "";
       return i === 0 ? camelCaseMatch.toLowerCase() :
       camelCaseMatch.toUpperCase();
    });
 }
 //console.log(Camelcase("Add two variables"));

 //replaceChar
 const replaceChar = function replaceChar(myStr){
    //if(!Array.isArray(myStr))   throw 'not a correct replaceChar input' ;
   if(arguments.length == 0) throw 'not a correct replaceChar input' ;
    //if(myStr < 0) throw 'enter correct string'
    //if(typeof(myStr)!= 'object') throw 'not a correct replaceChar input'
    //if (myStr = ('')) throw 'empty string'   
    let x = 0;
   
    let newStr = myStr[0];
    x = myStr[0].toLowerCase();
    let count = 0;
    for (let j=1 ; j<myStr.length; j++ ){ 
        
        if (myStr[j]===x){
            
        
           if( count%2 === 0 ){
             newStr +=  '*';
            
           }
           else{
               newStr += '$';
               
           }
           count += 1;
        }
        else{
            newStr+= myStr[j]
        }  
        
        
     }
    
    return newStr;
    }
    console.log(replaceChar("Daddydd"));
    console.log(replaceChar("Tettjktttt"));

    //Mashup

    const Mashup = function Mashup(String1 , String2){
       // if(!Array.isArray(String1))   throw 'not a correct mashup input' ;
    if(arguments.length == 0) throw 'not a correct mashup input' ;
    if(String1 < 2) throw 'enter correct string';
   // if(typeof(String1)!= 'object') throw 'not a correct input';
    if (String1 = ('')) throw 'empty string';
   // if(!Array.isArray(String2))   throw 'not a correct mashup input' ;
    if(arguments.length == 0) throw 'not a correct mashup input' ;
    if(String2 < 2) throw 'enter correct string';
    //if(typeof(String2)!= 'object') throw 'not a correct input';
    if (String2 = ('')) throw 'empty string';
    

        let x = 0;
        let y= 0;
        let i = 0;
        let j = 0;
        let k = 0;
        let key_object = {};
            x = String1.replace(String1[0],String2[0] )//&& String1.replace(String1[1],String2[1] );
            y = String2.replace(String2[0],String1[0] )//&& String2.replace(String2[1],String1[1] );
            i = x.replace(String1[1],String2[1] );
            j = y.replace(String2[1],String1[1] );
        key_object[String1]=i;
        key_object[String2]=j;
        k = i + ' ' + j;
    return k;
    
    
    }
    
    console.log(Mashup('Daddy','teddy'));

    module.exports = {
            Camelcase,
            replaceChar,
            Mashup
    }