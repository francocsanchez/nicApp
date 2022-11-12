const express = require('express');
const router = express.Router();

const { getItems} = require('../controllers/damageSectorController');

router.get('/', getItems);

module.exports = router;