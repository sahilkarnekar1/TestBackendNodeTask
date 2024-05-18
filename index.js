const express = require('express');
const connectDB = require('./config/database');
const patientRoutes = require('./routes/patients');
const hospitalRoutes = require('./routes/hospitals');


const app = express();
require('dotenv').config();

connectDB();

app.use(express.json());
// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/patients', patientRoutes);
app.use('/api/hospitals', hospitalRoutes);

const port = process.env.PORT || 8000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
