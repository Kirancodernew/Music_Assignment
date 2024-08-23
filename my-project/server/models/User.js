const mongoose =require('mongoose');
const jwt=require('jsonwebtoken');

//schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    } ,
    
});

userSchema.methods.generateAuthToken=async function (next){
    try {
        let userToken=jwt.sign({_id:this._id},process.env.JWT_SECRET);
        return userToken;
    } catch (error) {
        console.log(error);
    }
}

module.exports =mongoose.model('User',userSchema);