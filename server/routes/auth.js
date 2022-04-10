const logger = require('../middlewares/logger');
const authCtrl = require('../controllers/auth');

logger.info('Auth Router called');

module.exports = {
  signup: authCtrl.signup,
  signin: authCtrl.signin,
  // signout: authCtrl.signout,
};
