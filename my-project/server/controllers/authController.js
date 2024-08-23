const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
  const {name, email, password,cpassword } = req.body;

  try {
    const existingUser=await User.findOne({email:email});
    if(existingUser){
      return res.status(422).json({error:"Email already Exist"});
    }else if(password!=cpassword){
      return res.status(422).json({error:"password are not matching"});
    }else{
      const hashedPassword=await bcrypt.hash(password,10);
      const hashedCPassword=await bcrypt.hash(cpassword,10);
      const user=new User({name, email, password:hashedPassword,cpassword:hashedCPassword});
      
      const userRegister=await user.save();
      if(userRegister){
        res.status(201).json({message:"user registered successfully"});
      }
    }
  } catch (error) {
    console.log(error);
  }
 
};

exports.signIn = async (req, res) => {

  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ Message: 'User not found' });
    
    
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ Message: 'Invalid credentials' });
    const token = await user.generateAuthToken();
    // console.log(token);
    res.status(200).json({
      msg:"Login Successful",
      token: token,
      userId: user._id.toString(),
  });

    
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//to send user data-user logic
exports.userInfo=async(req,res)=>{
  try {
      const userData=req.user
      res.status(200).send(userData)
  } catch (error) {
      console.log(error.message)
  }
};
