import { Contact as ContactComponent } from "../components/Contact";
import { Navbar } from "../components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactComponent />
    </div>
  );
};

export default Contact;