const jwt = require('jsonwebtoken');

const tokenSing = async (user) => {
    return jwt.sign(
        {
            _id: user._id,
            role: user.role,
            lastname: user.lastname,
            name: user.name
        },
        process.env.KEY_TOKEN,
        {
            expiresIn: "4h"
        }
    );
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.KEY_TOKEN)
    } catch (error) {
        return null
    }
}

module.exports = { tokenSing, verifyToken }