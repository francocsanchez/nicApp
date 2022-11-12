const { typeDamageModel } = require('../models');

// TODO: Listar usuarios
const getItems = async (req, res) => {
    const data = await typeDamageModel.find({}).sort('name');

    return res.status(200)
        .json({
            status: 'success',
            data
        });
}

module.exports = {
    getItems
}