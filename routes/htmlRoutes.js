//Dependecies 

const router = require("express").Router();
const path = require("path");


    // GET Route to retun the note.html file 
   router.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    
//Get Route to retun the index.html 
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;


