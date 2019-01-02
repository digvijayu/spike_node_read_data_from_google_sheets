const { logger } = require('./../utils/logger');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { google } = require('googleapis');
const { urlGoogle } = require('./../utils/google-utils');

exports.index = (req, res) => {
  logger.info('api request received');
  res.send(JSON.stringify({ success: true }));
};

exports.getGoogleLoginUrl = (req, res) => {
  console.log('getGoogleLoginUrl');
  res.send(JSON.stringify({ url: urlGoogle() }));
};
