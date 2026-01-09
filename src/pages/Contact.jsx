const Contact = () => {
  return (
    <div className="flex items-center flex-col  px-5  ">
      <div>
        <div className="text-2xl md:text-4xl mt-20 font-bold p-10 ">
          Get in <span className="text-(--color-accent) ">Touch</span>--
          <h1 className="m-5 font-normal">We’re Here to Help You Reconnect</h1>
        </div>
        <div className="mx-5 md:mx-40 ">
          <p className="text-md md:text-5xl  px-10 pb-20">
            &nbsp;&nbsp;&nbsp;&nbsp;Have a question, feedback, or need help with
            a lost or found case?{" "}
            <span className="text-(--color-accent) ">Reach out to us —</span>{" "}
            we’re always happy to assist and improve your experience.
          </p>
        </div>
      </div>
            <form className=" w-3/4 md:w-1/2 flex flex-col border border-(--color-accent) rounded-4xl p-5 mb-5  lg:text-md ">

        <input
          className="md:h-20 p-5 outline-none"
          type="text"
          placeholder="Name"
        />
        <hr className="text-(--color-accent)" />
        <input
          className="md:h-20 p-5 outline-none"
          type="email"
          placeholder="Email"
        />
        <hr className="text-(--color-accent)" />
        <input
          className="md:h-20 p-5 outline-none"
          type="text"
          placeholder="Subject"
        />
        <hr className="text-(--color-accent)" />
        <textarea
          name=""
          id=""
          placeholder="Message"
          className=" p-5 outline-none resize-none w-full min-h-72"
        ></textarea>
        <hr className="text-(--color-accent)" />

        <button
          className="border rounded-3xl  m-5 px-5 py-2 text-(--color-accent)"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
