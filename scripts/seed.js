const mongoose = require('mongoose');
const connectDB = require('../config/database');
const Hospital = require('../models/hospital');
const Psychiatrist = require('../models/psychiatrist');
const Patient = require('../models/patient');

const seedData = async () => {
  await connectDB();

  const hospitals = await Hospital.insertMany([
    { name: 'Apollo Hospital' },
    { name: 'Jawaharlal Nehru Medical College and Hospital' },
    { name: 'Indira Gandhi Institute of Medical Science' },
    { name: 'AIIMS All India Institute of Medical Science' },
  ]);

  const psychiatrists = [];
  hospitals.forEach((hospital) => {
    for (let i = 0; i < 5; i++) {
      psychiatrists.push({ name: `Psychiatrist ${i + 1}`, hospital: hospital._id });
    }
  });

  await Psychiatrist.insertMany(psychiatrists);

  console.log('Database seeded');
  process.exit();
};

seedData();
