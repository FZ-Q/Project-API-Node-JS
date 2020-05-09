const {
    body,
    param
} = require('express-validator');
exports.validation = [
    body('status').trim().escape(),
    body('deskripsi').trim().escape()
]

exports.paramValidation = [
    param('id').isMongoId().withMessage('Mongo Id Salah')
]