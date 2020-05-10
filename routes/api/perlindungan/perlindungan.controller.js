const Perlindungan = require('./perlindungan.scheme')

exports.findAll = (req, res, next) => {
    const q = req.query;
    const where = {}
    if (q.nama) where['nama'] = q.nama;

    const limit = parseInt(req.query.limit, 10) || 0;
    const offset = parseInt(req.query.limit, 10) || 0;

    const countAll = Perlindungan.countDocuments(where);

    const getFilter = Perlindungan.find(where).limit(limit).skip(offset);

    Promise.all([countAll, getFilter])
        .then(result => {
            res.json({

                totalData: result[0],
                data: result[1]
            });
        }).catch(err => next(err));
}

exports.findById = (req, res, next) => {
    const id = req.params.id
    Perlindungan.findById(id)
        .then(perlindungan => {
            res.json(status);
        })
        .catch(err => next(err));
}

exports.insert = (req, res, next) => {
    const data = req.body;
    Perlindungan.create(data)
        .then(perlindungan => {
            res.json({
                message: `Data perlindungan baru ditambahkan!`,
                data: perlindungan
            });
        })
        .catch(err => next(err))
}

exports.updateById = (req, res, next) => {
    const id = req.params.id
    const data = req.body
    Perlindungan.findByIdAndUpdate(id, data, {
            new: true
        })
        .then(perlindungan => {
            res.json({
                message: `Data perlindungan ${id} diperbarui!`,
                data: perlindungan
            });
        })
        .catch(err => next(err))
}

exports.removeById = (req, res, next) => {
    const id = req.params.id
    Perlindungan.findByIdAndRemove(id)
        .then(perlindungan => {
            res.json({
                message: `Data perlindungan ${id} dihapus!`,
                data: perlindungan
            });
        })
        .catch(err => next(err))
}

exports.remove = (req, res, next) => {
    Perlindungan.deleteMany()
        .then(perlindungan => {
            res.json({
                message: 'Semua data perlindungan dihapus!',
                data: perlindungan
            });
        })
        .catch(err => next(err))
}

exports.cekPerlindunganId = (id) => {
    return Perlindungan.findById(id);
}