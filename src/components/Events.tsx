import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FlagshipEvent } from "./events/FlagshipEvent";
import { WorkshopCard } from "./events/WorkshopCard";
import { ClubActivity } from "./events/ClubActivity";
import { flagshipEvents, workshops, clubActivities } from "./events/EventsData";

export const Events = () => {
  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl font-bold text-tech-dark mb-4">Events & Activities</h2>
          <p className="text-tech-gray max-w-3xl mx-auto">
            The BCA Department thrives on fostering innovation, creativity, and collaboration through a diverse range of events. 
            Our events are designed to enhance learning, provide industry exposure, and build a strong sense of community among students.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-tech-dark mb-6">Flagship Events</h3>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {flagshipEvents.map((event, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <FlagshipEvent {...event} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-tech-dark mb-6">Workshops & Seminars</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <WorkshopCard 
                key={index} 
                {...workshop}
                style={{ animationDelay: `${index * 100}ms` }} 
              />
            ))}
          </div>
        </div>

        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-tech-dark mb-6">Regular Club Activities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {clubActivities.map((activity, index) => (
              <ClubActivity key={index} {...activity} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};