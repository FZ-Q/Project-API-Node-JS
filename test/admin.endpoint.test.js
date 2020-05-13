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
//     // it("should get admin by id", (done) => {
//     //     chai.request(server)
//     //         .get('/api/admin/' + idAdmin)
//     //         .set('authorization', `Bearer ${token}`)
//     //         .end((err, res) => {
//     //             expect(err).to.be.null;
//     //             res.should.have.status(200);
//     //             res.body.should.have.property('_id');
//     //             res.body._id.should.equal(idAdmin);
//     //             console.log(res.body)
//     //             done();
//     //         });
//     // })
//     // it("should insert new admin", (done) => {
//     //     chai.request(server)
//     //         .post('/api/admin')
//     //         .set('authorization', `Bearer ${token}`)
//     //         .send({
//     //             email: 'newaddemon@gmail.com',
//     //             password: 'admin12'
//     //         })
//     //         .end((err, res) => {
//     //             expect(err).to.be.null;
//     //             res.should.have.status(200);
//     //             res.body.should.have.property('message').include('ditambahkan');
//     //             res.body.should.have.property('data');
//     //             res.body.data.should.have.property('email');
//     //             res.body.data.should.have.property('password');
//     //             expect(res.body.data.password).to.have.lengthOf.above(6);
//     //             console.log(res.body)
//     //             done();
//     //         });
//     // })
//     it("should can not update admin by id if password less than 6 characters", (done) => {
//         chai.request(server)
//             .put('/api/admin/' + idAdmin)
//             .set('authorization', `Bearer ${token}`)
//             .send({
//                 email: 'newuser2@gmail.com',
//                 password: 'user',
//             })
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(422);
//                 console.log(res.body);
//                 done();
//             });
//     })
//     it("should delete admin by id", (done) => {
//         chai.request(server)
//             .delete('/api/admin/' + idAdmin)
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 res.body.should.have.property('message').include(idAdmin);
//                 res.body.should.have.property('data');
//                 res.body.data.should.be.a('object');
//                 res.body.data.should.have.property('_id');
//                 res.body.data._id.should.equal(idAdmin);
//                 console.log(res.body);
//                 done();
//             });
//     })
//     // it("should not delete admin with wrong url", (done) => {
//     //     chai.request(server)
//     //         .delete('/api/admin-delete')
//     //         .set('authorization', `Bearer ${token}`)
//     //         .end((err, res) => {
//     //             res.should.have.status(404);
//     //             console.log(res.body);
//     //             done();
//     //         });
//     // })
// });