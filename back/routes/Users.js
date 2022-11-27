const express = require('express');
const router = express.Router();

const { checkAuth } = require('../middleware/checkAuth');

const { getUsers, getUser, putUser, register, login } = require('../controllers/usersController');

// TODO: Usuarios rutas
router.get('/', checkAuth, getUsers);
router.get('/profile/:id', checkAuth, getUser);
router.put('/profile/update/:id', checkAuth, putUser);

router.post('/', register);
router.post('/login', login);

module.exports = router;