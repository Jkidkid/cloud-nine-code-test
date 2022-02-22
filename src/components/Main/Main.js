import { Routes, Route } from "react-router-dom";
import Salons from "../Salons/Salons";
import Salon from "../Salon/Salon";

const Main = props => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Salons />} />
        <Route path="salons/:id" exact element={<Salon />} />
      </Routes>
    </div>
  );
};
export default Main;
