const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongooseDelete = require('mongoose-delete');

const typeOpSchema = Schema(
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

typeOpSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('TypeOp', typeOpSchema);