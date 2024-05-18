const Hospital = require('../models/hospital');
const Psychiatrist = require('../models/psychiatrist');
const Patient = require('../models/patient');
const mongoose = require('mongoose');


const getHospitalDetails = async (req, res) => {
  try {
    const { hospitalId } = req.body;

    if (!hospitalId) {
      return res.status(400).json({ error: 'Hospital ID is required' });
    }
    if (!mongoose.Types.ObjectId.isValid(hospitalId)) {
      return res.status(400).json({ error: 'Invalid hospital ID' });
    }
    // Find the hospital
    const hospital = await Hospital.find({ _id: hospitalId });
    if ((await hospital).length === 0) {
      return res.status(404).json({ error: 'Hospital not found' });
    }

    // Find psychiatrists belonging to the hospital
    const psychiatrists = await Psychiatrist.find({ hospital: hospitalId });
    const totalPsychiatristsCount = psychiatrists.length;

    // Initialize counters and arrays for patients and psychiatrist details
    let totalPatientCount = 0;
    const psychiatristDetails = [];
    const allPatients = [];

    // Loop through each psychiatrist to find their patients
    for (const psychiatrist of psychiatrists) {
      const patients = await Patient.find({ psychiatrist: psychiatrist._id });
      totalPatientCount += patients.length;

      psychiatristDetails.push({
        id: psychiatrist._id,
        name: psychiatrist.name,
        patientCount: patients.length,
      });

      patients.forEach(patient => {
        allPatients.push({
          _id: patient._id,
          name: patient.name,
          address: patient.address,
          email: patient.email,
          phone: patient.phone,
          password: patient.password,
          photo: "Buffer Data",
          psychiatrist: patient.psychiatrist,
        });
      });
    }

    // Construct the response
    res.json({
      hospitalName: hospital.name,
      totalPsychiatristsCount,
      totalPatientCount,
      psychiatristDetails,
      patients: allPatients,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getHospitalDetails };
