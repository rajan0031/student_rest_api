const express = require("express");
const app = express();
const data = require("./data.js");
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  console.log("the data is ", data);
  res.json(data);
});

app.listen(3000, (err) => {
  if (err) {
    console.log("server error ", err);
  }
  console.log(" the server is running at teh port 3000");
});
