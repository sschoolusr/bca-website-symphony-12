import { Syllabus as SyllabusComponent } from "../components/Syllabus";
import { Navbar } from "../components/Navbar";

const Syllabus = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SyllabusComponent />
    </div>
  );
};

export default Syllabus;