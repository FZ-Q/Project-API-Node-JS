const {
    Schema,
    model
} = require('../../../db.config')
const scheme = new Schema({
    status: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        require: true
    }
});
module.exports = model('Status', scheme, 'status');