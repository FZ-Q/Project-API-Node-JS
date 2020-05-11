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
//         .set('authorization', `Bearer ${token}`)
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 res.body.should.be.a('array');
//                 console.log(res.body)
//                 idMahasiswa = res.body[1]._id;
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
//     //             fakultas: '5eb0c4baa9d5fd18f1229f2d',
//     //             usia: 19,
//     //             status: '5eb0fdc26233a7511710ab37'
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
//     //             nama: 'Neko1',
//     //             fakultas: '5eb0c4baa9d5fd18f1229f2d',
//     //             usia: 19,
//     //             status: '5eb0fdc26233a7511710ab37'
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
//     // it("should delete mahasiswa by id", (done) => {
//     //     chai.request(server)
//     //         .delete('/api/mahasiswa/' + idMahasiswa)
//     //         .set('authorization', `Bearer ${token}`)
//     //         .end((err, res) => {
//     //             expect(err).to.be.null;
//     //             res.should.have.status(200);
//     //             res.body.should.have.property('message').include(idMahasiswa);
//     //             res.body.should.have.property('data');
//     //             res.body.data.should.be.a('object');
//     //             res.body.data.should.have.property('_id');
//     //             res.body.data._id.should.equal(idMahasiswa);
//     //             console.log(res.body);
//     //             done();
//     //         });
//     // })
//     // it("should delete mahasiswa", (done) => {
//     //     chai.request(server)
//     //         .delete('/api/mahasiswa')
//     //         .set('authorization', `Bearer ${token}`)
//     //         .end((err, res) => {
//     //             expect(err).to.be.null;
//     //             res.should.have.status(200);
//     //             res.body.should.have.property('message').include('Semua');
//     //             res.body.should.have.property('data');
//     //             res.body.data.should.be.a('object');
//     //             console.log(res.body);
//     //             done();
//     //         });
//     // })
// });