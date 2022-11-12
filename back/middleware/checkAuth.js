const { verifyToken } = require('../helpers/generateToken')

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

module.exports = {
    checkAuth
}