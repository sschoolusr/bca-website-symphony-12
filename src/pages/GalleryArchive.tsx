import { useState } from 'react';
import { Navbar } from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { galleryItems } from '../components/Gallery';

const ITEMS_PER_PAGE = 10;

const GalleryArchive = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = galleryItems.slice(startIndex, endIndex);

  const Pagination = () => (
    <div className="flex justify-center gap-2 my-4">
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
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Gallery Archive</h1>
        <Pagination />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {currentItems.map((item) => (
            <div key={item.id} className="relative group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-6 text-white h-full flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default GalleryArchive;