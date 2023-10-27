const router = require('express').Router();
const {
  createUser,
  getAllUsers,
  getSingleUser,
  assignClient,
  createClient,
  deleteClient,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').get(getAllUsers).post(createUser).put(authMiddleware, assignClient);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/clients/:clientId').post(createClient).delete(authMiddleware, deleteClient);

module.exports = router;
