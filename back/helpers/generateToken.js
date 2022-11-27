const jwt = require('jsonwebtoken');

// FUNCTION: Crear Token
const tokenSing = async (user) => {

    data = {
        id: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role
    }

    return jwt.sign(data,
        process.env.KEY_TOKEN,
        {
            expiresIn: "4h"
        }
    );
}

// FUNCTION: Verificar Token
const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.KEY_TOKEN)
    } catch (error) {
        return null
    }
}

module.exports = { tokenSing, verifyToken }