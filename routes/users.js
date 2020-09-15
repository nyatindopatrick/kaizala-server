const router = require('express').Router();
const { register, getUsers } = require('../controllers/userController');

router.post('/register', register);

router.get('/', getUsers);

module.exports = router;
