const { damageSectorModel } = require('../models');

// TODO: Listar usuarios
const getItems = async (req, res) => {
    const data = await damageSectorModel.find({});

    return res.status(200)
        .json({
            status: 'success',
            data
        });
}

module.exports = {
    getItems
}