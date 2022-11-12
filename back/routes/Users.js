const express = require('express');
const router = express.Router();

const { getUsers, register, login } = require('../controllers/usersController');

// TODO: Usuarios rutas
router.get('/', getUsers);
router.post('/', register);
router.post('/login', login);

module.exports = router;