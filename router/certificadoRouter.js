const express = require('express');
const router = express.Router();
const CertificadoController=require('../controller/certificadoController');
const aunthmiddleware = require('../middlewares/auth.middleware');

router.get("/certificado", CertificadoController.GetAll);
router.post("/certificado", aunthmiddleware, CertificadoController.Create);
router.put("/certificado/:id", CertificadoController.Update);
router.delete("/certificado/:id", CertificadoController.Delete);
router.get("/certificado/:id", aunthmiddleware,CertificadoController.GetForId);

module.exports = router;