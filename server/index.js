const path = require("path");
const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept")
  if (req.method === "OPTIONS") {
    return res.end();
  }
  next();
});

var router = express.Router();
router.get("/events", function(request, response) {
  fetch("https://beteasy.com.au/api/home/next-jumps/1,2,3")
    .then(res => res.json())
    .then(json => response.json(json));
});
app.use("/", router);

const port = process.env.PORT || 3001;
app.listen(port);
console.log("sever is listening on http://localhost:" + port);
