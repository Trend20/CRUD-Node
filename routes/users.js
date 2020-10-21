const express = require('express');

// router
const router = express.Router();

// ROUTES

// GET
router.get('/', (req, res) => {
    res.send('This is the get route');
});

module.exports = router;