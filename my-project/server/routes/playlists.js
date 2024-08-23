// routes/playlists.js
const express = require('express');
const Playlist = require('../models/Playlist');
const Song = require('../models/Song');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create a playlist
router.post('/create', authMiddleware, async (req, res) => {
  const { name } = req.body;
  const user = req.user;

  try {
    const playlist = new Playlist({ name, user: user._id });
    await playlist.save();
    res.status(201).json(playlist);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create playlist' });
  }
});

// Add a song to a playlist
router.post('/add-song', authMiddleware, async (req, res) => {
  const { playlistId, songId } = req.body;

  try {
    const playlist = await Playlist.findById(playlistId);
    if (!playlist) return res.status(404).json({ error: 'Playlist not found' });

    // Check if the song is already in the playlist
    if (playlist.songs.includes(songId)) {
      return res.status(400).json({ error: 'Song already in playlist' });
    }

    playlist.songs.push(songId);
    await playlist.save();
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add song to playlist' });
  }
});

// Get all playlists for a user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const playlists = await Playlist.find({ user: req.user._id }).populate('songs');
    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch playlists' });
  }
});

module.exports = router;
