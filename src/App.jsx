import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Signin from "./pages/Signin.jsx";
import Footer from "./components/Footer.jsx";

import { Route, Routes } from "react-router-dom";
import Community from "./pages/Community.jsx";

const App = () => {
  return (
    <div className=" bg-(--color-background) w-full h-full text-(--color-text)">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Community" element={<Community />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
