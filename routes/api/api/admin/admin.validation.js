const {
    body,
    param
} = require('express-validator');
const {
    findByEmail
} = require('./admin.controller');

exports.validation = [
    body('email').isEmail().normalizeEmail().withMessage('Email anda tidak valid').custom(value => {
        return findByEmail(value).then(user => {
            if (user) {
                return Promise.reject('Email sudah terdaftar');
            }
        })
    }),
    body('password').isLength({
        min: 6
    }).withMessage('Password harus lebih dari 6 karakter')
]

exports.paramValidation = [
    param('id').isMongoId().withMessage('Mongo Id Salah')
]