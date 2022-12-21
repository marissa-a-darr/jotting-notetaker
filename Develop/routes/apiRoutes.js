const api = require ('express').Router();
const fs = require ('fs');
const database = require ('../db/db.json')
const { v4: uuidv4 } = require("uuid");

api.get('/notes', (req, res) => {
  database =JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
  res.json(database);
});

api.post('/notes', (req, res) => {
  id:uuidv4().slice
})