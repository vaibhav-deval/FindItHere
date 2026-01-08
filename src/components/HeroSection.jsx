import LoginBtn from "./LoginBtn";
import { NavLink } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="text-(--color-text) w-full md:min-w-150  bg-cover flex flex-col justify-center items-center ">
      <div className="p-10 w-full flex flex-col items-center text-4xl md:text-7xl font-bold">
        <div>
          <h1>
            Lost Something
            <span className="text-(--color-secondary)  transition-colors duration-300">
              ?
            </span>
          </h1>
        </div>
        <div className="ml-25">
          <h1 className="">
            Found{""}
            <span className="text-(--color-accent) ">
              Something
              <span className="hover:text-(--color-secondary) transition-colors duration-300">
                ?
              </span>
            </span>
          </h1>
        </div>
      </div>
      <div className="  md:p-10 text-md w-full lg:text-sm md:text-md md:self-end  md:w-[40%] ">
        &nbsp;&nbsp;&nbsp;&nbsp; Let It Find Its Way
        <span className="text-(--color-accent) "> Home.</span> FindItHere
        connects people who’ve lost his loving ones and items with those who’ve
        found them. Built on honesty, safety, and community trust, our platform
        makes reuniting lost belongings
        <span className="text-(--color-accent) "> simple and secure.</span>
      </div>
      <div className=" mt-10 lg:hidden">
        <NavLink className="" to="/Login">
          <LoginBtn />
        </NavLink>
      </div>
    </div>
  );
};

export default HeroSection;
