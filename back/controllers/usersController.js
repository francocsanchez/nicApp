const { userModel } = require('../models')
const { tokenSing, verifyToken } = require('../helpers/generateToken')

// TODO: Listar usuarios
const getUsers = async (req, res) => {
    const data = await userModel.find({})

    res.send({ data })
}

// TODO: Listar usuario
const getUser = async (req, res) => {
    const data = await userModel.findById(req.params.id,
        {
            password: 0,
            deleted: 0,
            createdAt: 0,
            updatedAt: 0
        }
    );

    return res.status(200)
        .json({ data })
}

// TODO: Login de usuario
const login = async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(401)
            .json({
                status: 'error',
                msg: 'Usuario no existe',
            })
    }

    const passConfirm = await user.comparePassword(password)

    if (!passConfirm) {
        return res.status(404)
            .json({
                status: 'error',
                msg: 'Contraseña incorrecta',
            })
    }

    if (passConfirm) {
        const tokenSession = await tokenSing(user)
        const data = await verifyToken(tokenSession);
        return res.status(200)
            .json({
                status: 'success',
                msg: 'Bienvenido',
                user: data,
                tokenSession
            })
    }

}

// TODO: Registrar Usuario
const register = async (req, res) => {
    const { email } = req.body
    const user = await userModel.findOne({ email })

    if (user) {
        return res.status(404)
            .json({
                status: 'error',
                msg: 'Usuario ya registrado'
            })
    }

    const data = await userModel.create(req.body)

    return res.status(200)
        .json({
            status: 'success',
            msg: 'Usuario creado correctamente',
            data
        })
}

// TODO: Actualizar Usuario
const putUser = async (req, res) => {
    const { id } = req.params
    const { name, lastname, password } = req.body

    let user = await userModel.findById(id)

    user.name = name
    user.lastname = lastname

    password ? user.password = password : null

    user.save()

    return res.status(200)
        .json({
            status: 'success',
            msg: 'Usuario actualizado correctamente',
            data: user
        })
}

module.exports = {
    getUsers,
    getUser,
    login,
    register,
    putUser
}