import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";

function HotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("http://<your-ec2-public-ip>:5000/api/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((err) => console.error("Error fetching hotels:", err));
  }, []);

  return (
    <div>
      <h2>Available Hotels</h2>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default HotelList;
