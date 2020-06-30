const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.listen(8080,()=>{
    console.log("Port started at 8080")
});
app.use("/adddoctor",require("./router/adddoctor.js"));