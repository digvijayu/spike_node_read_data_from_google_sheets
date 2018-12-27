import test from 'ava';

const utils = require('./../../utils');

test('should return expected environment variable', t => {
  t.is(utils.getEnvironmentVariable(), 'test');
  process.env.NODE_ENV = '';
  t.is(utils.getEnvironmentVariable(), 'dev');
});

test('should return expected environment file name', t => {
  process.env.NODE_ENV = 'test';
  t.is(utils.getEnvironmentVariableFilePath(), '.env-test');
  process.env.NODE_ENV = 'dev';
  t.is(utils.getEnvironmentVariableFilePath(), '.env-dev');
  process.env.NODE_ENV = 'prod';
  t.is(utils.getEnvironmentVariableFilePath(), '.env-prod');
  process.env.NODE_ENV = 'doesNotExist';
  t.is(utils.getEnvironmentVariableFilePath(), null);
});
