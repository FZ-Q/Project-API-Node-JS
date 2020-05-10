const {
    body,
    param
} = require('express-validator');
const {
    cekFakultasId
} = require('../fakultas/fakultas.controller');
const {
    cekStatusId
} = require('../status/status.controller');

exports.validation = [
    body('nama').escape(),
    body('fakultas').isMongoId().custom(value => {
        return cekFakultasId(value).then(fakultas => {
            if (!fakultas) {
                return Promise.reject('Id fakultas tidak ditemukan');
            }
        })
    }),
    body('usia').toInt(),
    body('status').isMongoId().custom(value => {
        return cekStatusId(value).then(status => {
            if (!status) {
                return Promise.reject('Id status tidak ditemukan');
            }
        })
    }),
    body('isValidated').toBoolean()
]

exports.paramValidation = [
    param('id').isMongoId().withMessage('Mongo Id Salah')
]