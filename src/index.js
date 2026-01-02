require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movie.routes');

const app = express();

// Middleware para JSON
app.use(express.json());

// Rutas de películas
app.use('/movies', movieRoutes);

// Conectar a MongoDB
connectDB();

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
