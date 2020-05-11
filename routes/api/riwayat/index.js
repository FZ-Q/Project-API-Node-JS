const express = require('express');
const router = express.Router();
const {
    auth
} = require('../../../secret');
const {
    validation,
    paramValidation
} = require('./riwayat.validation')

const c = require('./riwayat.controller');

router.get('/', auth, c.findAll)
router.get('/:id', paramValidation, c.findById)
router.post('/', validation, c.insert)
router.put('/:id', paramValidation, validation, c.updateById)
router.delete('/', auth, c.remove)
router.delete('/:id', auth, paramValidation, c.removeById)

module.exports = router;