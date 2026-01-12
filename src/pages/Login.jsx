import { RiRefreshLine } from "@remixicon/react";
import LoginSigninBtn from "../components/LoginSigninBtn";
import useForm from "../hooks/useFrom";

const Login = () => {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div className="  flex items-center flex-col  px-5  ">
      <div>
        <div className="text-2xl md:text-4xl mt-20 font-bold p-10 ">
          Welcome <span className="text-(--color-accent) ">Back</span>
          <h1 className="m-5 font-normal">
            Log in to continue helping lost items find their way home.
          </h1>
        </div>
        <div className="mx-5 md:mx-40 ">
          <p className="text-md md:text-5xl  px-10 pb-20">
            &nbsp;&nbsp;&nbsp;&nbsp;Access your account to{" "}
            <span className="text-(--color-accent) ">
              view updates, manage listings, and chat securely —
            </span>{" "}
            all in one place.
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" w-3/4 md:w-1/4 flex flex-col  border border-(--color-accent) rounded-4xl p-5 mb-5  lg:text-md "
      >
        <input
          className="md:h-20 p-5  outline-none"
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <hr className="text-(--color-accent) " />
        <input
          className="md:h-20 p-5 outline-none"
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <hr className="text-(--color-accent)" />
        <div className="flex gap-2 py-5 justify-between ">
          <div className="flex gap-5 items-baseline w-full ">
            <img
              className="w-full h-full object-fill object-center"
              src="/"
              alt="/"
            />
            <RiRefreshLine />
          </div>
          <input
            className="md:h-20 p-5 outline-none"
            type="text"
            placeholder="Captcha"
          />
        </div>
        <hr className="text-(--color-accent)" />

        <button
          className="border rounded-3xl  m-5 px-5 py-2 text-(--color-accent) hover:bg-(--color-primary) active:scale-105 transition-all"
          type="submit"
        >
          Login
        </button>
      </form>

      <h1>
        Create an account to get started.
        <span className="text-(--color-accent)"> </span>
        <LoginSigninBtn button={"Signin"} />
      </h1>
    </div>
  );
};

export default Login;
