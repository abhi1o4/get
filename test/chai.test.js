const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index.js'); // Update the path accordingly
const expect = chai.expect;

chai.use(chaiHttp);

describe('Subscribers API', () => {
  // Test for the GET /subscribers endpoint
  describe('GET /subscribers', () => {
    it('should get a list of all subscribers', (done) => {
      chai.request(app)
        .get('/subscribers')
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
  // Test for the GET /subscribers/names endpoint
  describe('GET /subscribers/names', () => {
    it('should get names and subscribed channels for each subscriber', (done) => {
      chai.request(app)
        .get('/subscribers/names')
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          // Add more assertions as needed
          done();
        });
    });
  });

  // Test for the GET /subscribers/id endpoint
  describe('GET /subscribers/id', () => {
    it('should get subscriber information by ID', (done) => {
      const subscriberId = '64db4af567a805053c64bc9b'; // Replace with a valid subscriber ID
      chai.request(app)
        .get(`/subscribers/${subscriberId}`)
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('_id', subscriberId);
          // Add more assertions as needed
          done();
        });
    });
  });
});

 