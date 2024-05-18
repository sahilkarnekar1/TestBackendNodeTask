const Patient = require('../models/patient');
const Psychiatrist = require('../models/psychiatrist');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const registerPatient = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Concatenate all error messages into a single string
    const errorMessages = errors.array().map(err => err.msg).join(', ');
    return res.status(400).json({ error: errorMessages });
  }
  try {
    const { name, address, email, phone, password, psychiatristId } = req.body;
    const photo = req.file.buffer;

    const psyIdvalid = Psychiatrist.find({ _id: psychiatristId });
    if (!mongoose.Types.ObjectId.isValid(psychiatristId)) {
      return res.status(400).json({ error: 'Invalid psychiatrist ID' });
    }
    if ((await psyIdvalid).length === 0) {
      return res.status(404).json({ error: 'Psy not fount' });
    }

    const newPatient = new Patient({
      name,
      address,
      email,
      phone,
      password,
      photo,
      psychiatrist: psychiatristId,
    });

    await newPatient.save();
    res.status(201).json({ message: 'Patient registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { registerPatient };
