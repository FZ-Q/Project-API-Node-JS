const Riwayat = require('./riwayat.scheme')

exports.findAll = (req, res, next) => {
    const q = req.query;
    const where = {}
    if (q.alamat_asal) where['alamat_asal'] = q.alamat_asal;
    if (q.alamat_tujuan) where['alamat_tujuan'] = q.alamat_tujuan;
    if (q.kegiatan_perjalanan) where['kegiatan_perjalanan'] = q.kegiatan_perjalanan;
    Riwayat.find(where)
        .limit(req.query.limit || 0)
        .skip(req.query.skip || 0)
        .populate('mahasiswa')
        .populate('transportasi')
        .populate('perlindungan')
        .then(riwayat => {
            res.json(riwayat);
        })
        .catch(err => next(err));
}

exports.findById = (req, res, next) => {
    const id = req.params.id
    Riwayat.findById(id)
        .populate('mahasiswa')
        .populate('transportasi')
        .populate('perlindungan')
        .then(riwayat => {
            res.json(riwayat);
        })
        .catch(err => next(err));
}

exports.insert = (req, res, next) => {
    let data = req.body;
    if (req.mahasiswa) data.createdBy = req.mahasiswa;
    Riwayat.create(data)
        .then(riwayat => {
            res.json({
                message: `Data riwayat baru ditambahkan!`,
                data: riwayat
            });
        })
        .catch(err => next(err))
}

exports.updateById = (req, res, next) => {
    const id = req.params.id
    let data = req.body
    if (req.user) data.updatedBy = req.user;
    Riwayat.findByIdAndUpdate(id, data, {
            new: true
        })
        .then(riwayat => {
            res.json({
                message: `Data riwayat ${id} diperbarui!`,
                data: riwayat
            });
        })
        .catch(err => next(err))
}

exports.remove = (req, res, next) => {
    Riwayat.deleteMany()
        .then(riwayat => {
            res.json({
                message: 'Semua data riwayat dihapus!',
                data: riwayat
            });
        })
        .catch(err => next(err))
}

exports.removeById = (req, res, next) => {
    const id = req.params.id
    Riwayat.findByIdAndRemove(id)
        .then(riwayat => {
            res.json({
                message: `Data riwayat ${id} dihapus!`,
                data: riwayat
            });
        })
        .catch(err => next(err))
}