import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FlagshipEvent } from "./events/FlagshipEvent";
import { WorkshopCard } from "./events/WorkshopCard";
import { ClubActivity } from "./events/ClubActivity";
import { flagshipEvents, workshops, clubActivities } from "./events/EventsData";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
          <Link to="/events/flagship" className="inline-block">
            <h3 className="text-2xl font-semibold text-tech-dark mb-6 relative group">
              Flagship Events
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tech-purple transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </h3>
          </Link>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <AnimatePresence mode="wait">
                {flagshipEvents.map((event, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FlagshipEvent {...event} />
                    </motion.div>
                  </CarouselItem>
                ))}
              </AnimatePresence>
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mb-16">
          <Link to="/events/workshops" className="inline-block">
            <h3 className="text-2xl font-semibold text-tech-dark mb-6 relative group">
              Workshops & Seminars
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tech-purple transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </h3>
          </Link>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <AnimatePresence mode="wait">
                {workshops.map((workshop, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <WorkshopCard {...workshop} />
                    </motion.div>
                  </CarouselItem>
                ))}
              </AnimatePresence>
            </CarouselContent>
          </Carousel>
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
