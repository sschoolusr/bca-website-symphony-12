import { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface GalleryImageProps {
  item: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  };
}

const GalleryImage = ({ item }: GalleryImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="cursor-pointer" onClick={() => setIsOpen(true)}>
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
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{item.title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[60vh] object-cover rounded-lg"
            />
            <p className="text-gray-600">{item.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryImage;