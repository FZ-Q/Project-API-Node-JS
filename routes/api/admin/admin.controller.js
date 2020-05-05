const Admin = require('./admin.scheme')
const passwordHash = require('password-hash')
const createError = require('http-errors')

exports.findAll = (req, res, next) => {
    const q = req.query;
    const where = {}
    if (q.email) where['email'] = q.email;

    const limit = parseInt(req.query.limit, 10) || 0;
    const offset = parseInt(req.query.limit, 10) || 0;

    const countAll = Admin.countDocuments(where);

    const getFilter = Admin.find(where).limit(limit).skip(offset);

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
    Admin.findById(id)
        .then(admin => {
            res.json(admin);
        })
        .catch(err => next(err));
}

exports.insert = (req, res, next) => {
    const data = req.body;
    data.password = passwordHash.generate(data.password);
    Admin.create(data)
        .then(admin => {
            res.json({
                message: `Data admin baru ditambahkan!`,
                data: admin
            });
        })
        .catch(err => next(err))
}

exports.updateById = (req, res, next) => {
    const id = req.params.id
    const data = req.body
    if (req.body.password)
        data.password = passwordHash.generate(req.body.password);
    Admin.findByIdAndUpdate(id, data, {
            new: true
        })
        .then(admin => {
            res.json({
                message: `Data admin ${id} diperbarui!`,
                data: admin
            });
        })
        .catch(err => next(err))
}

exports.removeById = (req, res, next) => {
    const id = req.params.id
    Admin.findByIdAndRemove(id)
        .then(admin => {
            res.json({
                message: `Data admin ${id} dihapus!`,
                data: admin
            });
        })
        .catch(err => next(err))
}

exports.remove = (req, res, next) => {
    Admin.deleteMany()
        .then(admin => {
            res.json({
                message: 'Semua data admin dihapus!',
                data: admin
            });
        })
        .catch(err => next(err))
}

exports.login = (email, password) => {
    return new Promise((resolve, reject) => {
        Admin.findOne({
                email
            })
            .then((foundUser) => {
                if (!foundUser) return reject(createError(400, 'Email tidak ditemukan!'))
                const hashedPassword = foundUser.password
                const isValidPassword = passwordHash.verify(password, hashedPassword)
                if (isValidPassword) {
                    resolve(foundUser)
                } else {
                    reject(createError(400, 'Password anda salah!'))
                }
            })
    })
}