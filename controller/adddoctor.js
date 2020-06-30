var adddoctor = require("express").Router();
var client = require("../config/config");

adddoctor.post("/", async (req, res) => {
  console.log(req.body);
  // client.query(
  //   `insert into Doctable(name,gender,speciality,hospital,registerno,availableTimeslots) values('${req.body.name}','${req.body.gender}','${req.body.speciality}','${req.body.hospital}','${req.body.registerno}','${req.body.availableTimeslots}')`
  // );
});

module.exports = adddoctor;
