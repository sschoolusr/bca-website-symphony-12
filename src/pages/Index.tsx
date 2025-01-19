import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
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
      <Events />
      <Faculties />
      <Syllabus />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;