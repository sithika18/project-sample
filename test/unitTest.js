process.env.ENV_SERVER = 'local'
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
var nock = require("nock")
const svcAPI = require("./serverEntry-unitTest").svcAPI
const hostName = "http://localhost:8080"
const should = chai.should();



// const mongoose = require("mongoose");
// var User = require("../Model/user");
// var service = require("../Controller/app");
// var sinon = require("sinon");

// describe("--------------- LOGIN  :  Success Case ---------------", function () {
//     it("LOGIN SUCCESS CALLBACK", function () {
//         let req = {
//             body: {
//                 emailID: "abc@gmail.com",
//                 password: "passwordHash"
//             }
//         };
//         let res = {
//             send: function () { },
//             status: function () {
//                 return { send: () => { } };
//             }
//         };
//         var testMock = sinon.mock(User);
//         var getPartyQueryMock = testMock
//             .expects("findOne")
//             .withArgs({ emailID: req.body.emailID })
//             .yields(null, {
//                 secret: "123",
//                 emailID: req.body.emailID,
//                 password: "456",
//                 roles: "admin",
//                 userId: "100"
//             });

//         service.login(req, res);
//         sinon.assert.calledWith(getPartyQueryMock);
//         testMock.restore();
//     });
// });


describe('--------------- GET ALL USERS ---------------', function () {
    before((done) => {
        nock(hostName)
            .get("/users")
            .reply(200, { success: true, message: 'this is mock response sample' });
        done();
    });
    after(function (done) {
        console.log('--------------- COMPLETED ---------------');
        done();
    });
    it('GET ALL USERS', (done) => {
        chai.request(svcAPI)
            .get("/users")
            .set('Content-Type', 'application/json')
            .end(function (err, res) {
                if (err) {
                    // err.should.have.status(500);
                    console.log("error>>>>>>>>>>>>>>>>")
                }
                else {
                    console.log("success>>>>>>>>>>>>>>>>>")
                    res.should.have.status(200);
                    res.should.be.json;
                }
                done();
            });
    })
});

describe('--------------- GET ALL USERS FOR MANAGER ---------------', function () {
    before((done) => {
        nock(hostName)
            .get("/manager/users/:id")
            .reply(200, { success: true, message: 'this is mock response sample' });
        done();
    });
    after(function (done) {
        console.log('--------------- COMPLETED ---------------');
        done();
    });
    it('GET ALL USERS FOR MANAGER', (done) => {
        chai.request(svcAPI)
            .get("/manager/users/:id")
            .set('Content-Type', 'application/json')
            .end(function (err, res) {
                if (err) {
                    // err.should.have.status(500);
                    console.log("error>>>>>>>>>>>>>>>>")
                }
                else {
                    console.log("success>>>>>>>>>>>>>>>>>")
                    res.should.have.status(200);
                    res.should.be.json;
                }
                done();
            });
    })
});
// describe('--------------- LOGIN ---------------', function () {
//     before((done) => {
//         nock(hostName)
//             .post("/login")
//             .reply(200, { success: true, message: 'this is mock response sample' });
//         done();
//     });
//     after(function (done) {
//         console.log('--------------- COMPLETED ---------------');
//         done();
//     });
//     it(' LOGIN', (done) => {
//         chai.request(svcAPI)
//             .post("/login")
//             .set('Content-Type', 'application/json')
//             .send({ "email": "kr@gmail.com", "password": "password", "secret": "dfadfsda" })
//             .end(function (err, res) {
//                 if (err) {
//                     // err.should.have.status(500);
//                     console.log("error>>>>>>>>>>>>>>>>")
//                 }
//                 else {
//                     console.log("success>>>>>>>>>>>>>>>>>")
//                     res.should.have.status(200);
//                     res.should.be.json;
//                 }
//                 done();
//             });
//     })
// });

describe('---------------DELETE ---------------', function () {
    before((done) => {
        nock(hostName)
            .delete("/delete/3601008092018")
            .reply(200, { success: true, message: 'this is mock response sample' });
        done();
    });
    after(function (done) {
        console.log('--------------- COMPLETED ---------------');
        done();
    });
    it(' DELETE', (done) => {
        chai.request(svcAPI)
            .delete("/delete/3601008092018")
            .set('Content-Type', 'application/json')
            .end(function (err, res) {
                if (err) {
                    // err.should.have.status(500);
                    console.log("error>>>>>>>>>>>>>>>>")
                }
                else {
                    console.log("success>>>>>>>>>>>>>>>>>")
                    res.should.have.status(200);
                    res.should.be.json;
                }
                done();
            });
    })
});

describe('---------------UPDATE DETAILS  ---------------', function () {
    before((done) => {
        nock(hostName)
            .put("/update/3601008092018")
            .reply(200, { success: true, message: 'this is mock response sample' });
        done();
    });
    after(function (done) {
        console.log('--------------- COMPLETED ---------------');
        done();
    });
    it(' UPDATE DETAILS', (done) => {
        chai.request(svcAPI)
            .put("/update/3601008092018")
            .set('Content-Type', 'application/json')
            .end(function (err, res) {
                if (err) {
                    console.log("error>>>>>>>>>>>>>>>>")
                    err.should.have.status(200);
                }
                else {
                    console.log("success>>>>>>>>>>>>>>>>>")
                    res.should.have.status(200);
                    // res.should.be.json;
                }
                done();
            });
    })
});

describe('---------------UPDATE DETAILS BY MANAGER ---------------', function () {
    before((done) => {
        nock(hostName)
            .put("/manager/update/3601008092018")
            .reply(200, { success: true, message: 'this is mock response sample' });
        done();
    });
    after(function (done) {
        console.log('--------------- COMPLETED ---------------');
        done();
    });
    it(' UPDATE DETAILS BY MANAGER', (done) => {
        chai.request(svcAPI)
            .put("/manager/update/3601008092018")
            .set('Content-Type', 'application/json')
            .end(function (err, res) {
                if (err) {
                    console.log("error>>>>>>>>>>>>>>>>")
                    err.should.have.status(200);
                }
                else {
                    console.log("success>>>>>>>>>>>>>>>>>")
                    res.should.have.status(200);
                    // res.should.be.json;
                }
                done();
            });
    })
});

describe('---------------USER REGISTRATION ---------------', function () {
    before((done) => {
        nock(hostName)
            .post("/registration")
            .reply(200, {
                success: true, data: {
                    name: "Joel",
                    emailID: "joel@gmail.com",
                    phoneNo: "9009009933",
                    dob: "18/10/1990",
                    gender: "female",
                    password: "password"
                }
            });
        done();
    });
    after(function (done) {
        console.log('--------------- COMPLETED ---------------');
        done();
    });
    it(' USER REGISTRATION', (done) => {
        chai.request(svcAPI)
            .post("/registration")
            .set('Content-Type', 'application/json')
            .send()
            .end(function (err, res) {
                if (err) {
                    // err.should.have.status(500);
                    console.log("error>>>>>>>>>>>>>>>>")
                }
                else {
                    console.log("success>>>>>>>>>>>>>>>>>")
                    res.should.have.status(200);
                    res.should.be.json;
                }
                done();
            });
    })
});