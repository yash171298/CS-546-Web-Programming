const express = require('express');
const router = express.Router();
const axios = require('axios').default;

async function shows(){
    const { data } = await axios.get('http://api.tvmaze.com/shows');
    //const parsedData = JSON.parse(data) // parse the data from JSON into a normal JS Object
    return data // this will be the array of people objects
  }
shows();
router.get('/', async (req, res) => {
    try {
        let data = await shows();
       
    res.json(data);


    } catch (e) {
      res.status(500).send();
    }
  });

router.get('/:id', async (req, res) => {
    try {
       let data = await shows();

       //const { data } = await axios.get(`http://api.tvmaze.com/shows/${req.params.id}`);
       if(Number.isInteger(req.params.id)) throw 'no decimals allowed';
        let showsbyid = 0;
        for(let i=0;i<data.length;i++){
            if(data[i].id == req.params.id ){
            showsbyid = data[i];
            break;
            }
        }
         if(showsbyid == 0) throw 'No shows found with that id'
     
      res.json(showsbyid);
   } catch (e) {
     res.status(404).json({ message: 'Shows not found' });
    }
  });


module.exports = router;