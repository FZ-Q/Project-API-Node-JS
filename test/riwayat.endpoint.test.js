// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// var expect = chai.expect;

// // Configure chai
// chai.use(chaiHttp);
// chai.should();

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

// let idRiwayat;
// describe("Riwayat Endpoint With Auth and Id", () => {
//     it("should get all riwayat", (done) => {
//         chai.request(server)
//             .get('/api/riwayat')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 res.body.should.be.a('array');
//                 console.log(res.body)
//                 idRiwayat = res.body[0]._id;
//                 // Harusnya 0 / 1 untuk test
//                 done();
//             });
//     })
//     // it("should get riwayat by id", (done) => {
//     //     chai.request(server)
//     //         .get('/api/riwayat/' + idRiwayat)
//     //         .set('authorization', `Bearer ${token}`)
//     //         .end((err, res) => {
//     //             expect(err).to.be.null;
//     //             res.should.have.status(200);
//     //             res.body.should.have.property('_id');
//     //             res.body._id.should.equal(idRiwayat);
//     //             console.log(res.body)
//     //             done();
//     //         });
//     // })
//     // it("should can not insert new riwayat with mahasiswa value not found in table mahasiswa", (done) => {
//     //     chai.request(server)
//     //         .post('/api/riwayat')
//     //         .set('authorization', `Bearer ${token}`)
//     //         .send({
//     //             mahasiswa: '123',
//     //             alamat_asal: 'Sabang',
//     //             alamat_tujuan: 'Marauke',
//     //             transportasi: 'Kerta Api',
//     //             perlindungan: 'Masker',
//     //             kegiatan_perjalanan: 'Duduk manis'
//     //         })
//     //         .end((err, res) => {
//     //             res.should.have.status(422);
//     //             console.log(res.body)
//     //             done();
//     //         });
//     // })
//     // it("should update riwayat by id", (done) => {
//     //     chai.request(server)
//     //         .put('/api/riwayat/' + idRiwayat)
//     //         .set('authorization', `Bearer ${token}`)
//     //         .send({
//     //             mahasiswa: '5ebba459124ad72ec828b824',
//     //             alamat_asal: 'Sabang',
//     //             alamat_tujuan: 'Marauke',
//     //             transportasi: 'Kapal Terbang',
//     //             perlindungan: 'Masker',
//     //             kegiatan_perjalanan: 'Tidur'
//     //         })
//     //         .end((err, res) => {
//     //             expect(err).to.be.null;
//     //             res.should.have.status(200);
//     //             res.body.should.have.property('message').include(idRiwayat);
//     //             res.body.should.have.property('data');
//     //             res.body.data.should.be.a('object');
//     //             res.body.data.should.have.property('_id');
//     //             res.body.data._id.should.equal(idRiwayat);
//     //             res.body.data.should.have.property('mahasiswa');
//     //             res.body.data.should.have.property('alamat_asal');
//     //             res.body.data.should.have.property('alamat_tujuan');
//     //             res.body.data.should.have.property('transportasi');
//     //             res.body.data.should.have.property('perlindungan');
//     //             res.body.data.should.have.property('kegiatan_perjalanan');
//     //             console.log(res.body);
//     //             done();
//     //         });
//     // })
//     it("should delete riwayat by id", (done) => {
//         chai.request(server)
//             .delete('/api/riwayat/' + idRiwayat)
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 res.body.should.have.property('message').include(idRiwayat);
//                 res.body.should.have.property('data');
//                 res.body.data.should.be.a('object');
//                 res.body.data.should.have.property('_id');
//                 res.body.data._id.should.equal(idRiwayat);
//                 console.log(res.body);
//                 done();
//             });
//     })
//     it("should delete riwayat", (done) => {
//         chai.request(server)
//             .delete('/api/riwayat')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 res.body.should.have.property('message').include('Semua');
//                 res.body.should.have.property('data');
//                 res.body.data.should.be.a('object');
//                 console.log(res.body);
//                 done();
//             });
//     })
// });