const {
    body,
    param
} = require('express-validator');
const {
    cekStatusId
} = require('../status/status.controller');

exports.validation = [
    body('nama').escape(),
    body('fakultas').escape(),
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