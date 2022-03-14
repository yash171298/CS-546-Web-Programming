const axios = require('axios').default;

async function getShows(SearchTerm){
    // if(!SearchTerm) throw 'Please provide keyword to search'
     const { data } = await axios.get(`http://api.tvmaze.com/search/shows?q=${SearchTerm}`);
     //const { data } = await axios.get("http://api.tvmaze.com/search/shows?q=under");
 
     let counter = 0;
     let keyarray = [];
     let x = null;
     for(let i =0; i < data.length; i++){
         x = data[i].show;
         keyarray.push(x);
         counter++;
         if(counter == 20){
             break;
         }
         // else {
         //     return keyarray;
         // }
     }
    // if(keyarray == 0) throw 'Did not find any shows with that keyword'
     return keyarray;
 
 
 }
 
 module.exports = {
   //  getShowbyId,
     getShows
 }