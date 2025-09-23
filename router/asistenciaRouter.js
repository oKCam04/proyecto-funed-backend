const express = require('express');
const router = express.Router();
const AsistenciaController=require('../controller/asistenciaController');
const aunthmiddleware = require('../middlewares/auth.middleware');

router.get("/asistencia", AsistenciaController.GetAll );
router.post("/asistencia", aunthmiddleware, AsistenciaController.Create  );
router.put("/asistencia/:id",  aunthmiddleware, AsistenciaController.Update);
router.delete("/asistencia/:id", aunthmiddleware, AsistenciaController.Delete);
router.get("/asistencia/:id", aunthmiddleware);

module.exports = router;