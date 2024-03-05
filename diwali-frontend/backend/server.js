const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors middleware
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Apply CORS middleware before mounting routes
app.use(cors({ origin: 'http://localhost:3000' }));

// Importing route modules
const fetchRoute = require('../backend/fetch');
const insertDataFromClientRoute = require('../backend/insertdatafromclient');
const updateDataFromClientRoute = require('../backend/updatedatafromclient');
const deletedataFromClientRoute = require('../backend/deletedatafromclient');

// Mounting routes
app.use('/', fetchRoute);
app.use('/', insertDataFromClientRoute);
app.use('/', updateDataFromClientRoute);
app.use('/', deletedataFromClientRoute);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});