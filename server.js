const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// import the users route

const usersRoutes = require('./routes/users');

// port
const PORT = 5000;

// use the bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// use the imported route
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('This is the first crud application');
});

// listening
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});