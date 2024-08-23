const express = require('express');
const router = express.Router();
const { signUp, signIn,userInfo } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/validation',authMiddleware,userInfo);

module.exports = router;
