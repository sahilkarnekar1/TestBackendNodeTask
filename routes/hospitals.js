const express = require('express');
const { getHospitalDetails } = require('../controllers/hospitals');
const router = express.Router();

router.post('/details', getHospitalDetails);

module.exports = router;
