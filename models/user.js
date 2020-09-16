const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  lat: { type: String, required: true },
  long: { type: String, required: true },
});


const patient = new Schema({
  phone: { type: Number, required: true },
  symptomps: { type: Array, required: true },
  diagnosis:{ type: String, required: true },
  prescription: { type: String, required: true },
  prescriptionQuantity: { type: Number, required: true }
})

const User = model('User', userSchema);
const Patient = model('Patient', patient)

module.exports = {User, Patient};
