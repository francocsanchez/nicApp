const { damageCodeModel } = require('../models');

// TODO: Siniestros listar.
const getItems = async (req, res) => {

    const data = await damageCodeModel.find().sort('code');

    return res.status(200)
        .json({
            status: 'success',
            data
        });
}

module.exports = {
    getItems
}