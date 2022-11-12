const { userModel } = require('../models');
const { tokenSing } = require('../helpers/generateToken');
const jwt = require('jsonwebtoken');

// TODO: Listar usuarios
const getUsers = async (req, res) => {
    const data = await userModel.find({});

    res.send({ data });
}

const login = async (req, res) => {
    const { email, password } = req.body;
    
    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(401)
            .json({
                status: 'error',
                msg: 'Usuario no existe',
                type: 'notUser'
            })
    }

    const passConfirm = await user.comparePassword(password);

    if (!passConfirm) {
        return res.status(404)
            .json({
                status: 'error',
                msg: 'Contraseña incorrecta',
                type: 'notPassword'
            })
    }

    data = {
        id: user._id,
        email: user.email,
        name: user.name,
        lastname: user.lastname
    };

    if (passConfirm) {
        const tokenSession = await tokenSing(user);
        return res.status(200)
            .json({
                msg: 'Bienvenido',
                data,
                tokenSession
            })
    }

}

const register = async (req, res) => {
    const { email } = req.body;
    const user = await userModel.findOne({ email });

    if (user) {
        return res.status(404)
            .json({
                status: 'error',
                msg: 'Usuario ya registrado'
            })
    }

    const data = await userModel.create(req.body);

    return res.status(200)
        .json({
            status: 'success',
            msg: 'Usuario creado correctamente',
            data
        });
}

module.exports = {
    getUsers,
    login,
    register
}