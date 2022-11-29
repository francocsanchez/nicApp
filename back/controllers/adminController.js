const { damageCodeModel } = require('../models');
const { damageSectorModel } = require('../models');
const { typeDamageModel } = require('../models');
const { damageDetailModel } = require('../models');
const { severityCodeModel } = require('../models');

const getDamageAdmin = async (req, res) => {
    const damageCode = await damageCodeModel.find().sort('code');
    const typeDamage = await typeDamageModel.find({}).sort('name');
    const sectorDamage = await damageSectorModel.find({});
    const details = await damageDetailModel.find({});
    const severityCode = await severityCodeModel.find({}).sort('code');

    data = {
        damageCode,
        typeDamage,
        sectorDamage,
        details,
        severityCode
    }

    return res.status(200)
        .json({
            status: 'success',
            data
        });
}

const getDetailSectorDamage = async (req, res) => {

    const data = await damageDetailModel.find({ 'sectorDamage': req.params.id }).sort({ code: 1 });

    return res.status(200)
        .json({
            status: 'success',
            data
        });
}

module.exports = {
    getDetailSectorDamage,
    getDamageAdmin
}