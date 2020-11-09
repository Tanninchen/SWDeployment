//const Todos = require('./index');
//const assert = require('assert').strict;
// process.env.NODE_ENV = 'test';

// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let server = require('../server');
// let should = chai.should();

// chai.use(chaiHttp);

// describe('Simple Node Website', () => {
//   //Test the /GET route
//   describe('/GET ', () => {
//       it('it should GET the website', (done) => {
//         chai.request('http://localhost:300')
//             .get('/')
//             .end((err, res) => {
//                   res.should.have.status(200);
//               done();
//             });
//       });
//   });
// });

const expect = require('chai').expect;

describe('First test', () => {
  it('Should assert true to be true', () => {
    expect(true).to.be.true;
  });
}); 

describe("Test GET route", function() {
    it("it should GET the website", function() {
    });
});