const express = require('express');
const router = express.Router();

const { getItems, getSector } = require('../controllers/damageDetailsController');

// TODO: Siniestros rutas
router.get('/', getItems);
router.get('/sector/:id', getSector);

module.exports = router;