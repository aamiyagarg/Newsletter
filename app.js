// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res)  {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  const firstName= req.body.fName;
  const lastName= req.body.lName;
  const mail= req.body.email;
  console.log(firstName, lastName, mail);
});
app.listen(3000, function() {
  console.log("server is running at port 3000");
});


// api key
// 66280378702adf5c71c82a4a4a2da25e-us10
// list  ID: 9322e055dd
