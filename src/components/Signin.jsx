import { RiRefreshLine } from "@remixicon/react";
import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <div className=" flex items-center flex-col  px-5  ">
      <div>
        <div className="text-2xl md:text-4xl mt-20 font-bold p-10 ">
          Join the{" "}
          <span className="text-(--color-accent) ">FindItHere Community</span>
          <h1 className="m-5 font-normal">
            Create an account and be part of something meaningful.
          </h1>
        </div>
        <div className="mx-5 md:mx-40 ">
          <p className="text-md md:text-5xl  px-10 pb-20">
            &nbsp;&nbsp;&nbsp;&nbsp;Help return lost items, build trust,{" "}
            <span className="text-(--color-accent) ">
              and make a real difference —
            </span>{" "}
            one action at a time.
          </p>
        </div>
      </div>
      <form className=" w-3/4 md:w-1/2 flex flex-col  md:grid grid-cols-2 gap-5  border border-(--color-accent) rounded-4xl p-5 mb-5  lg:text-md ">
        <div>
          <input
            className="md:h-20 p-5 outline-none"
            type="text"
            placeholder="Name"
          />
          <hr className="text-(--color-accent)" />
        </div>
        <div>
          <input
            className="md:h-20 p-5 outline-none"
            type="email"
            placeholder="Email"
          />
          <hr className="text-(--color-accent)" />
        </div>
        <div>
          <input
            className="md:h-20 p-5 outline-none"
            placeholder="Phone Number"
            type="tel"
            name="telphone"
            pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
            required
          />
          <hr className="text-(--color-accent)" />
        </div>

        <div>
          <label className="text-(--color-accent) text-xl pl-5" htmlFor="DOB">
            D.O.B :
          </label>
          <input
            id="DOB"
            className="md:h-20 p-5 outline-none"
            placeholder="Bod"
            type="date"
            name="telphone"
            required
          />
          <hr className="text-(--color-accent)" />
        </div>

        <div>
          <input
            className="md:h-20 p-5 outline-none"
            type="password"
            placeholder="Create Password"
          />
          <hr className="text-(--color-accent) " />
        </div>

        <div>
          <input
            className="md:h-20 p-5 outline-none"
            type="password"
            placeholder="Confirm Password"
          />
          <hr className="text-(--color-accent) " />
        </div>

        <div className="flex items-center gap-2 py-5 justify-between ">
          <div className="flex gap-5 items-baseline w-full ">
            <img
              className=" object-fill object-center w-full h-full"
              src="/"
              alt=""
            />
            <RiRefreshLine />
          </div>
          <input
            className="md:h-20 p-5 outline-none"
            type="text"
            placeholder="Captcha"
          />
          <hr className="text-(--color-accent)" />
        </div>
        <div className="flex items-center gap-5 p-5">
          <input type="checkbox" className=" outline-none " />
          <h1 className="checked">
            I agree to follow the
            <NavLink
              className="text-(--color-accent)"
              to="/Community"
              target="_blank"
            >
              {" "}
              Community Guidelines{" "}
              <span className="text-(--color-text)">and</span> Terms &
              Conditions.
            </NavLink>
          </h1>
          <hr className="text-(--color-accent)" />
        </div>
        <div className="m-5">
          <button
            className="border w-full rounded-3xl hover:bg-(--color-primary)   px-5 py-2 text-(--color-accent) active:scale-105 transition-all"
            type="submit"
          >
            Signup
          </button>
        </div>
      </form>
      <h1>
        Already have an account?
        <span className="text-(--color-accent)"> </span>
        <button
          className="border rounded-3xl  px-5 py-2 text-(--color-accent) hover:bg-(--color-primary) active:scale-105 transition-all"
          type="submit"
        >
          Log in here.
        </button>
      </h1>
    </div>
  );
};

export default Signin;
