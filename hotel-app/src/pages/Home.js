import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to OYO Hotel Booking</h1>
      <Link to="/hotels">View Hotels</Link>
    </div>
  );
}

export default Home;
