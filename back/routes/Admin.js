const express = require('express');
const router = express.Router();

const {
    getDamageAdmin,
    getDetailSectorDamage
} = require('../controllers/adminController');

router.get('/damage-admin', getDamageAdmin);
router.get('/damage-details-sector/:id', getDetailSectorDamage);

module.exports = router;