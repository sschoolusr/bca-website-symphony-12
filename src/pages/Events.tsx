import { Events as EventsComponent } from "../components/Events";
import { Navbar } from "../components/Navbar";

const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <EventsComponent />
    </div>
  );
};

export default Events;