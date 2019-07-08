var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with Bonjour', function(done) {
 //navigate to root and check the the response is "Bonjour"
 request(app).get('/').expect('Bonjour', done);
 });
});