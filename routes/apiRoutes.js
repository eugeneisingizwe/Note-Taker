const router = require("express").Router();
const fs = require("fs");
const { readFromFile, readAndAppend} = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

//Get route to read the db.json file and return all saved notes as JSON

router.get("/notes", (req, res) =>{
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))

});
 
//POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client

router.post("/notes", (req, res) =>{
  
    const {title, text} = req.body;
    
    //creating a body for the notes 

    if ( title, text){
        const notes = {
          title,
          text,
  
          //unquie id for each notes
          id: uuid(),
    };

        readAndAppend(notes, "./db/db.json");
        res.json("sucess");
        
} else {
    res.json("error in posting notes");
}
});


    module.exports = router;



