const express = require('express');
const path = require('path');


const app = express();
const PORT = 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.get("/notes", (req,res) => {
  res.sendFile(path.join(__dirname, "Develop", "public", "notes.html"))
})

app.get("/api/notes", (req, res) => {
  return res.json(notes)
})

app.get("*",(req,res) => {
  res.sendFile(path.join(__dirname, "Develop", "public", "index.html"))
})

app.post("/api/notes", (req, res) => {
  console.info(`${req.method} Note received`)
})

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})