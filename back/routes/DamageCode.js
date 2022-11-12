const express = require('express');
const router = express.Router();

const { getItems} = require('../controllers/damageCodeController');

router.get('/', getItems);

module.exports = router;