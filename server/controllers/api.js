const { logger } = require('./../utils/logger');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { google } = require('googleapis');
const { urlGoogle } = require('./../utils/google-utils');

const TOKEN_PATH = path.join(__dirname, '..', 'google-credentials', 'token.json');
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

exports.index = (req, res) => {
  logger.info('api request received');
  console.log('req', req.body.token);
  const filePath = path.join(__dirname, '..', 'google-credentials', 'credentials.json');
  fs.readFile(filePath, (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);

    // Authorize a client with credentials, then call the Google Sheets API.
    const credentials = JSON.parse(content);
    console.log('credentials', credentials);
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, 'http://localhost:3000/loggedin');

    oAuth2Client.setCredentials(req.body.token);
    console.log('oAuth2Client', oAuth2Client);
    listMajors(oAuth2Client, res);
  });

};

exports.getGoogleLoginUrl = (req, res) => {
  console.log('getGoogleLoginUrl');
  res.send(JSON.stringify({ url: urlGoogle() }));
};

exports.getGoogleTokenAfterLogin = (req, res) => {
  const filePath = path.join(__dirname, '..', 'google-credentials', 'credentials.json');
  fs.readFile(filePath, (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);

    // Authorize a client with credentials, then call the Google Sheets API.
    const credentials = JSON.parse(content);
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, 'http://localhost:3000/loggedin');

    oAuth2Client.getToken(req.body.code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      res.send(JSON.stringify({ token: token }));
    });
  });
};

function getNewToken(oAuth2Client, code, callback) {
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      callback(oAuth2Client);
    });
  // });
}

function listMajors(auth, apiRes) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
    range: 'Class Data!A2:E',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    apiRes.send(JSON.stringify({ success: true, rows: rows }));
    if (rows.length) {
      console.log('Name, Major:');
      // Print columns A and E, which correspond to indices 0 and 4.
      rows.map((row) => {
        console.log(`${row[0]}, ${row[4]}`);
      });
    } else {
      console.log('No data found.');
    }
  });
}
