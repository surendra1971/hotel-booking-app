import React from "react";
import { useParams } from "react-router-dom";

function Booking() {
  const { id } = useParams();
  return (
    <div>
      <h2>Booking Page for Hotel {id}</h2>
      <button>Confirm Booking</button>
    </div>
  );
}

export default Booking;
