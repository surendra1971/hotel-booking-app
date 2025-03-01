const express = require('express');
const router = express.Router();
const pool = require('../db'); // Ensure you have a database connection set up

// Get all hotels from 'hotelss' table
router.get('/hotels', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM hotelss'); // Use 'hotelss' table
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
