var assert = require('assert');
var request = require('supertest');
var app = require('../fixtures/fixture-app.js');

exports.it_should_list_lists = function(done){
  request(app)
  .get('/lists')
  .set('x-sp-session', '1a')
  .expect(200)
  .end(function(err, res){
    assert.ok(!err);
    assert.ok(res.body.length > 0);
    return done();
  });
};

exports.it_should_create_lists = function(done){
  request(app)
  .post('/lists')
  .send({title : 'foo', description : 'bar'})
  .set('x-sp-session', '1a')
  .expect(200)
  .end(function(err, res){
    assert.ok(!err);
    assert.ok(res.body);
    return done();
  });
};

exports.it_should_delete_lists = function(done){
  request(app)
  .del('/lists/1a')
  .set('x-sp-session', '1a')
  .expect(200)
  .end(function(err, res){
    assert.ok(!err);
    assert.ok(res.body);
    return done();
  });
};
