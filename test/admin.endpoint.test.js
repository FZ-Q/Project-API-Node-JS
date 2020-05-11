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

// let idAdmin;
// describe("Admin Endpoint With Auth and Id", () => {
//     it("should get all admin", (done) => {
//         chai.request(server)
//             .get('/api/admin')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 console.log(res.body)
//                 idAdmin = res.body['data'][1]._id;
//                 done();
//             });
//     })
//     it("should get admin by id", (done) => {
//         chai.request(server)
//             .get('/api/admin/' + idAdmin)
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 res.body.should.have.property('_id');
//                 res.body._id.should.equal(idAdmin);
//                 console.log(res.body)
//                 done();
//             });
//     })
//     // it("should insert new admin", (done) => {
//     //     chai.request(server)
//     //         .post('/api/admin')
//     //         .set('authorization', `Bearer ${token}`)
//     //         .send({
//     //             email: 'newadmin@gmail.com',
//     //             password: 'admin1'
//     //         })
//     //         .end((err, res) => {
//     //             expect(err).to.be.null;
//     //             res.should.have.status(200);
//     //             res.body.should.have.property('message').include('ditambahkan');
//     //             res.body.should.have.property('data');
//     //             res.body.data.should.have.property('email');
//     //             res.body.data.should.have.property('password');
//     //             console.log(res.body)
//     //             done();
//     //         });
//     // })
//     // it("should update admin by id", (done) => {
//     //     chai.request(server)
//     //         .put('/api/admin/' + idAdmin)
//     //         .set('authorization', `Bearer ${token}`)
//     //         .send({
//     //             email: 'newuser2@gmail.com',
//     //             password: 'user123',
//     //         })
//     //         .end((err, res) => {
//     //             expect(err).to.be.null;
//     //             res.should.have.status(200);
//     //             res.body.should.have.property('message').include(idAdmin);
//     //             res.body.should.have.property('data');
//     //             res.body.data.should.be.a('object');
//     //             res.body.data.should.have.property('_id');
//     //             res.body.data._id.should.equal(idAdmin);
//     //             res.body.data.should.have.property('email');
//     //             res.body.data.should.have.property('password');
//     //             console.log(res.body);
//     //             done();
//     //         });
//     // })
//     // it("should delete admin by id", (done) => {
//     //     chai.request(server)
//     //         .delete('/api/admin/' + idAdmin)
//     //         .set('authorization', `Bearer ${token}`)
//     //         .end((err, res) => {
//     //             expect(err).to.be.null;
//     //             res.should.have.status(200);
//     //             res.body.should.have.property('message').include(idAdmin);
//     //             res.body.should.have.property('data');
//     //             res.body.data.should.be.a('object');
//     //             res.body.data.should.have.property('_id');
//     //             res.body.data._id.should.equal(idAdmin);
//     //             console.log(res.body);
//     //             done();
//     //         });
//     // })
//     // it("should delete admin", (done) => {
//     //     chai.request(server)
//     //         .delete('/api/admin')
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