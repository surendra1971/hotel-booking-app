import React from "react";
import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  return (
    <div>
      <h3>{hotel.name}</h3>
      <p>{hotel.location}</p>
      <p>Price: ${hotel.pricePerNight} per night</p>
      <Link to={`/booking/${hotel.id}`}>Book Now</Link>
    </div>
  );
}

export default HotelCard;
