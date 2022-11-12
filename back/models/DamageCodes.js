const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongooseDelete = require('mongoose-delete');

const damageCodeSchema = Schema(
    {
        details: {
            type: String,
            uppercase: true
        },
        code: Number
    },
    {
        timestamps: true,
        versionKey: false
    }
)

damageCodeSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('DamageCode', damageCodeSchema);