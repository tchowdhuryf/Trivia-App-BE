// imports
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');

//setups
const app = express();
const PORT = 5000;

//database connection
connectDB();

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//home route
app.get('/', (req, res) => {
    res.send('Trivia App API');
});


//listener
app.listen(PORT, () => {
    console.log(`Trivia app running at http://localhost:${PORT}`);
});