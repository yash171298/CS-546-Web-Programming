const axios = require('axios').default;

async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json')
    //const parsedData = JSON.parse(data) // parse the data from JSON into a normal JS Object
    return data // this will be the array of people objects
  }
getPeople();

 async function getPersonById(id){
     
         let data = await getPeople();
         if (id < 0) throw "You have passed a negative input"
         if (id > data.length) throw 'Wrong inputs passed or the input id is not found'
         if(!id) throw 'No inputs passed'
         if (typeof id !='number') throw 'not a number or no inputs passed'
         
         let x = 0;
         
       for(let i = 0; i <  data.length ; i++)
       {
           if(id == i){
            return data[i-1];
           }
            
        }
    }
    
 

 async function howManyPerState(stateAbbrv){
        if(!stateAbbrv) throw 'No inputs are passed'
        if(typeof stateAbbrv != 'string') throw 'The input is not a string'
        
            let data = await getPeople();
            let count = 0;
            for(let i = 0; i< data.length ; i++){
                if(data[i].address.state === stateAbbrv){
                count ++ ;
                }
            }
            if(count == 0) throw 'No state found for this output'
            return count;
 
 }

 async function personByAge(index){
    let data = await getPeople();
     //if(!index) throw 'No inputs passed'
     if (index < 0) throw "You have passed a negative input"
     if(typeof index !=  'number') throw 'Input passed is not a number'
     if (index > data.length) throw 'Wrong inputs passed or the input id is not found'

    let  key_object ={};     
     for(let i = 0; i<data.length;i++){
        // let from = data[i].date_of_birth.split("/")
         let today = new Date();
         let birthDate = new Date(data[i].date_of_birth);
          age = today.getFullYear() - birthDate.getFullYear();                          //reference stack overflow
         let m = today.getMonth() - birthDate.getMonth();
         if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
             age--;
         }
     
        
        data[i]['age']=age
     }
    
     const sorteddata = data.sort(function(a,b){
        return new Date(a.date_of_birth) - new Date(b.date_of_birth)
     });
    let y = 0;
     for(let j = 0; j< sorteddata.length; j++){
        
        if(index == j){
           y = j
           key_object.first_name = sorteddata[j].first_name;
           key_object.last_name = sorteddata[j].last_name;
           key_object.date_of_birth = sorteddata[j].date_of_birth;
           key_object.age = sorteddata[j].age;
           
            return key_object; 
         }
         
         
     }
     if(!y) throw 'Nothing exists for this input'
   
    }


    



     


async function peopleMetrics(){

   // const {data} = await axios.get("https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json");

        let data = await getPeople();
        let totalLetters = 0;
        let totalVowels = 0;
        let totalConsonants = 0;
        let longestName = 0;
        let  shortestName = 0;
        let  mostRepeatingCity = 0;
        let averageAge = 0;
        let vowels = 'aeiouAEIOU';  
        let consonants = 'abcedfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' 
        let vcountf = 0;
        let vcountl = 0;
        let c = 0;
        let d = 0;
        let e = null;
        let q = [];
        let p = 0;
        let maxlen = 0;
        let lowlen = 10;
        let flname = 0;
        let mostcity = 0;
        let repeat = 0;
        let key_object = {};
        let j = [];

            for(let i = 0; i < data.length ; i++){
            //totalletters
                data[i].first_name = data[i].first_name.replace(" ","");
                
                data[i].last_name = data[i].last_name.replace(" ","");
                data[i].last_name = data[i].last_name.replace("'","");
                data[i].first_name = data[i].first_name.replace("'","");
                
                data[i].last_name = data[i].last_name.replace("-","");
                data[i].first_name = data[i].first_name.replace("-","");
                data[i].last_name = data[i].last_name.replace(0,"");
                data[i].first_name = data[i].first_name.replace(0,"");
                
                
               
              
                //longestname
                flname = data[i].first_name + data[i].last_name;
                
               
                if(maxlen < flname.length ){
                        maxlen=flname.length;
                        longestName=flname
                        q=i;
                    }
                   
                //shortest name
                
                    if(lowlen > flname.length){
                        lowlen = flname.length;
                            shortestName = flname
                        p = i;    
                     }
                      

                
               //totalvowels
            for(let j = 0; j < data[i].first_name.length ; j++)
           
            {
              if (vowels.indexOf(data[i].first_name[j]) !== -1)
              {
                vcountf += 1;
              }
              else{c += 1}
            }
            for(let j = 0; j < data[i].last_name.length ; j++){  
              if(vowels.indexOf(data[i].last_name[j]) !== -1){
                  vcountl += 1;
              }
              else{d+=1}
            }
            
            totalVowels = vcountl + vcountf;
            // for(let g = 0; g < data[i].first_name.length ; g++)
           
            // {
            //   if (consonants.indexOf(data[i].first_name[g]) !== -1)
            //   {
            //     c += 1;
            //   }
            // }
            //   for(let g = 0; g < data[i].first_name.length ; g++)
           
            //   {
            //     if (consonants.indexOf(data[i].last_name[g]) !== -1)
            //     {
            //       d += 1;
            //     }
            // }

        


totalConsonants = c+d-1;

            //mostrepeatingcity
            
            temp = data[i].address.city;
            let count = 1;
            for(j = 0; j < data.length; j++) {
                if(data[j].address.city == temp) {
                    count++;
                }
                
                if (mostcity < count) {
                    mostcity = count;
                    repeat = j;
                }
            }
            mostRepeatingCity = data[repeat].address.city
        
            


totalLetters =totalConsonants + totalVowels;

        //average age
        
        
        let from = data[i].date_of_birth.split("/")
         sum=0
         let age = 0;
        
         age  = 2021 - from[2]
        
        e+=age
        
        
        
        
        
        
        }
    

        averageAge=e/data.length
        averageAge = Math.round((averageAge*100)/100)
         
        key_object.totalLetters = totalLetters;
        key_object.totalVowels = totalVowels;
        key_object.totalConsonants = totalConsonants;
        key_object.longestName = data[q].first_name+' '+data[q].last_name;
        key_object.shortestName= data[p].first_name+' '+data[p].last_name;
        key_object.mostRepeatingCity = mostRepeatingCity;
        key_object.averageAge = averageAge;
        return key_object;





}
 
    
    
    

 module.exports = {
     getPersonById,
     howManyPerState,
     peopleMetrics,
     personByAge
 }


