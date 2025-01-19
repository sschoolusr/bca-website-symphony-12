import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Footer } from "./components/Footer";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Events = lazy(() => import("./pages/Events"));
const EventDetail = lazy(() => import("./pages/EventDetail"));
const Faculties = lazy(() => import("./pages/Faculties"));
const Syllabus = lazy(() => import("./pages/Syllabus"));
const Gallery = lazy(() => import("./pages/Gallery"));
const GalleryArchive = lazy(() => import("./pages/GalleryArchive"));
const FlagshipEventsList = lazy(() => import("./pages/FlagshipEventsList"));
const WorkshopsList = lazy(() => import("./pages/WorkshopsList"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Full-width title image */}
        <div className="w-full h-[40vh] relative">
          <img
            src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
            alt="Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <main className="flex-grow">
              <div className="container mx-auto px-4 lg:px-8 xl:px-16 2xl:px-24 bg-white">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/events/:eventId" element={<EventDetail />} />
                  <Route path="/events/flagship" element={<FlagshipEventsList />} />
                  <Route path="/events/workshops" element={<WorkshopsList />} />
                  <Route path="/faculties" element={<Faculties />} />
                  <Route path="/syllabus" element={<Syllabus />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/gallery/archive" element={<GalleryArchive />} />
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