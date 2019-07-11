const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const path = require("path");

// Initialize Appliation
const app = express();

// Index Route
app.get("/", (req, res) => {
  res.json({ msg: "Running Successfully" });
});

// Listen on the defined port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
