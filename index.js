require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Configurar CORS para permitir múltiples orígenes
const allowedOrigins = [
  'http://127.0.0.1:5500',
  'http://localhost:5500',
  'https://kristhellfp.github.io'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json());

// Prefijar todas las rutas con /api
const getTablas = require('./routes/get/obtenerTablas');
app.use('/api', getTablas);

const getTareas = require('./routes/get/obtenerTareas');
app.use('/api', getTareas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});