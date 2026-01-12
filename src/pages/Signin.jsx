import { RiRefreshLine } from "@remixicon/react";
import LoginSigninBtn from "../components/LoginSigninBtn";
import useForm from "../hooks/useFrom";

const Signin = () => {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    dob: "",
    terms: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      alert("Password and Confirm Password is not same");
      return;
    } else {
      if (!values.terms) {
        alert("Please accept Terms & Conditions");
        return;
      }
      console.log(values);
    }
  };
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
      <form
        onSubmit={handleSubmit}
        className=" w-3/4 md:w-1/2 flex flex-col  md:grid grid-cols-2 gap-5  border border-(--color-accent) rounded-4xl p-5 mb-5  lg:text-md "
      >
        <div>
          <input
            className="md:h-20 p-5 outline-none"
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
          <hr className="text-(--color-accent)" />
        </div>
        <div>
          <input
            className="md:h-20 p-5 outline-none"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
          <hr className="text-(--color-accent)" />
        </div>
        <div>
          <input
            className="md:h-20 p-5 outline-none"
            placeholder="Phone Number"
            type="tel"
            name="mobile"
            pattern="[0-9]*"
            required
            value={values.mobile}
            onChange={handleChange}
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
            name="dob"
            value={values.dob}
            onChange={handleChange}
            required
          />
          <hr className="text-(--color-accent)" />
        </div>

        <div>
          <input
            className="md:h-20 p-5 outline-none"
            type="password"
            placeholder="Create Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
          <hr className="text-(--color-accent) " />
        </div>

        <div>
          <input
            className="md:h-20 p-5 outline-none"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            required
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
          <input
            type="checkbox"
            className=" outline-none "
            name="terms"
            checked={values.terms}
            onChange={handleChange}
          />
          <h1 className="checked">
            I agree to follow the
            <a
              className="text-(--color-accent)"
              href="/Community"
              target="_blank"
            >
              {" "}
              Community Guidelines{" "}
              <span className="text-(--color-text)">and</span> Terms &
              Conditions.
            </a>
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
        <LoginSigninBtn button={"Login"} />
      </h1>
    </div>
  );
};

export default Signin;
