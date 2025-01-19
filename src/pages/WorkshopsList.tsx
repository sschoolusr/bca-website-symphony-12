import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { WorkshopCard } from "../components/events/WorkshopCard";
import { Button } from "@/components/ui/button";
import { workshops } from "../components/events/EventsData";

const ITEMS_PER_PAGE = 10;

const WorkshopsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(workshops.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentWorkshops = workshops.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Workshops & Seminars</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {currentWorkshops.map((workshop, index) => (
            <WorkshopCard key={index} {...workshop} />
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            First
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            Last
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkshopsList;