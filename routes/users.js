const router = require('express').Router();
const {
  register,
  getUsers,
  savePatient,
  getPatients,
  registerPatient,
  getHospitals,
  getPhone,
} = require('../controllers/userController');

router.post('/register', register);

router.get('/', getUsers);

router.post('/patient', savePatient);

router.get('/patients', getPatients);

router.get('/allpatients', getHospitals);

router.post('/hospiital', registerPatient);

router.get('/patients/:phone', getPhone);

module.exports = router;
