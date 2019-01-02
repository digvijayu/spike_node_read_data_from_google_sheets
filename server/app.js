const express = require('express');
const expressStatusMonitor = require('express-status-monitor');

const CONST = require('./constants');
const homeController = require('./controllers/home');
const apiController = require('./controllers/api');
const { logger } = require('./utils/logger');
const utils = require('./utils');

// get env config
require('dotenv').config({ path: utils.getEnvironmentVariableFilePath() });

const app = express();
const port = process.env.NODE_PORT;

// Declare static folder
app.use(
  expressStatusMonitor({
    healthChecks: [
      {
        protocol: 'http',
        host: 'localhost',
        path: '',
        port: port
      },
      {
        protocol: 'http',
        host: 'localhost',
        path: '/random',
        port: port
      }
    ]
  })
);

app.use(express.static(CONST.PUBLIC_FOLDER_NAME));
app.get('/', homeController.index);
app.get('/page', homeController.index);
app.post('/api', apiController.index);
app.get('/api/login-url', apiController.getGoogleLoginUrl);

app.listen(port, () => logger.info(`Server listening on port ${port}!`));

module.exports = app;
