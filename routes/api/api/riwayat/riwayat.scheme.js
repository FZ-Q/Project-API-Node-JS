const {
    Schema,
    model
} = require('../../../db.config')
const scheme = new Schema({
    mahasiswa: {
        type: Schema.Types.ObjectId,
        ref: 'Mahasiswa',
        select: true
    },
    alamat_asal: {
        type: String,
        required: true,
    },
    alamat_tujuan: {
        type: String,
        required: true,
    },
    transportasi: {
        type: Schema.Types.ObjectId,
        ref: 'Transportasi',
        select: true
    },
    perlindungan: {
        type: Schema.Types.ObjectId,
        ref: 'Perlindungan',
        select: true
    },
    kegiatan_perjalanan: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});
module.exports = model('Riwayat', scheme, 'riwayat');