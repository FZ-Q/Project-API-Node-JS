const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');
var expect = chai.expect;

// Configure chai
chai.use(chaiHttp);
chai.should();

let token;
describe("Login", () => {
    it("should return token", (done) => {
        chai.request(server)
            .get('/auth/login')
            .auth('admin@admin.com', 'admin')
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(200);
                token = res.body.token;
                done();
            });
    });
})

let idRiwayat;
describe("Riwayat Endpoint With Auth and Id", () => {
    it("should get all riwayat", (done) => {
        chai.request(server)
            .get('/api/riwayat')
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(200);
                res.body.should.be.a('array');
                console.log(res.body)
                idRiwayat = res.body[0]._id;
                // Harusnya 0 / 1 untuk test
                done();
            });
    })
    // it("should get riwayat by id", (done) => {
    //     chai.request(server)
    //         .get('/api/riwayat/' + idRiwayat)
    //         .set('authorization', `Bearer ${token}`)
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             res.body.should.have.property('_id');
    //             res.body._id.should.equal(idRiwayat);
    //             console.log(res.body)
    //             done();
    //         });
    // })
    // it("should insert new riwayat", (done) => {
    //     chai.request(server)
    //         .post('/api/riwayat')
    //         .set('authorization', `Bearer ${token}`)
    //         .send({
    //             mahasiswa: '5eb8df1880cd2a6f6fd511bb',
    //             alamat_asal: 'Sabang',
    //             alamat_tujuan: 'Marauke',
    //             transportasi: '5eb0fe4d6233a7511710ab38',
    //             perlindungan: '5eb0c618a9d5fd18f1229f2e',
    //             kegiatan_perjalanan: 'Gass terozz'
    //         })
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             res.body.should.have.property('message').include('ditambahkan');
    //             res.body.should.have.property('data');
    //             res.body.data.should.have.property('status');
    //             res.body.data.should.have.property('deskripsi');
    //             console.log(res.body)
    //             done();
    //         });
    // })
    // it("should update riwayat by id", (done) => {
    //     chai.request(server)
    //         .put('/api/riwayat/' + idRiwayat)
    //         .set('authorization', `Bearer ${token}`)
    //         .send({
    //             mahasiswa: '5eb8df1880cd2a6f6fd511bb',
    //             alamat_asal: 'Sabang',
    //             alamat_tujuan: 'Marauke',
    //             transportasi: '5eb0fe4d6233a7511710ab38',
    //             perlindungan: '5eb0c618a9d5fd18f1229f2e',
    //             kegiatan_perjalanan: 'Gass terozz'
    //         })
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             res.body.should.have.property('message').include(idRiwayat);
    //             res.body.should.have.property('data');
    //             res.body.data.should.be.a('object');
    //             res.body.data.should.have.property('_id');
    //             res.body.data._id.should.equal(idRiwayat);
    //             res.body.data.should.have.property('mahasiswa');
    //             res.body.data.should.have.property('alamat_asal');
    //             res.body.data.should.have.property('alamat_tujuan');
    //             res.body.data.should.have.property('transportasi');
    //             res.body.data.should.have.property('perlindungan');
    //             res.body.data.should.have.property('kegiatan_perjalanan');
    //             console.log(res.body);
    //             done();
    //         });
    // })
    // it("should delete riwayat by id", (done) => {
    //     chai.request(server)
    //         .delete('/api/riwayat/' + idRiwayat)
    //         .set('authorization', `Bearer ${token}`)
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             res.body.should.have.property('message').include(idRiwayat);
    //             res.body.should.have.property('data');
    //             res.body.data.should.be.a('object');
    //             res.body.data.should.have.property('_id');
    //             res.body.data._id.should.equal(idRiwayat);
    //             console.log(res.body);
    //             done();
    //         });
    // })
    // it("should delete riwayat", (done) => {
    //     chai.request(server)
    //         .delete('/api/riwayat')
    //         .set('authorization', `Bearer ${token}`)
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             res.body.should.have.property('message').include('Semua');
    //             res.body.should.have.property('data');
    //             res.body.data.should.be.a('object');
    //             console.log(res.body);
    //             done();
    //         });
    // })
});