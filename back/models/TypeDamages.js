const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongooseDelete = require('mongoose-delete');

const typeDamageSchema = Schema(
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

typeDamageSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('TypeDamage', typeDamageSchema);