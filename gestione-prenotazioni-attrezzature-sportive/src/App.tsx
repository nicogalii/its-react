import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home/Home";

import "./App.css";
import Login from "./routes/Login/Login";
import EquipmentBooked from "./routes/EquipmentBooked/EquipmentBooked";
import Navbar from "./component/Navbar/Navbar";
import Register from "./routes/Register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipment-booked" element={<EquipmentBooked />} />
        <Route path="*" element={<EquipmentBooked />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/" element={<onEquipment />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
