const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const { checkAuth } = require('../middleware/checkAuth');

const { createDamage } = require('./Validator');
const { getItems, getItem, getItemsRepair, addHistory, addItem, addImg } = require('../controllers/damagesController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img/uploads'))
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        cb(null, `${Date.now()}.${ext}`);
    }
})

const upload = multer({ storage });

// TODO: Siniestros rutas
router.get('/', checkAuth, getItems);
router.post('/', createDamage, addItem);
router.post('/history/:id/img/add', upload.single('img'), addImg)
router.post('/history/add', addHistory);
router.get('/repair', getItemsRepair);
router.get('/:id', checkAuth, getItem);

module.exports = router;