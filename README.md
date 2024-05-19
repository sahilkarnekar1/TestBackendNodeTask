# Test Backend Node Task

This project provides a backend service for managing patient registrations and hospital details, deployed on Vercel.

## Backend Deployed URL
[https://test-backend-node-task.vercel.app/](https://test-backend-node-task.vercel.app/)

## List of API Endpoints

1. **Register Patient**: [https://test-backend-node-task.vercel.app/api/patients/register](https://test-backend-node-task.vercel.app/api/patients/register)
2. **Hospital Details**: [https://test-backend-node-task.vercel.app/api/hospitals/details](https://test-backend-node-task.vercel.app/api/hospitals/details)

## Postman Collection Access URL
[Postman Collection](https://t13333.postman.co/workspace/T1~5c7fdae5-f642-48f1-9635-bbc135710593/collection/28291591-8f1276d3-0790-4eb3-b6db-1d9e068c413c?action=share&creator=28291591)

## Libraries/Frameworks Used

- **body-parser**: Middleware to parse incoming request bodies in a middleware before handlers, available under the `req.body` property.
- **dotenv**: Loads environment variables from a `.env` file into `process.env` to manage environment-specific configurations.
- **express**: A minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications.
- **express-validator**: A set of express.js middlewares that wraps `validator.js` to validate and sanitize request inputs.
- **mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, providing a straightforward, schema-based solution to model application data.
- **multer**: A middleware for handling `multipart/form-data`, primarily used for uploading files.

## How to Execute in Local Environment

1. Clone the GitHub repository:
   ```bash
   git clone https://github.com/sahilkarnekar1/TestBackendNodeTask.git
Navigate to the root directory and install dependencies: 
cd TestBackendNodeTask
npm install

Create a .env file in the root directory.
Configure MongoDB database URL and port in the .env file:
MONGODB_URL=your_database_url_or_local_mongodb_environment_url (Compass or Atlas)
PORT=5000

Seed the database with initial data:
node scripts/seed.js
This script will add the hospitals and psychiatrists data to the database.
Start the server:
node index.js

Test APIs:
Register Patient API: POST http://localhost:5000/api/patients/register
Provide form data:
name: your name
address: aaaaa
email: aaaa@aa.aaa
phone: +3654635454163
password: ghfhbg42
photo: file type(Jpg/png/jpeg etc)
psychiatristId: your psychiatrist ID from the database (provided in Postman collections)

Notes
The Postman collection includes four requests: two for the production server and two for localhost testing.
To test the APIs locally, configure the project on your local machine and use the provided endpoints.

Feel free to reach out if you have any questions or need further assistance. 
Email : sahilkarnekar.sit.it@gmail.com


This README file should help users understand how to deploy, configure, and test your backend application. Ensure that the `.env` file contains accurate and secure database credentials, and keep your environment variables confidential.

