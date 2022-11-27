const { verifyToken } = require('../helpers/generateToken')
const { userModel } = require('../models');

// FUNCTION: Verificar logueo
const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token);

        if (tokenData) {
            next();
        } else {
            return res.status(409)
                .json({
                    status: 'error',
                    msg: 'No posees permisos para acceder',
                })
        }
    } catch (error) {
        return res.status(409)
            .json({
                status: 'error',
                msg: 'No posees permisos para acceder',
            })
    }
}

// FUNCTION: Verificar rol
const checkRole = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token);
        const userData = await userModel.findById(tokenData.id);
        var rokesOk = false;

        for (let i = 0; i < roles.length; i++) {
            let element = roles[i]
            if (userData.role.includes(element)) {
                rokesOk = true;
            }
        }

        if (rokesOk) {
            next();
        } else {
            return res.status(409)
                .json({
                    status: 'error',
                    msg: 'No posees permisos para acceder',
                })
        }
    } catch (error) {
        return res.status(409)
            .json({
                status: 'error',
                msg: 'No posees permisos para acceder',
            })
    }
}

module.exports = {
    checkAuth,
    checkRole
}