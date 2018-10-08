var user = require("../Model/user");

exports.userRegistration = function(req,res){
    var userDetails = new user(req.body)
    userDetails.save(function(err,results){
        if(err){
            res.send(err)
        }
        res.send({status:200,message:"Registered Successfully"})
    })
}