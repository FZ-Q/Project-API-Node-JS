const {
    body,
    param
} = require('express-validator');
const {
    cekMahasiswaId
} = require('../mahasiswa/mahasiswa.controller');
const {
    cekTransportasiId
} = require('../transportasi/transportasi.controller');
const {
    cekPerlindunganId
} = require('../perlindungan/perlindungan.controller');

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
    body('transportasi').isMongoId().custom(value => {
        return cekTransportasiId(value).then(transportasi => {
            if (!transportasi) {
                return Promise.reject('Id transportasi tidak ditemukan')
            }
        })
    }),
    body('perlindungan').isMongoId().custom(value => {
        return cekPerlindunganId(value).then(perlindungan => {
            if (!perlindungan) {
                return Promise.reject('Id Perlindungan tidak ditemukan')
            }
        })
    }),
    body('kegiatan_perjalanan').escape()
]

exports.paramValidation = [
    param('id').isMongoId().withMessage('Mongo Id Salah')
]