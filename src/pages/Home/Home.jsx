import {
  HeroSection,
  AboutSection,
  ContactSection,
  ArticlesSection,
} from "../../containers";

const Home = () => {
  return (
    <div className="modern-wrapper section-dark">
      <HeroSection />
      <AboutSection />
      <ArticlesSection />
      <ContactSection />
    </div>
  );
};

export default Home;
