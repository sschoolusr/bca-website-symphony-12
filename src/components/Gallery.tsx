import { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
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

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const loadMoreItems = () => {
    setVisibleItems(prev => prev + 6);
  };

  return (
    <section id="gallery" className="py-16 bg-[#6a5acd]/5 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A glimpse into the vibrant life of the BCA Department. From academic achievements to cultural 
          celebrations, explore our journey through these moments captured in time.
        </p>

        {/* Category Filters */}
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

        {/* Gallery Grid with Lazy Loading */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Suspense fallback={<div>Loading gallery...</div>}>
            {filteredItems.slice(0, visibleItems).map((item) => (
              <GalleryImage key={item.id} item={item} />
            ))}
          </Suspense>
        </div>

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
