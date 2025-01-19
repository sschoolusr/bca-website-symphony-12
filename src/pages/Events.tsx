import { Events as EventsComponent } from "../components/Events";
import { Navbar } from "../components/Navbar";

const Events = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <EventsComponent />
      </div>
    </main>
  );
};

export default Events;