const express = require('express');

// router
const router = express.Router();

// declare users array
const users = [{
        firstName: "John",
        lastName: "Doe",
        age: 23
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 25
    }
]

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
    users.push(user);

    res.send(`User with the name ${user.firstName} has been added to the database`);
});


module.exports = router;