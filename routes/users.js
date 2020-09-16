const router = require('express').Router();
const { register, getUsers, savePatient, getPatients } = require('../controllers/userController');

router.post('/register', register);

router.get('/', getUsers);

router.post('/patient', savePatient);

router.get('/patients', getPatients)

module.exports = router;
