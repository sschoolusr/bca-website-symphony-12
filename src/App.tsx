import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Footer } from "./components/Footer";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Events = lazy(() => import("./pages/Events"));
const EventDetail = lazy(() => import("./pages/EventDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Faculties = lazy(() => import("./pages/Faculties"));
const Syllabus = lazy(() => import("./pages/Syllabus"));
const Gallery = lazy(() => import("./pages/Gallery"));
const FlagshipEventsList = lazy(() => import("./pages/FlagshipEventsList"));
const WorkshopsList = lazy(() => import("./pages/WorkshopsList"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <main className="flex-grow">
              <div className="container mx-auto px-4 lg:px-8 xl:px-16 2xl:px-24">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/events/:eventId" element={<EventDetail />} />
                  <Route path="/events/flagship" element={<FlagshipEventsList />} />
                  <Route path="/events/workshops" element={<WorkshopsList />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faculties" element={<Faculties />} />
                  <Route path="/syllabus" element={<Syllabus />} />
                  <Route path="/gallery" element={<Gallery />} />
                </Routes>
              </div>
            </main>
            <Footer />
          </Suspense>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;