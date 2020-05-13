// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// var expect = chai.expect;

// // Configure chai
// chai.use(chaiHttp);
// chai.should();

// let token;
// describe("Login", () => {
//     it("should return token", (done) => {
//         chai.request(server)
//             .get('/auth/login')
//             .auth('admin@admin.com', 'admin')
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 token = res.body.token;
//                 done();
//             });
//     });
// })

// let idMahasiswa;
// describe("Mahasiswa Endpoint With Auth and Id", () => {
//     it("should get all mahasiswa", (done) => {
//         chai.request(server)
//             .get('/api/mahasiswa')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 res.body.should.be.a('array');
//                 console.log(res.body)
//                 idMahasiswa = res.body[0]._id;
//                 // Harusnya 0 / 1 untuk test
//                 done();
//             });
//     })
//     // it("should get mahasiswa by id", (done) => {
//     //     chai.request(server)
//     //         .get('/api/mahasiswa/' + idMahasiswa)
//     //         .end((err, res) => {
//     //             expect(err).to.be.null;
//     //             res.should.have.status(200);
//     //             res.body.should.have.property('_id');
//     //             res.body._id.should.equal(idMahasiswa);
//     //             console.log(res.body)
//     //             done();
//     //         });
//     // })
//     // it("should insert new mahasiswa", (done) => {
//     //     chai.request(server)
//     //         .post('/api/mahasiswa')
//     //         .send({
//     //             nama: 'Neko',
//     //             fakultas: 'Filkom',
//     //             usia: 19,
//     //             status: '5ebb9ccb862c342618ca1ac3'
//     //             // Sesuaikan id masing" value pada db masing"
//     //         })
//     //         .end((err, res) => {
//     //             expect(err).to.be.null;
//     //             res.should.have.status(200);
//     //             res.body.should.have.property('message').include('ditambahkan');
//     //             res.body.should.have.property('data');
//     //             res.body.data.should.have.property('nama');
//     //             res.body.data.should.have.property('fakultas');
//     //             res.body.data.should.have.property('usia');
//     //             res.body.data.should.have.property('status');
//     //             console.log(res.body)
//     //             done();
//     //         });
//     // })
//     // it("should update mahasiswa by id", (done) => {
//     //     chai.request(server)
//     //         .put('/api/mahasiswa/' + idMahasiswa)
//     //         .send({
//     //             nama: 'Neko',
//     //             usia: 19,
//     //             fakultas: 'Kehewanan',
//     //             status: '5ebba4d674cdf13224a38904'
//     //             // Sesuaikan id masing" value pada db masing"
//     //         })
//     //         .end((err, res) => {
//     //             expect(err).to.be.null;
//     //             res.should.have.status(200);
//     //             res.body.should.have.property('message').include(idMahasiswa);
//     //             res.body.should.have.property('data');
//     //             res.body.data.should.be.a('object');
//     //             res.body.data.should.have.property('_id');
//     //             res.body.data._id.should.equal(idMahasiswa);
//     //             res.body.data.should.have.property('nama');
//     //             res.body.data.should.have.property('fakultas');
//     //             res.body.data.should.have.property('usia');
//     //             res.body.data.should.have.property('status');
//     //             console.log(res.body);
//     //             done();
//     //         });
//     // })
//     it("should delete mahasiswa by id", (done) => {
//         chai.request(server)
//             .delete('/api/mahasiswa/' + idMahasiswa)
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 res.body.should.have.property('message').include(idMahasiswa);
//                 res.body.should.have.property('data');
//                 res.body.data.should.be.a('object');
//                 res.body.data.should.have.property('_id');
//                 res.body.data._id.should.equal(idMahasiswa);
//                 console.log(res.body);
//                 done();
//             });
//     })
//     it("should not delete all mahasiswa with without login and worng url", (done) => {
//         chai.request(server)
//             .delete('/api/mahasiswa-delete')
//             .end((err, res) => {
//                 res.should.have.status(404);
//                 console.log(res.body);
//                 done();
//             });
//     })
// });