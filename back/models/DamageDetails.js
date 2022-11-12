const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongooseDelete = require('mongoose-delete');

const damageDetailSchema = Schema(
    {
        code: Number,
        details: {
            type: String,
            uppercase: true
        },
        sectorDamage: {
            type: Schema.ObjectId,
            ref: 'SectorDamage'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

damageDetailSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('DamageDetail', damageDetailSchema);