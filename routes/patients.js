const express = require('express');
const multer = require('multer');
const { registerPatient } = require('../controllers/patients');
const router = express.Router();
const { body } = require('express-validator');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/register', upload.single('photo'),[
    body('name').notEmpty().withMessage('Name is required'),
    body('address')
    .notEmpty().withMessage('Address is required')
    .bail() // Stop validation chain if address is empty
    .isLength({ min: 10 }).withMessage('Address should be at least 10 characters'),
    body('email')
      .notEmpty().withMessage('Email is required')
      .bail()
      .isEmail().withMessage('Email should be a valid email address'),
      body('phone')
      .optional({ checkFalsy: true }) // Makes phone optional, and checkFalsy allows empty strings
      .isLength({ min: 10 }).withMessage('Phone should be at least 10 characters')
      .bail()
      .matches(/^\+[1-9]\d{1,14}$/).withMessage('Phone number should Numbers only and include the country code (e.g., +91826565554)'),
      body('password')
      .notEmpty().withMessage('Password is required')
      .bail()
      .isLength({ min: 8, max: 15 }).withMessage('Password must be between 8 and 15 characters')
      
      .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
      .bail()
      .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
      .bail()
      .matches(/\d/).withMessage('Password must contain at least one number'),
    body('psychiatristId').notEmpty().withMessage('Psychiatrist ID is required'),
    body('photo').custom((value, { req }) => {
      if (!req.file) {
        throw new Error('Photo is required');
      }
      return true;
    })
  ],  registerPatient);

module.exports = router;
