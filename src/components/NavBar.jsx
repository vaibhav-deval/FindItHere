import { NavLink } from "react-router-dom";
import LoginBtn from "./LoginBtn.jsx";
import { RiMenuLine } from "@remixicon/react";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState("right-[-100%]");
  return (
    <>
      <div className="flex flex-row-reverse lg:flex-row justify-between fixed top-0 w-full backdrop-blur-xs p-5  text-white">
        <NavLink to="/">
        <div className="font-bold md:text-3xl duration-300 transition-all cursor-pointer hover:text-shadow-[#24cfa6] hover:scale-110 text-shadow-xs rounded-xl  px-10  flex justify-center items-center">
          FindItHere
        </div>
        </NavLink>
        <div className="lg:hidden flex items-center text-md justify-between gap-5">
          <RiMenuLine
            size={30}
            onClick={() => {
              if (nav == "right-[-100%]") {
                setNav("right-0");
              } else {
                setNav("right-[-100%]");
              }
            }}
          />
        </div>
        <div
          className={`absolute w-[90%] text-xl  top-1   bg-(--color-primary) p-5  flex flex-col gap-5 justify-around lg:hidden transition-all  ${nav}`}
        >
          <NavLink
            className=""
            to="/"
            style={({ isActive }) =>
              isActive
                ? { color: "#24cfa6", textDecoration: "underline" }
                : { color: "white" }
            }
            onClick={() => setNav("right-[-100%]")}
          >
            Home
          </NavLink>
          <hr/>
          <NavLink
            className=" "
            to="/aboutUs"
            style={({ isActive }) =>
              isActive
                ? { color: "#24cfa6", textDecoration: "underline" }
                : { color: "white" }
            }
            onClick={() => setNav("right-[-100%]")}

          >
            About Us
          </NavLink>
          <hr/>

          <NavLink
            className=""
            to="/Contact"
            style={({ isActive }) =>
              isActive
                ? { color: "#24cfa6", textDecoration: "underline" }
                : { color: "white" }
            }
            onClick={() => setNav("right-[-100%]")}

          >
            Contact Us
          </NavLink>
          <hr/>

          <NavLink
            className=""
            to="/Login"
            style={({ isActive }) =>
              isActive ? { display: "none" } : { color: "white" }
            }
            onClick={() => setNav("right-[-100%]")}

          >
            <LoginBtn />
          </NavLink>
        </div>
        <div className="hidden lg:flex items-center text-md justify-between gap-5 ">
          <NavLink
            className="hover:scale-105 transition-transform duration-300"
            to="/"
            style={({ isActive }) =>
              isActive
                ? { color: "#24cfa6", textDecoration: "underline" }
                : { color: "white" }
            }
          >
            Home
          </NavLink>
          <NavLink
            className="hover:scale-105 transition-transform duration-300"
            to="/aboutUs"
            style={({ isActive }) =>
              isActive
                ? { color: "#24cfa6", textDecoration: "underline" }
                : { color: "white" }
            }
          >
            About Us
          </NavLink>
          <NavLink
            className="hover:scale-105 transition-transform duration-300"
            to="/Contact"
            style={({ isActive }) =>
              isActive
                ? { color: "#24cfa6", textDecoration: "underline" }
                : { color: "white" }
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            className="hover:scale-105 transition-transform duration-300"
            to="/Login"
            style={({ isActive }) =>
              isActive ? { display: "none" } : { color: "white" }
            }
          >
            <LoginBtn />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
