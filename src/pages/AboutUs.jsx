const AboutUs = () => {
  return (
    <div className="flex flex-col h-screen   ">
      <div className="text-2xl md:text-4xl mt-20 font-bold p-10 ">
        WHY FIND<span className="text-(--color-accent) ">IT</span>HERE?
        <h1 className="m-5 font-normal">More Than a Platform — A Responsible Community</h1>
      </div>
      <div className="mx-5 md:mx-40 ">
        <p className="text-2xl lg:text-5xl md:text-4xl  lg:px-10 pb-20">
          &nbsp;&nbsp;&nbsp;&nbsp;FindItHere is designed to help people help each other.{" "}
          <span className="text-(--color-accent) ">
            No selling, no pressure, no misuse —
          </span>{" "}
          just a safe space where lost items are reported, matched, and returned
          to their rightful owners.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
