const { logger } = require('./../utils/logger');
exports.index = (req, res) => {
  logger.info('api request received');
  res.send(JSON.stringify({ success: true }));
};
