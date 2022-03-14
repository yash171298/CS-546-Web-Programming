const axios = require('axios').default;

// async function shows(){
//     const { data } = await axios.get('http://api.tvmaze.com/shows');
//     //const parsedData = JSON.parse(data) // parse the data from JSON into a normal JS Object
//     return data // this will be the array of people objects
//   }
// shows();

// async function getShowbyId(id){
//     const data = await shows();

//     //const { data } = await axios.get(`http://api.tvmaze.com/shows/${req.params.id}`);
    
//      let showsbyid = 0;
//      for(let i=0;i<data.length;i++){
//          if(data[i].id == id ){
//          showsbyid = data[i];
//          break;
//          }
//      }
//       if(showsbyid == 0) throw 'No shows found with that id'
//       return showsbyid;
// }

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


