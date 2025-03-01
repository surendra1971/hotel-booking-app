import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HotelList from "./pages/HotelList";
import Booking from "./pages/Booking";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
