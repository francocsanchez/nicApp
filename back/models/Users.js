const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            uppercase: true
        },
        lastname: {
            type: String,
            uppercase: true
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        role: {
            type: [String],
            default: 'user'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

//Hash password
userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) { return next(); }

    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})

userSchema.methods = {
    comparePassword: function (password) {
        return bcrypt.compareSync(password, this.password);
    }
}

userSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('User', userSchema);