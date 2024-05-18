const mongoose = require('mongoose');

const psychiatristSchema = new mongoose.Schema({
  name: String,
  hospital: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' },
});

module.exports = mongoose.model('Psychiatrist', psychiatristSchema);
