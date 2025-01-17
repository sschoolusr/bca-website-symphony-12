import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { galleryItems } from './Gallery';

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-tech-dark/90 to-tech-purple/80" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Bachelor of Computer Applications
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Empowering future tech leaders with cutting-edge education and practical skills
          </p>
          <div className="space-x-4">
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-tech-dark transition-colors duration-200"
            >
              Discover More
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="/gallery"
              className="inline-flex items-center px-6 py-3 bg-white text-tech-dark rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              View Gallery
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};