const express = require('express');
const router = express.Router();

const { getItems} = require('../controllers/damageTypeController');

router.get('/', getItems);

module.exports = router;