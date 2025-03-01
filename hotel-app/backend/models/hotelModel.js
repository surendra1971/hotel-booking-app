const pool = require("../config/db");

const createHotelsTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS hotels (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      location VARCHAR(100),
      price DECIMAL(10,2),
      available_rooms INT
    )
  `);
};

createHotelsTable();

module.exports = pool;
