const Transportasi = require('./transportasi.scheme')

exports.findAll = (req, res, next) => {
    const q = req.query;
    const where = {}
    if (q.kendaraan) where['kendaraan'] = q.kendaraan;

    const limit = parseInt(req.query.limit, 10) || 0;
    const offset = parseInt(req.query.limit, 10) || 0;

    const countAll = Transportasi.countDocuments(where);

    const getFilter = Transportasi.find(where).limit(limit).skip(offset);

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
    Transportasi.findById(id)
        .then(transportasi => {
            res.json(transportasi);
        })
        .catch(err => next(err));
}

exports.insert = (req, res, next) => {
    const data = req.body;
    Transportasi.create(data)
        .then(transportasi => {
            res.json({
                message: `Data transportasi baru ditambahkan!`,
                data: transportasi
            });
        })
        .catch(err => next(err))
}

exports.updateById = (req, res, next) => {
    const id = req.params.id
    const data = req.body
    Transportasi.findByIdAndUpdate(id, data, {
            new: true
        })
        .then(transportasi => {
            res.json({
                message: `Data transportasi ${id} diperbarui!`,
                data: transportasi
            });
        })
        .catch(err => next(err))
}

exports.removeById = (req, res, next) => {
    const id = req.params.id
    Transportasi.findByIdAndRemove(id)
        .then(transportasi => {
            res.json({
                message: `Data transportasi ${id} dihapus!`,
                data: transportasi
            });
        })
        .catch(err => next(err))
}

exports.remove = (req, res, next) => {
    Status.deleteMany()
        .then(status => {
            res.json({
                message: 'Semua data transportasi dihapus!',
                data: status
            });
        })
        .catch(err => next(err))
}

exports.cekTansportasiId = (id) => {
    return Transportasi.findById(id);
}