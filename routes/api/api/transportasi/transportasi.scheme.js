const {
    Schema,
    model
} = require('../../../db.config')
const scheme = new Schema({
    kendaraan: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});
module.exports = model('Transportasi', scheme, 'transportasi');