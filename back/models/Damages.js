const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongooseDelete = require('mongoose-delete');

const damageSchema = Schema(
    {
        car: {
            interno: Number,
            vin: {
                type: String,
                uppercase: true
            },
            order: {
                type: String,
                uppercase: true
            },
            ope: {
                numOp: Number,
                typeOp: {
                    type: Schema.ObjectId,
                    ref: 'TypeOp'
                }
            }
        },
        damage: {
            typeDamage: {
                type: Schema.ObjectId,
                ref: 'TypeDamage'
            },
            repair: {
                type: Boolean,
                default: false
            },
            history: [
                {
                    details: String,
                    date: {
                        type: Date,
                        default: Date.now
                    },
                    user: {
                        type: Schema.ObjectId,
                        ref: 'User'
                    }
                }
            ],
            img: [
                {
                    img: String,
                    details: String
                }
            ],
            damages: [
                {
                    severityCode: {
                        type: Schema.ObjectId,
                        ref: 'SeverityCode'
                    },
                    damageCode: {
                        type: Schema.ObjectId,
                        ref: 'DamageCode'
                    },
                    damageDetails: {
                        type: Schema.ObjectId,
                        ref: 'DamageDetail'
                    },
                }
            ]
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

damageSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('Damage', damageSchema);