// imports
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');

//route imports
const triviaRoutes = require('./routes/triviaRoutes.js');

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

//api routes
app.use('/api/trivia', triviaRoutes);

//catch all route
app.get('*', (req, res) => {
    res.send('404: Page not found');
});

//listener
app.listen(PORT, () => {
    console.log(`Trivia app running at http://localhost:${PORT}`);
});