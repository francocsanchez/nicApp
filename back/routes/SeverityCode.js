const express = require('express');
const router = express.Router();

const { getItems} = require('../controllers/severityCodeController');

router.get('/', getItems);

module.exports = router;