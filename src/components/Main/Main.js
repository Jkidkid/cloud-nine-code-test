import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Booking from "../Booking/Booking";

export default function Main(props) {
  return (
    <div className="mainContent">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}
