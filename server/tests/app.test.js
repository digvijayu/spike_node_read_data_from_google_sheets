import test from 'ava';

const request = require('supertest');
const app = require('./../app.js');

test('should return expected status when home page is accessed', async t => {
  const response = await request(app).get('/');
  t.is(response.status, 200);
});

test('should return json response for api', async t => {
  const response = await request(app).get('/api');
  t.is(response.status, 200);
});
