const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
    // Retrieve token from Authorization header
    const token = req.header("Authorization");
    // console.log('Authorization Header:', token);
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Token not provided" });
    }
    
    // Extract the JWT from "Bearer <jwtToken>"
    const jwtToken = token.replace("Bearer ", "").trim(); // Ensure a space after "Bearer"
    // console.log('Authorization Header:', jwtToken);
    try {
        // Verify the token
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
        
        // Find user associated with the email in the token
        const userData = await User.findOne({ _id: decoded._id }).select({ password: 0,cpassword:0 });
        console.log('Decoded Token:', userData);
        
        if (!userData) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }
        
        // Attach user and token to request object
        req.user = userData;
        req.user_Id = userData._id;
        req.token = token;
        
        next();
    } catch (error) {
        console.error('Token Verification Error:', error);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = authMiddleware;
