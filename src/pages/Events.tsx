import { Events as EventsComponent } from "../components/Events";
import { Navbar } from "../components/Navbar";

const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <EventsComponent />
      </div>
    </div>
  );
};

export default Events;