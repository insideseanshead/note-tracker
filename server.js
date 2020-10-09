// Set up DEPENDENCIES
// =======================================================
const fs = require("fs");
const express = require("express");
// const { get } = require("http");
const path = require("path");
const { Console } = require("console");
const { send } = require("process");
const router = express.Router();

// EXPRESS APP
// =======================================================

// Set up Express app to handle data parsing
const app = express();

// Set up Port
const PORT = process.env.PORT || 8080;

// Set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

// ROUTER
// =======================================================
//SetS up routes for HTML

//Set up notes.html route
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

//Set up API ROUTES
  // Parse note object
  // Create function to read current note data
function readNotesDb(){
let dbData = fs.readFileSync("db/db.json", "utf8");
dbData = JSON.parse(dbData)
return dbData
}

// Function used to write new notes to the database.
function writeNotesDb(data){
  const dbData = fs.writeFileSync("db/db.json", JSON.stringify(data))
}

// Set up get /api/notes. should read the db.json file and return all saved json
let noteData = readNotesDb();

app.get("/api/notes", function (req, res) {
  const noteData = readNotesDb()
  res.json(noteData)
});

//Set up POST /api/notes should recieve a new note to save on the request body.
  // Add new note to db.json file.
    // Return new note to client.

app.post("/api/notes", function (req, res) {
  const noteData = readNotesDb();
  const userInput = req.body
  userInput.id = Math.random() * 20;
  noteData.push(userInput);
  console.log(req.body);
  writeNotesDb(noteData)
  res.send("Hope this works!")
})


// DELETE
// =======================================================
//TODO: delete api/notes/:id
app.get("api/clear", function(req,res){
  noteData = readNotesDb()
  for(i=0; i < noteData.length; i++){
    if(noteData[i].id===parseInt(req.params.id)){
      noteData[i]=[];
    }
  }
  
  res.send("clear")
})
//TODO: receive a query parameter w/ id of note to delete.
//TODO: loop through db.json file to find propper id and remove note.
//TODO: rewrite the notes to the db.json file.





//index.html route
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
// =======================================================
// Set up listener
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
