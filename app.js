const express = require("express");
const app = express();

// Index Route
app.get("/", (req, res) => {
  res.json({ msg: "Running Successfully" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
