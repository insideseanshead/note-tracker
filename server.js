// Set up DEPENDENCIES
// =======================================================
const fs = require("fs");
const express = require("express");

// EXPRESS APP
// =======================================================

// Set up Express app to handle data parsing
cost app = express()

// Set up Port
const PORT = process.env.PORT || 8080;

// Set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// =======================================================
//TODO: Set up routes for HTML
//TODO: set up index.html route
//TODO: Set up notes.html route

//TODO: Set up API ROUTES
//TODO: Set up get /api/notes. should read the db.json file and return all saved json

//TODO: Set up POST /api/notes should recieve a new note to save on the request body.
//TODO: Add new note to db.json file
//TODO: Return new note to client.


// DELETE
// =======================================================
//TODO: delete api/notes/:id
//TODO: receive a query parameter w/ id of note to delete.
//TODO: loop through db.json file to find propper id and remove note.
//TODO: rewrite the notes to the db.json file.


//TODO: Set up listener
// =======================================================