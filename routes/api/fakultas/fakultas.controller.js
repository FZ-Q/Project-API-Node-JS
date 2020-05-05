const Fakultas = require('./fakultas.scheme')

exports.findAll = (req, res, next) => {
    const q = req.query;
    const where = {}
    if (q.nama) where['nama'] = q.nama;

    const limit = parseInt(req.query.limit, 10) || 0;
    const offset = parseInt(req.query.limit, 10) || 0;

    const countAll = Fakultas.countDocuments(where);

    const getFilter = Fakultas.find(where).limit(limit).skip(offset);

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
    Fakultas.findById(id)
        .then(fakultas => {
            res.json(status);
        })
        .catch(err => next(err));
}

exports.insert = (req, res, next) => {
    const data = req.body;
    Fakultas.create(data)
        .then(fakultas => {
            res.json({
                message: `Data fakultas baru ditambahkan!`,
                data: fakultas
            });
        })
        .catch(err => next(err))
}

exports.updateById = (req, res, next) => {
    const id = req.params.id
    const data = req.body
    Fakultas.findByIdAndUpdate(id, data, {
            new: true
        })
        .then(fakultas => {
            res.json({
                message: `Data fakultas ${id} diperbarui!`,
                data: fakultas
            });
        })
        .catch(err => next(err))
}

exports.removeById = (req, res, next) => {
    const id = req.params.id
    Fakultas.findByIdAndRemove(id)
        .then(fakultas => {
            res.json({
                message: `Data fakultas ${id} dihapus!`,
                data: fakultas
            });
        })
        .catch(err => next(err))
}

exports.remove = (req, res, next) => {
    Fakultas.deleteMany()
        .then(fakultas => {
            res.json({
                message: 'Semua data fakultas dihapus!',
                data: fakultas
            });
        })
        .catch(err => next(err))
}