const express = require("express");
const router = express.Router();

const aboutme = 

{
    name: "Yash Avinash Patole",
    cwid: "10460520",
    biography: 'I have completed my undergrad from Mumbai University in Computer Science while completing Masters in Computer Science at Stevens Institute of Technology.\n I have complete my internship as a Software  Engineer in CENTA which is in Bangalore. I have worked as a digital creator in my undergrad college. In my final year of undergrad my research paper was based on Food inspection using Hyperspectral Imaging.',
    favoriteShows: ["Sherlock", "sacred Games", "Game of Thrones"]
}

router.get("/", async (req, res) => {

    res.json(aboutme)
    
});

module.exports = router;