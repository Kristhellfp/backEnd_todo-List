require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Configurar CORS para permitir múltiples orígenes
const allowedOrigins = [
  'http://127.0.0.1:5500',      // Live Server local
  'http://localhost:5500',      // Live Server alternativo
  'https://kristhellfp.github.io' // Reemplaza con tu usuario de GitHub
];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir requests sin origen (como apps móviles o Postman)
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

const getTablas = require('./routes/get/obtenerTablas');
app.use(getTablas);

const getTareas = require('./routes/get/obtenerTareas');
app.use(getTareas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});