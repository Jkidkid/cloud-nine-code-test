import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Salons from "../Salons/Salons";
import Salon from "../Salon/Salon";

const Main = props => {
  return (
    <div className="main">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/salons" element={<Salons />} />
        <Route path="/salon" element={<Salon />} />
      </Routes>
    </div>
  );
};
export default Main;
