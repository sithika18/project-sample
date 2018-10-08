var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var router = express.Router()
var project = require("../Controller/app")

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.listen(8080)
mongoose.connect("mongodb://localhost:27017/project")

app.use("/",router)

router.post("/registration",project.userRegistration)