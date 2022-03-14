const express = require('express');
const { shows } = require('../data');
const router = express.Router();
const data = require('../data');
const showData = data.shows;
const axios = require('axios').default;

async function showsid(){
  const { data } = await axios.get('http://api.tvmaze.com/shows');
  //const parsedData = JSON.parse(data) // parse the data from JSON into a normal JS Object
  return data // this will be the array of people objects
}
showsid();


router.post('/search',async (req, res)=>{
 
//   let error = "";
//   if (error != "") {
//     res.render('shows/homepage', {
//     error: error,
//     hasErrors: true
//     });
//     return;
// }
try {
 // if(!req.body) throw 'Please provide an input';
  let search = req.body.searchTerm;
  let flag = false;
  if(!search) {
    res.status(400);
    flag = true;
    res.render("shows/homepage", {shows : searchShows,  hasErrors: flag})
  };
  console.log(search);
  // if (!search){
  //   throw "Enter inputs"
  // }
  const searchShows = await shows.getShows(search);
  if(searchShows == 0){
    res.status(404);
    flag= true;
  }
  console.log("Search results" + searchShows)
  res.render("shows/searchShows", {shows : searchShows, searchTerm:search, hasErrors: flag});
} catch (e) {
  res.render("shows/homepage", {errors : "No inputs provided" , hasErrors:true});
  res.status(400);
}

});
router.get('/shows/:id', async (req, res) => {
  try {
     //let data = await showsid();

     const { data } = await axios.get(`http://api.tvmaze.com/shows/${req.params.id}`);
     
         let showsbyid = 0;
         showsbyid = data;
        // for(let i=0;i<data.length;i++){
        //     if(data[i].id == req.params.id ){
        //     showsbyid = data[i];
        //     showsbyid.summary.replace(/<[^>]*>/g, ' ');
        //     break;
        //     }
            
        // }

         if(showsbyid == 0) throw 'No shows found with that id'
       
       res.render('shows/id', {keyobject: showsbyid});
 } catch (e) {
  res.render("shows/homepage", {errors : "Show with that id not found" , gotErrors:true});
  res.status(404);
  }
});

// router.get('/:id', async (req, res) => {
//   const showId = parseInt(req.params.id);
  
//   const show = await shows.getShowbyId(showId);
//   res.render('shows/id', {keyObj: show});
  
//   });
  
  router.get('/', async (req, res) => {
      res.render('shows/homepage', {keyword: "Show Finder"});
  });
module.exports = router;