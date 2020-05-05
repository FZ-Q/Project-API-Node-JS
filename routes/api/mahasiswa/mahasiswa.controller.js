const Mahasiswa = require('./mahasiswa.scheme')
const passwordHash = require('password-hash')
const createError = require('http-errors')
const {
    validationResult
} = require('express-validator');

exports.findAll = (req, res, next) => {
    const q = req.query;
    const where = {}
    if (q.nama) where['nama'] = q.nama;

    Mahasiswa.find(where)
        .limit(req.query.limit || 0)
        .skip(req.query.skip || 0)
        .populate('fakultas')
        .populate('status')
        .populate('riwayat')
        .then(mahasiswa => {
            res.json(mahasiswa);
        })
        .catch(err => next(err));
}

exports.findByNama = (req, res, next) => {
    const nama = req.params.nama
    Mahasiswa.findById(nama)
        .populate('fakultas')
        .populate('status')
        .populate('riwayat')
        .then(posts => {
            res.json(posts);
        })
        .catch(err => next(err));
}

exports.insert = (req, res, next) => {
    let data = req.body;
    Mahasiswa.create(data)
        .then(mahasiswa => {
            res.json({
                message: `Data mahasiswa baru ditambahkan!`,
                data: mahasiswa
            });
        })
        .catch(err => next(err))
}

exports.updateById = (req, res, next) => {
    const id = req.params.id
    let data = req.body
    Mahasiswa.findByIdAndUpdate(id, data, {
            new: true
        })
        .then(mahasiswa => {
            res.json({
                message: `Data mahasiswa ${id} diperbarui!`,
                data: mahasiswa
            });
        })
        .catch(err => next(err))
}

exports.remove = (req, res, next) => {
    Mahasiswa.deleteMany()
        .then(Mahasiswa => {
            res.json({
                message: 'Semua data mahasiswa dihapus!',
                data: mahasiswa
            });
        })
        .catch(err => next(err))
}

exports.removeById = (req, res, next) => {
    const id = req.params.id
    Mahasiswa.findByIdAndRemove(id)
        .then(mahasiswa => {
            res.json({
                message: `Data mahasiswa ${id} dihapus!`,
                data: mahasiswa
            });
        })
        .catch(err => next(err))
}