const {
    Schema,
    model
} = require('../../../db.config')
const scheme = new Schema({
    nama: {
        type: String,
        required: true,
    },
    fakultas: {
        type: String,
        required: true
    },
    usia: {
        type: Number,
        required: true
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: 'Status',
        select: true
    },
    isValidated: {
        type: Boolean,
        required: false,
        default: false
    }
}, {
    timestamps: true
});
module.exports = model('Mahasiswa', scheme, 'mahasiswa');