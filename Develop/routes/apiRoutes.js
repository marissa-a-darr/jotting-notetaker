const router = require ('express').Router();
const fs = require ('fs');
const database = require ('../db/db.json')
const { v4: uuidv4 } = require("uuid");
const { writeToFile, readAndAppend, readFromFile } = require('../helpers/fsUtils');


router.get('/notes', (req, res) => {
  // db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
  // res.json(db)
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

router.post('/notes', (req, res) => {
 
  const {title, text} = req.body;
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4()
    };

    console.log(newNote)
    
    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response)
  } else {
    res.json('Note was unable to save')
  }
})


router.delete('/notes/:id', (req, res) => {
  const noteId= req.params.id;
  readFromFile('./db/db.json')
  .then((data) => JSON.parse(data))
  .then((json) => {
    const result = json.filter((note) => note.id !== noteId)
    writeToFile('./db/db.json', result);
    console.log(result)
    res.json(`Note ${noteId} has been deleted`);
  });
})


module.exports = router