const pool = require("../models/hotelModel");

const getHotels = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM hotels");
    res.json(result.rows);
  } catch (error) {
    res.status(500).send("Error fetching hotels");
  }
};

const addHotel = async (req, res) => {
  const { name, location, price, available_rooms } = req.body;
  try {
    await pool.query(
      "INSERT INTO hotels (name, location, price, available_rooms) VALUES ($1, $2, $3, $4)",
      [name, location, price, available_rooms]
    );
    res.send("Hotel added successfully!");
  } catch (error) {
    res.status(500).send("Error adding hotel");
  }
};

module.exports = { getHotels, addHotel };
