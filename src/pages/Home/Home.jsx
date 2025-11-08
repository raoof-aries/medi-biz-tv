import { HeroSection, AboutSection, ContactSection } from "../../containers";

const Home = () => {
  return (
    <>
      <div className="bg-animation">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <HeroSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
