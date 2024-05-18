const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  phone: String,
  password: String,
  photo: Buffer,
  psychiatrist: { type: mongoose.Schema.Types.ObjectId, ref: 'Psychiatrist' },
});

module.exports = mongoose.model('Patient', patientSchema);
