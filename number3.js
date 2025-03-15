// Import the Express library
const express = require('express');

// Initialize the Express application
const app = express();

// Define the /test route
app.get('/', (req, res) => {
  res.json({ message: 'Express is working! Deon Niel Jaca' });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
