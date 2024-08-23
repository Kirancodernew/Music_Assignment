const express = require('express');
const songRoute=express.Router();
const {song,play}=require('../controllers/songController')
const authMiddleware = require('../middleware/authMiddleware')

songRoute.get('/songs',authMiddleware,song);
songRoute.get('/plays',play)

module.exports =songRoute;