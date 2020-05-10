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

let idStatus;
describe("Status Endpoint dengan Autentikasi dan Id", () => {
    it("should get all status", (done) => {
        chai.request(server)
            .get('/api/status')
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(200);
                res.body.should.be.a('object');
                console.log(res.body)
                idStatus = res.body['data'][1]._id;
                // Harusnya 0 / 1 untuk test
                done();
            });
    })
    it("should get status by id", (done) => {
        chai.request(server)
            .get('/api/status/' + idStatus)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(200);
                res.body.should.have.property('_id');
                res.body._id.should.equal(idStatus);
                console.log(res.body)
                done();
            });
    })
    // it("should insert new status", (done) => {
    //     chai.request(server)
    //         .post('/api/status')
    //         .set('authorization', `Bearer ${token}`)
    //         .send({
    //             status: 'OTR',
    //             deskripsi: 'On The Road'
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
    it("should update status by id", (done) => {
        chai.request(server)
            .put('/api/status/' + idStatus)
            .set('authorization', `Bearer ${token}`)
            .send({
                status: 'OTR',
                deskripsi: 'On The Road'
            })
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(200);
                res.body.should.have.property('message').include(idStatus);
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.data.should.have.property('_id');
                res.body.data._id.should.equal(idStatus);
                res.body.data.should.have.property('status');
                res.body.data.should.have.property('deskripsi');
                console.log(res.body);
                done();
            });
    })
    it("should delete status by id", (done) => {
        chai.request(server)
            .delete('/api/status/' + idStatus)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(200);
                res.body.should.have.property('message').include(idStatus);
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.data.should.have.property('_id');
                res.body.data._id.should.equal(idStatus);
                console.log(res.body);
                done();
            });
    })
    // it("should delete status", (done) => {
    //     chai.request(server)
    //         .delete('/api/status')
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
