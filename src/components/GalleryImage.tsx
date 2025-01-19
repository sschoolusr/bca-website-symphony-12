import { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImageProps {
  item: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  };
  allItems: Array<{
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  }>;
}

const GalleryImage = ({ item, allItems }: GalleryImageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(() => 
    allItems.findIndex(i => i.id === item.id)
  );

  const handlePrevious = () => {
    setCurrentIndex(current => 
      current === 0 ? allItems.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(current => 
      current === allItems.length - 1 ? 0 : current + 1
    );
  };

  const currentItem = allItems[currentIndex];

  return (
    <>
      <Card className="cursor-pointer rounded-none border-t-4 border-[#ff9800] bg-gray-100" onClick={() => setIsOpen(true)}>
        <CardContent className="p-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl rounded-none">
          <DialogHeader>
            <DialogTitle>{currentItem.title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="relative">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-[60vh] object-cover"
              />
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-2 bg-white/80"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="mr-2 bg-white/80"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="text-gray-600">{currentItem.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryImage;