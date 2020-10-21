const express = require('express');

// unique id
const { v4: uuidv4 } = require('uuid');


// router
const router = express.Router();

// declare users array
const users = [];

// ROUTES

// GET
router.get('/', (req, res) => {
    res.send(users);
});

// POST

router.post('/', (req, res) => {

    // declare user
    const user = req.body;

    // adding user to the users array
    users.push({...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} has been added to the database`);
});

// get specific user
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

// delete user
router.delete('/:id', (req, res) => {

    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
    res.send(`User wit the id ${id} removed from the database`);
});

// update user details
router.patch('/:id', (req, res) => {
    // get user id
    const { id } = req.params;

    const { firstName, lastName, age } = req.body;

    // find the users
    const user = users.find((user) => user.id === id);

    if (firstName) {
        user.firstName = firstName;
    }

    if (lastName) {
        user.lastName = lastName;
    }

    if (age) {
        user.age = age;
    }
    res.send(`User with id ${id} updated`);

});


module.exports = router;