const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongooseDelete = require('mongoose-delete');

const sectorDamage = Schema(
    {
        name: {
            type: String,
            uppercase: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

sectorDamage.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('sectorDamage', sectorDamage);