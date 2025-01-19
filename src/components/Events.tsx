import { lazy, Suspense, useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Lazy load components
const FlagshipEvent = lazy(() => import('./events/FlagshipEvent'));
const WorkshopCard = lazy(() => import('./events/WorkshopCard'));
const ClubActivity = lazy(() => import('./events/ClubActivity'));

// Import data on demand
const loadEventsData = () => import('./events/EventsData').then(module => module.default);

export const Events = () => {
  const [eventsData, setEventsData] = useState(null);

  useEffect(() => {
    loadEventsData().then(data => setEventsData(data));
  }, []);

  if (!eventsData) return <div>Loading...</div>;

  return (
    <section id="events" className="py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl font-bold text-tech-dark mb-4">Events & Activities</h2>
          <p className="text-tech-gray max-w-3xl mx-auto">
            The BCA Department thrives on fostering innovation, creativity, and collaboration through a diverse range of events.
          </p>
        </div>

        <div className="mb-16">
          <Link to="/events/flagship" className="inline-block group">
            <h3 className="text-2xl font-semibold text-tech-dark mb-6 relative">
              Flagship Events
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tech-purple transform scale-x-100 transition-transform"></span>
            </h3>
          </Link>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <Suspense fallback={<div>Loading events...</div>}>
                <AnimatePresence mode="wait">
                  {eventsData.flagshipEvents.map((event, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <FlagshipEvent {...event} />
                    </CarouselItem>
                  ))}
                </AnimatePresence>
              </Suspense>
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mb-16">
          <Link to="/events/workshops" className="inline-block group">
            <h3 className="text-2xl font-semibold text-tech-dark mb-6 relative">
              Workshops & Seminars
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tech-purple transform scale-x-100 transition-transform"></span>
            </h3>
          </Link>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <Suspense fallback={<div>Loading workshops...</div>}>
                <AnimatePresence mode="wait">
                  {eventsData.workshops.map((workshop, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <WorkshopCard {...workshop} />
                    </CarouselItem>
                  ))}
                </AnimatePresence>
              </Suspense>
            </CarouselContent>
          </Carousel>
        </div>

        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-tech-dark mb-6">Regular Club Activities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Suspense fallback={<div>Loading club activities...</div>}>
              <AnimatePresence mode="wait">
                {eventsData.clubActivities.map((activity, index) => (
                  <ClubActivity key={index} {...activity} />
                ))}
              </AnimatePresence>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};
