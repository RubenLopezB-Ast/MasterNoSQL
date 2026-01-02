const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    anio: {
      type: Number,
      required: true,
    },
    genero: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Movie', movieSchema);

