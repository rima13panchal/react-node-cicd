const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/frontend/build")));
//app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/frontend/build", "index.html"));
});

app.get("/names", (req, res) => {
  res.send("Rima");
});

app.listen(8000, () => {
  console.log(path.join(__dirname, "/frontend/build"));
  console.log("Server is running on port 8000");
});
