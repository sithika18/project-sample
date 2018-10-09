var mongoose = require("mongoose")
var schema = mongoose.Schema
const bcrypt = require('bcryptjs');

var userSchema = new schema({
  userId:{
      type:String 
  },
  name:{
      type:String
  },
  emailID:{
      type:String
  },
  phoneNo:{
      type:String
  },
  dob:{
      type:String
  },
  gender:{
      type:String
  },
  roles:{
      type:String
  },
  password:{
      type:String
  },
  secret:{
      type:String
  },
  createdOn:{
      type:String
  },
  createdBy:{
      type:String
  },
  updatedOn:{
      type:String
  },
  updatedBy:{
      type:String
  }, 
   reportingId:{
    type:String 
  }
},{collection:"User"})

userSchema.pre('save', function(next){
    console.log('inside pre save')
    bcrypt.genSalt(10, (err, salt) => {
        console.log('inside bcrypt gensalt')
        bcrypt.hash(this.password, salt, (err, hash) => {
            console.log('inside bcrypt')
            this.password = hash;
            this.secret = salt;
            next();
        })
    })
    console.log('end pre save')
})

// var userSchema = new schema({
//     userId:Number,
//     name:String,
//     emailID:String,
//     phoneNo:String,
//     dob:String,
//     gender:String,
//     roles:String,
//     password:String,
//     secret:String,
//     createdOn:String,
//     createdBy:String,
//     updatedOn:String,
//     updatedBy: String
//     },{collection:"User"})


module.exports = mongoose.model("userSchema",userSchema)