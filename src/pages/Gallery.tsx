import { Gallery as GalleryComponent } from "../components/Gallery";
import { Navbar } from "../components/Navbar";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <GalleryComponent />
    </div>
  );
};

export default Gallery;