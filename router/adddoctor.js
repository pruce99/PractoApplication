var express = require('express')
var route = express.Router()
route.use("/doctordetails",require("../controller/adddoctor"))

module.exports = route;