import {
  HeroSection,
  AboutSection,
  ContactSection,
  ArticlesSection,
} from "../../containers";

const Home = () => {
  return (
    <div className="modern-wrapper">
      <HeroSection />
      <AboutSection />
      <ArticlesSection />
      <ContactSection />
    </div>
  );
};

export default Home;
