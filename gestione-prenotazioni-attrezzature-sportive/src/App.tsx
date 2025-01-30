import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home/Home";

import "./App.css";
import Login from "./routes/Auth/Login";
import Navbar from "./component/Navbar/Navbar";
import Register from "./routes/Auth/Register";
import EquipmentBooked from "./routes/EquipmentBooked/EquipmentBooked";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/equipment-booked" element={<EquipmentBooked />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
