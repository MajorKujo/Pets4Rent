var mongoose=require('mongoose');

var userSchema=mongoose.Schema({
    name:String,
    userName:String,
    userPassword:String,
    userPhone:Number,
    userMail:String
})

var userModel=mongoose.model('user',userSchema);

module.exports=userModel;