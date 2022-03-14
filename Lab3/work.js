const axios = require('axios').default;

async function getWork(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json')
    //const parsedData = JSON.parse(data) // parse the data from JSON into a normal JS Object
    return data // this will be the array of people objects
  }

getWork();

async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json')
    //const parsedData = JSON.parse(data) // parse the data from JSON into a normal JS Object
    return data // this will be the array of people objects
  }
getPeople();

async function whereDoTheyWork(ssn){
    if(!ssn) throw 'No inputs passed';
    if(typeof ssn != 'string') throw 'Not a proper input or the input is not a string';
    //if(!ssn.match(/###-##-###/)) throw 'Not a proper SSN';
    if(typeof ssn == undefined) throw 'Not a String or incorrect inputs'
    if(ssn==null) throw 'no items found';
    let data = await getPeople();
   if(ssn.charAt(3) != '-') throw 'Not a proper SSN, not in correct format'
   if(ssn.charAt(6) != '-') throw 'Not a proper SSN, not in correct format'
    let x = 0;
    let y = 0;
    for(let i = 0; i < data.length ; i++){
       
        if(data[i].ssn == ssn)
          {
          x= data[i].id ;
          y = i;
          }
         
         }
         if(x == 0) throw 'Nothings exists for this number'

    //  const { workdata } = await axios.get('https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json')
      
    let work = await getWork();

        for(let k = 0 ; k < work.length ; k++){

              if(work[k].employees.includes(x) ){
              return data[y].first_name+' '+data[y].last_name+' works at '+work[k].company_name+'.';
                  }
      }
      
  
  
}

async function fourOneOne(phoneNumber){

    let work = await getWork();
    if(!phoneNumber) throw 'No inputs passed';
    if(typeof phoneNumber != 'string') throw 'Not a proper input or the input is not a string';
    //if(phoneNumber != "###-###-####") throw 'Not a correct input parameter'
    if(phoneNumber.charAt(3) != '-') throw 'Not a proper phonenumber'
   if(phoneNumber.charAt(7) != '-') throw 'Not a proper phonenumber'
    let key_object= {};
    let x = 0;
    for(let i = 0; i< work.length; i++){
        if(phoneNumber == work[i].company_phone){
                

            key_object.company_name = work[i].company_name;
            key_object.company_address = work[i].company_address;
            x = key_object;
        }
        
        
    }
    if(x == 0) throw 'Nothing exists for this phone number'
    return x;

}

async function listEmployees(){
    let data = await getPeople();
    let work = await getWork();
    let x = {};
    let key_object = [];
    
   

   for(let i=0; i<work.length; i++){
    let d = {};   
    let y = [];
    

       for(let j = 0; j< work[i].employees.length ; j++){
                let z = {};
                x = work[i].employees[j];
                    z.first_name = data[x-1].first_name
                    z.last_name = data[x-1].last_name;
               y.push(z);
              
            }
             d.company_name =  work[i].company_name;

             d.employees = y;
               key_object.push(d);
      
   }    
   return key_object; 
}    




module.exports = {
    whereDoTheyWork,
    fourOneOne,
    listEmployees
}