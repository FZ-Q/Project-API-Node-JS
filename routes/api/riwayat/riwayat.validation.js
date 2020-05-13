const {
    body,
    param
} = require('express-validator');
const {
    cekMahasiswaId
} = require('../mahasiswa/mahasiswa.controller');

exports.validation = [
    body('mahasiswa').isMongoId().custom(value => {
        return cekMahasiswaId(value).then(mahasiswa => {
            if (!mahasiswa) {
                return Promise.reject('Id mahasiswa tidak ditemukan')
            }
        })
    }),
    body('alamat_asal').escape(),
    body('alamat_tujuan').escape(),
    body('transportasi').escape(),
    body('perlindungan').escape(),
    body('kegiatan_perjalanan').escape()
]

exports.paramValidation = [
    param('id').isMongoId().withMessage('Mongo Id Salah')
]