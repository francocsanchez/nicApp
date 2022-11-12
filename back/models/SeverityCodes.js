const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongooseDelete = require('mongoose-delete');

const severityCodeSchema = Schema(
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

severityCodeSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('SeverityCode', severityCodeSchema);