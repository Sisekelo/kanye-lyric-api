const express = require('express'); //import express

const router  = express.Router(); //in express use the router function

const lyricsController = require('../controllers/lyrics'); 

router.get('/lyrics/:keyword', lyricsController.getLyrics); //when this route is called, return this function

module.exports = router; // export to use in server.js