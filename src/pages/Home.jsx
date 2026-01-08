import Dashboard from "../components/Dashboard.jsx";
import HeroSection from "../components/HeroSection.jsx";
import AboutUs from "./AboutUs.jsx";
const Home = () => {
  return (
    <section className="px-10 pt-30 ">
      <HeroSection />
      <Dashboard />
      <AboutUs />
    </section>

  );
};

export default Home;
