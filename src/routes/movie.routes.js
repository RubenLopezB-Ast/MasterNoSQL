const express = require('express');
const Movie = require('../models/movie.model');

const router = express.Router();

// GET todas las películas
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST crear una película
router.post('/', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT modificar una película
router.put('/:id', async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE eliminar una película
router.delete('/:id', async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: 'Movie deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
