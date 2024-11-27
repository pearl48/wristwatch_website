
require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const Flutterwave = require('flutterwave-node-v3');
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Load the Flutterwave secret key from environment variables
const secretKey = process.env.FLUTTERWAVE_SECRET_KEY;
if (!secretKey) {
  throw new Error('Secret Key required');
}

const rave = new Flutterwave(""); //

// Serve static files (HTML, CSS, JavaScript) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a simple route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define port number to listen on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


