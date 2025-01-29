// imports
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');

//setups
const app = express();
const PORT = 5000;

//database connection
connectDB();


//listener
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});