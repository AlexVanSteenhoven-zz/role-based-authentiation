// Part 2 = https://www.youtube.com/watch?v=vtZNewraVN4&t= { Hier ben ik gebleven }
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const path = require("path");

// Initialize Appliation
const app = express();

// Defining middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// Setup the static folder
app.use(express.static(path.join(__dirname, "public")));

// Index Route
app.get("/", (req, res) => {
  res.json({ msg: "Running Successfully" });
});

// Listen on the defined port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
