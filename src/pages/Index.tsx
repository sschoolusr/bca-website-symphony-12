import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Events } from "../components/Events";
import { Faculties } from "../components/Faculties";
import { Syllabus } from "../components/Syllabus";
import { Contact } from "../components/Contact";
import { Gallery } from "../components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Faculties />
      <Syllabus />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;