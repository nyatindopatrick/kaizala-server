const { User, Patient } = require("../models/user");

exports.register = (req, res) => {
  const { first_name, last_name, email, phone, lat, long } = req.body;
  if (!first_name || !last_name || !email || !phone || !lat || !long) {
    res.status(400).send("Please fill all fields!");
  }
  const newUser = new User({
    first_name,
    last_name,
    email,
    phone,
    lat,
    long,
  });

  newUser
    .save()
    .then((data) =>
      res.status(200).send(`${data.first_name} added successfully!`)
    )
    .catch((error) => console.log(error.stack));
};

exports.getUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
};

exports.savePatient = (req, res) => {
  const {
    phone,
    symptomps,
    diagnosis,
    prescription,
    prescriptionQuantity,
  } = req.body;
  const newPatient = new Patient({
    phone,
    symptomps,
    diagnosis,
    prescription,
    prescriptionQuantity,
  });
  newPatient
    .save()
    .then((data) => res.status(200).send("patient saved successfully!"))
    .catch((err) => console.log(err.message));
};


exports.getPatients = async(req, res)=>{
  const patients = await Patient.find({});
  res.status(200).json(patients);
}