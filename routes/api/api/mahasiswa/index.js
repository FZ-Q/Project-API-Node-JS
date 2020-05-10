const express = require('express');
const router = express.Router();
const {
    auth
} = require('../../../secret');
const {
    validation,
    paramValidation
} = require('./mahasiswa.validation')
const c = require('./mahasiswa.controller');

router.get('/', c.findAll)
router.get('/:id', paramValidation, c.findById)
router.post('/', validation, c.insert)
router.put('/:id', paramValidation, validation, c.updateById)
router.delete('/', auth, c.remove)
router.delete('/:id', auth, validation, c.removeById)

module.exports = router;