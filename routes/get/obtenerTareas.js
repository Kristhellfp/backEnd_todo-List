const db = require('../../config/database');
const express = require('express');
const router = express.Router();

router.get('/tareas', async (req, res) => {
    try {
        let [todasLasTareas] = await db.query(`
            SELECT 
                id,
                nombre,
                descripcion,
                estado_tarea,
                fecha_asignada,
                fecha_entrega,
                estado_artivado,
                usuario_id
            FROM tareas
        `);

        res.json(todasLasTareas);
    } catch (error) {
        console.error("Error al obtener tareas: ", error);
        res.status(500).json({ error: "Error al obtener tareas" });
    }
});

module.exports = router;
