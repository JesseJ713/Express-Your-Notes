// Dependencies
const { urlencoded } = require("body-parser");
const fs = require("fs");
const noteObjects = require("../db/db");

// GET, POST, DELETE requests
module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(noteObjects);
  });

  app.post("/api/notes", function (req, res) {
    noteObjects.push(req.body);
    res.json(true);
  });

  app.delete("/api/notes/:id", function (req, res) {
    noteObjects.length = 0;
    res.json({ ok: true });
  });
};

console.log(noteObjects);
