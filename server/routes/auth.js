const authCtrl = require('../controllers/auth');

module.exports = {
  signup: authCtrl.signup,
  signin: authCtrl.signin,
  signout: authCtrl.signout,
};
