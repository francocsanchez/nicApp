const { damageDetailModel } = require('../models');

// TODO: Listar usuarios
const getItems = async (req, res) => {
    const data = await damageDetailModel.find({});

    return res.status(200)
        .json({
            status: 'success',
            data
        });
}

const getSector = async (req, res) => {

    const data = await damageDetailModel.find({ 'sectorDamage': req.params.id }).sort({code:1});

    return res.status(200)
        .json({
            status: 'success',
            data
        });
}

module.exports = {
    getItems,
    getSector
}