import { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent } from './ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

// Lazy load images
const GalleryImage = lazy(() => import('./GalleryImage'));

export const galleryItems = [
  {
    id: 1,
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    title: 'Tech Workshop 2024',
    description: 'Students participating in the annual tech workshop'
  },
  {
    id: 2,
    category: 'cultural',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    title: 'Annual Day Celebration',
    description: 'Cultural performances by students'
  },
  {
    id: 3,
    category: 'infrastructure',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
    title: 'Computer Lab',
    description: 'State-of-the-art computer laboratory'
  },
  {
    id: 4,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    title: 'Sports Day 2024',
    description: 'Annual sports competition'
  },
];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'academic' | 'cultural' | 'sports' | 'infrastructure'>('all');
  const [visibleItems, setVisibleItems] = useState(6);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrevImage = () => {
    setSelectedImage(prev => 
      prev === null ? null : 
      prev === 0 ? filteredItems.length - 1 : 
      prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage(prev => 
      prev === null ? null : 
      prev === filteredItems.length - 1 ? 0 : 
      prev + 1
    );
  };

  return (
    <section id="gallery" className="py-16 bg-[#6a5acd]/5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'academic', 'cultural', 'sports', 'infrastructure'].map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category as 'all' | 'academic' | 'cultural' | 'sports' | 'infrastructure')}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Suspense fallback={<div>Loading gallery...</div>}>
            {filteredItems.slice(0, visibleItems).map((item, index) => (
              <Card 
                key={item.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedImage(index)}
              >
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
            ))}
          </Suspense>
        </div>

        <Dialog 
          open={selectedImage !== null} 
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl">
            {selectedImage !== null && (
              <div className="relative">
                <img
                  src={filteredItems[selectedImage].image}
                  alt={filteredItems[selectedImage].title}
                  className="w-full h-[60vh] object-cover"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* View All Button */}
        <div className="text-center mb-12">
          <Link to="/gallery/archive">
            <Button variant="outline" size="lg">
              View All / Archive
            </Button>
          </Link>
        </div>

        {/* Featured Album Carousel */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Featured Albums</h3>
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {galleryItems.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="p-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Submit Photos CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-[#6a5acd] hover:bg-[#6a5acd]/90">
            Submit Your Photos
          </Button>
        </div>
      </div>
    </section>
  );
};
