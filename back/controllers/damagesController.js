const { damageModel } = require('../models');
const { validationResult } = require('express-validator');
const fs = require('fs');

const getItems = async (req, res) => {
    try {
        const data = await damageModel.find({ 'damage.repair': false });

        return res.status(200)
            .json({
                status: 'success',
                data
            });
    } catch (error) {
        return console.log(error)
    }
}

const getItemsRepair = async (req, res) => {

    const data = await damageModel.find({ 'damage.repair': true })

    return res.status(200)
        .json({
            status: 'success',
            data
        });

}

const getItem = async (req, res) => {

    const data = await damageModel
        .findOne({ "_id": req.params.id })
        .populate({
            path: "car.ope.typeOp",
            model: "TypeOp"
        })
        .populate({
            path: "damage.typeDamage",
            model: "TypeDamage"
        })
        .populate({
            path: "damage.damages.severityCode",
            model: "SeverityCode"
        })
        .populate({
            path: "damage.damages.damageCode",
            model: "DamageCode"
        })
        .populate({
            path: "damage.damages.damageDetails",
            model: "DamageDetail"
        })
        .populate({
            path: "damage.history.user",
            model: "User"
        })

    return res.status(200)
        .json({
            status: 'success',
            data
        });
}

const addHistory = async (req, res) => {

    const { details, repair, id, user } = req.body

    const data = await damageModel.findOne({ "_id": id });

    data.damage.history.push({ details, user });
    data.damage.repair = repair;
    data.date = new Date();

    data.save();

    return res.status(200)
        .json({
            status: 'success',
            msg: 'Movimiento agregado correctamente',
            data
        });
}

const addItem = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.mapped() });
    }

    const { vin, typeDamage, damages } = req.body;

    await damageModel.create({
        'car.vin': vin,
        'damage.typeDamage': typeDamage,
        'damage.history': [{
            'details': 'Unidad ingresada'
        }],
        'damage.damages': damages
    })

    return res.status(200)
        .json({
            status: 'success',
            msg: 'Siniestro creado correctamente'
        });
}

const addImg = async (req, res) => {

    const typeImg = req.file.mimetype.split('/').shift();

    if (typeImg === 'image') {
        const data = await damageModel.findOne({ "_id": req.params.id });

        const newImg = {
            img: req.file.filename
        }

        data.damage.img.push(newImg);

        data.save();

        return res.status(200)
            .json({
                status: 'success',
                msg: 'Imagen agregada correctamente'
            });

    } else if (typeImg != 'image') {
        fs.unlinkSync(req.file.path)
        return res.status(400)
            .json({
                status: 'error',
                msg: 'El archivo no es una imagen'
            });
    } else if (typeImg == undefined) {
        return res.status(400)
            .json({
                status: 'error',
                msg: 'Debe seleccionar un archivo'
            });
    }
}

module.exports = {
    getItems,
    getItem,
    addHistory,
    getItemsRepair,
    addItem,
    addImg
}