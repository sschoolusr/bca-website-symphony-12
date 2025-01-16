import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-tech-dark to-tech-purple/90 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Bachelor of Computer Applications
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Empowering future tech leaders with cutting-edge education and practical skills
          </p>
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-tech-dark transition-colors duration-200"
          >
            Discover More
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};