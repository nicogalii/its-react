import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home/Home";

import "./App.css";
import Login from "./routes/Login/Login";
import Navbar from "./component/Navbar/Navbar";
import Register from "./routes/Register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
