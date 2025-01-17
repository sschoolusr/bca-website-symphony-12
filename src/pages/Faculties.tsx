import { Faculties as FacultiesComponent } from "../components/Faculties";
import { Navbar } from "../components/Navbar";

const Faculties = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FacultiesComponent />
    </div>
  );
};

export default Faculties;