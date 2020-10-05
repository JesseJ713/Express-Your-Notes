// Dependencies
const { urlencoded } = require("body-parser");
const fs = require("fs");
const noteObjects = require("../db/db");
// let noteData = readNotes();

// function readNotes() {
//   let data = fs.readFileSync("../db/db.js", "utf8");

//   let userInput = JSON.parse(data);

//   // Giving each entry its own unique ID
//   for (let i = 0; i < userInput.length; i++) {
//     userInput[i].id = "" + i;
//   }

//   return userInput;
// }

// GET, POST, DELETE requests
module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    // noteData = readNotes();
    res.JSON(noteObjects);
  });

  app.post("/api/notes", function (req, res) {
    noteObjects.push(req.body);
    // fs.writeFileSync("../db/db.js", JSON.stringify(noteData), "utf8");
    res.JSON(true);
  });

  app.delete("/api/notes/:id", function (req, res) {
    // const noteId = req.params.id;
    // let note = noteData.filter((note) => {
    //   return note.id === noteId;
    // })[0];
    // const index = noteData.indexOf(note);
    // noteData.splice(index, 1);
    // fs.writeFileSync("../db/db.js", JSON.stringify(noteData), "utf8");
    // res.JSON("Note has been deleted");
    noteObjects.length = 0;

    res.json({ ok: true });
  });
};

console.log(noteObjects);
