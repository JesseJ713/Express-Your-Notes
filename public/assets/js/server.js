// Dependencies

const express = require("express");
const path = require("path");

// Sets basic properties for Express server

let app = express();

let PORT = process.env.PORT || 3000;

// Sets up data parsing capabilities

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
