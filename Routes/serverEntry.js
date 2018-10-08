let app = require('../util/expressUtils').app;
let express = require('../util/expressUtils').express;
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var router = express.Router()
var project = require("../Controller/app")
var cors = require('cors')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.listen(8080)
mongoose.connect("mongodb://localhost:27017/project")

app.use(cors())
app.use("/",router)

router.post("/registration",project.userRegistration)
router.post("/login",project.login)
router.get("/users", project.getUsers)
router.delete("/delete/:id",project.deleteUser)
router.put("/update/:id",project.updateDetails)
router.put("/manager/update/:id",project.updateDetailsByMg)
router.get("/manager/users/:id",project.getUserbyMg)
