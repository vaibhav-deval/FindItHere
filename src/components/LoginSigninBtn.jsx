import { NavLink } from "react-router-dom";

const LoginSigninBtn = ({ button }) => {
  return (
    <NavLink
      className="hover:scale-105 transition-transform duration-300"
      to={`/${button}`}
      style={({ isActive }) =>
        isActive ? { display: "none" } : { color: "white" }
      }
    >
      <button className="border border-(--color-accent) px-4 py-2 rounded-3xl font-bold hover:bg-(--color-primary) hover:text-(--color-accent) transition-colors ">
        {button}
      </button>
    </NavLink>
  );
};

export default LoginSigninBtn;
