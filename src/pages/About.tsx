import { About as AboutComponent } from "../components/About";
import { Navbar } from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutComponent />
    </div>
  );
};

export default About;