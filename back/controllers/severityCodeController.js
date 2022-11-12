const { severityCodeModel } = require('../models');

// TODO: Listar usuarios
const getItems = async (req, res) => {
    const data = await severityCodeModel.find({}).sort('code');

    return res.status(200)
        .json({
            status: 'success',
            data
        });
}

module.exports = {
    getItems
}