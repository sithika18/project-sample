var mongoose = require("mongoose")
var schema = mongoose.Schema

var userSchema = new schema({
  userId:{
      type:Number ,required:true
  },
  name:{
      type:String,required:true
  },
  emailID:{
      type:String,required:true
  },
  phoneNo:{
      type:String,required:true
  },
  dob:{
      type:String,required:true
  },
  gender:{
      type:String,required:true
  },
  roles:{
      type:String,required:true
  },
  password:{
      type:String,required:true
  },
  secret:{
      type:String,required:true
  },
  createdOn:{
      type:String,required:true
  },
  createdBy:{
      type:String,required:true
  },
  updatedOn:{
      type:String,required:true
  },
  updatedBy:{
      type:String,required:true
  }
},{collection:"User"})
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