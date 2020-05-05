const Status = require('./status.scheme')

exports.findAll = (req, res, next) => {
    const q = req.query;
    const where = {}
    if (q.status) where['status'] = q.status;
    if (q.deskripsi) where['deskripsi'] = q.deskripsi;

    const limit = parseInt(req.query.limit, 10) || 0;
    const offset = parseInt(req.query.limit, 10) || 0;

    const countAll = Status.countDocuments(where);

    const getFilter = Status.find(where).limit(limit).skip(offset);

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
    Status.findById(id)
        .then(status => {
            res.json(status);
        })
        .catch(err => next(err));
}

exports.insert = (req, res, next) => {
    const data = req.body;
    Status.create(data)
        .then(status => {
            res.json({
                message: `Data status baru ditambahkan!`,
                data: status
            });
        })
        .catch(err => next(err))
}

exports.updateById = (req, res, next) => {
    const id = req.params.id
    const data = req.body
    Status.findByIdAndUpdate(id, data, {
            new: true
        })
        .then(status => {
            res.json({
                message: `Data status ${id} diperbarui!`,
                data: status
            });
        })
        .catch(err => next(err))
}

exports.removeById = (req, res, next) => {
    const id = req.params.id
    Status.findByIdAndRemove(id)
        .then(status => {
            res.json({
                message: `Data status ${id} dihapus!`,
                data: status
            });
        })
        .catch(err => next(err))
}

exports.remove = (req, res, next) => {
    Status.deleteMany()
        .then(status => {
            res.json({
                message: 'Semua data status dihapus!',
                data: status
            });
        })
        .catch(err => next(err))
}