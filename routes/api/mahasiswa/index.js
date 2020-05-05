const express = require('express');
const router = express.Router();

const c = require('./mahasiswa.controller');
const {
    auth
} = require('../../../secret');

router.get('/', c.findAll)
router.get('/:id', c.findByNama)
router.post('/', c.insert)
router.put('/:id', c.updateById)
router.delete('/', auth, c.remove)
router.delete('/:id', c.removeById)

module.exports = router;