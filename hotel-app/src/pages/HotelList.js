import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/hotels")
      .then(response => setHotels(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Available Hotels</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            {hotel.name} - {hotel.location} - ${hotel.price}
            <Link to={`/booking/${hotel.id}`}>Book Now</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelList;
