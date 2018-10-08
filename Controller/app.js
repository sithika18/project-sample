var user = require("../Model/user");
const CommonUtil = require('../util/CommonUtils');
const bcrypt = require('bcryptjs');
//user registration
exports.userRegistration = function(req,res){
    console.log('inside registration function')
    var userDetails = new user();
    let utcDate = new Date();

    userDetails.name = req.body.name;
    userDetails.emailID = req.body.emailID;
    userDetails.phoneNo = req.body.phoneNo;
    userDetails.dob = req.body.dob;
    userDetails.gender = req.body.gender;
    userDetails.roles = req.body.roles;
    userDetails.userId = CommonUtil.generateId('C');
    userDetails.createdOn = utcDate;
    userDetails.createdBy = 'self';
    userDetails.updatedOn = utcDate;
    userDetails.updatedBy = 'guest';
    userDetails.password = req.body.password;

    userDetails.save(function(err,results){
        console.log('inside save')
        if(err){
            res.send(err)
        }
        res.send({message:"Registered Successfully"})
    })
}

//login
exports.login = function (req, res) {
    console.log("inside login", req.body)
    var email = req.body.emailID;
    var password = req.body.password;
    user.findOne({ "emailID": email }, function (err, results) {
        console.log("resuls>>>>>>>>>>>>>>>>>>>>>>>>>>>>", results)
        if (err) {
            res.send(err)
        } else {
            
                bcrypt.hash(password, results.secret, (err, hash) => {
                    console.log('inside bcrypt')
                    if (hash == results.password) {
                        res.status(200).send(results)
                    }
                    else {
                        console.log("user.password>>>>>>>>>>>>>>>", ("results.password>>>>>>>>", results.password))
                        res.send({ message: "Email and password does not match" })
                    }
                    
                })
         
            
        }
    })

}

//get all users
exports.getUsers = function(req, res){
    // var userDetails = new user()
    user.find({}).then(function(data){
        res.send({status:200,users:data})
    }).catch((err) =>{
        console.log('Error : ',err)
    })
}