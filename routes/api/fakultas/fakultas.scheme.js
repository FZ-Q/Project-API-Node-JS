const {
    Schema,
    model
} = require('../../../db.config')
const scheme = new Schema({
    nama: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});
module.exports = model('Fakultas', scheme, 'fakultas');