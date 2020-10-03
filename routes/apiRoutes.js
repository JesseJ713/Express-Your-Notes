// Dependencies
const { urlencoded } = require("body-parser");
const fs = require("fs");
let noteData = readNotes();

function readNotes() {
  let data = fs.readFileSync("../db/db.json", "utf-8");

  let userInput = JSON.parse(data);

  // Giving each entry its own unique ID
  for (let i = 0; i < userInput.length; i++) {
    userInput[i].id = "" + i;
  }

  return noteData;
}

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.JSON(noteData);
  });
};
