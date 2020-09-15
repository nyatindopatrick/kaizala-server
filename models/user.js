const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  lat: { type: String, required: true },
  long: { type: String, required: true },
});

module.exports = model('User', userSchema);
