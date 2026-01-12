const Footer = () => {
  return (
    <div className="bg-(--color-primary) p-5 mt-20 text-xl">
      <div className=" md:text-xl  font-bold  ">
        Helping Lost Things <span className="text-(--color-accent) ">Find</span>{" "}
        Their Way Back
        <h1 className="mx-5 font-normal">
          A community-driven lost & found platform built on honesty, safety, and
          trust.
        </h1>
      </div>
      <div className="flex my-5 gap-10 flex-col md:flex-row justify-around md:items-center">
        <div className="flex gap-1  md:text-sm flex-col">
          <h1 className="text-2xl">Quick Links</h1>
          <a
            className="hover:scale-105 transition-transform duration-300"
              href="/"
             
          >
            Home
          </a>
          <a
            className="hover:scale-105 transition-transform duration-300"
              href="/aboutUs"
             
          >
            About Us
          </a>
          <a
            className="hover:scale-105 transition-transform duration-300"
              href="/Contact"
             
          >
            Contact Us
          </a>
          <a
            className="hover:scale-105 transition-transform duration-300"
              href="/Community"
             
          >
            Community Guidelines
          </a>
          <a
            className="hover:scale-105 transition-transform duration-300"
              href="/Community"
             
          >
            Privacy Policy
          </a>
          <a
            className="hover:scale-105 transition-transform duration-300"
              href="/Community"
             
          >
            Terms & Conditions
          </a>
        </div>
        <div className="flex gap-5  md:text-sm flex-col">
          <h1 className="text-2xl">Community Rules</h1>
          <ul className="flex flex-col gap-1 list-disc list-inside">
            <li>No selling of found items</li>
            <li>No forced or demanded rewards</li>
            <li>No sharing of personal contact details</li>
            <li>Use in-app chat only</li>
            <li>Respect every user</li>
          </ul>
        </div>
        <div className="flex gap-5  md:text-sm flex-col">
          <h1 className="text-2xl"> Trust & Safety</h1>
          <ul className="flex flex-col gap-1 list-disc list-inside">
            <li>Verified user accounts</li>
            <li>Age-restricted access</li>
            <li>Secure in-app communication</li>
            <li>Moderated content & reports</li>
          </ul>
        </div>
        <div className="flex gap-5  md:text-sm flex-col">
          <h1 className="text-2xl"> Trust & Safety</h1>
          <ul className="flex flex-col gap-1 list-disc list-inside">
            <li>Community Impacts</li>
            <li>Total Cases Reported</li>
            <li>Successfully Returned Items</li>
            <li>Active Community Members</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h1>© 2026 FindItHere.</h1>
        All rights reserved. Built with ❤️ to make communities more responsible.
      </div>
    </div>
  );
};

export default Footer;
