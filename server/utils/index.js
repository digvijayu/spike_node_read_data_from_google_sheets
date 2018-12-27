const CONST = require('./../constants');

const getEnvironmentVariable = () =>
  process.env.NODE_ENV || CONST.DEFAULT_NODE_ENV;
exports.getEnvironmentVariable = getEnvironmentVariable;

exports.getEnvironmentVariableFilePath = () => {
  const envVar = getEnvironmentVariable();
  switch (envVar) {
    case 'dev':
      return '.env-dev';
    case 'test':
      return '.env-test';
    case 'prod':
      return '.env-prod';
    default:
      return null;
  }
};
