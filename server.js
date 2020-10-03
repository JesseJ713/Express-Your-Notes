// Dependencies
const express = require("express");
const path = require("path");

// Sets basic properties for Express server
let app = express();

let PORT = process.env.PORT || 3000;

// Sets up data parsing capabilities
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Pointing Express to `public` directory
app.use(express.static("public"));

// Establishes routes that will create a "map" for our server files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Server Listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
