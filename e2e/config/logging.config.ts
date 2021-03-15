const log4js = require('log4js');
log4js.configure('./e2e/config/log4js.json');
exports.defaults = log4js.getLogger('default');