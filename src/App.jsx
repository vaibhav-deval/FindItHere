import "./app.css";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./components/Footer.jsx";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className=" bg-(--color-background) w-full h-full text-(--color-text)">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
