const express = require("express");
const cors = require("cors");
const constants = require("./constants");

const app = express();

//set port number for server
const port = 3300;

//set cors option to satisfy CORS policy
const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOption));

//send qeustion data in respond to getQuestion request
app.get("/getQuestions", (req, res) => {
  res.send(constants.QUESTIONS);
});

//send result data in respond to getResult request
app.get("/getResult/springWarm", (req, res) => {
  res.send(constants.SPRING_WARM);
});
app.get("/getResult/summerCool", (req, res) => {
  res.send(constants.SUMMER_COOL);
});
app.get("/getResult/fallWarm", (req, res) => {
  res.send(constants.FALL_WARM);
});
app.get("/getResult/winterCool", (req, res) => {
  res.send(constants.WINTER_COOL);
});

//open server
app.listen(port, () => {
  console.log("Server on port 3300");
});
