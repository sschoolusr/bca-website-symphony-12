import { BookOpen, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Modern Curriculum',
    description: 'Comprehensive coursework covering the latest in computer applications and technology.',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Learn from industry professionals and experienced academicians.',
  },
  {
    icon: Trophy,
    title: 'Career Success',
    description: 'High placement rates with leading technology companies.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-tech-dark mb-4">
            About Our Department
          </h2>
          <p className="text-tech-gray max-w-2xl mx-auto">
            The Department of Computer Applications is committed to excellence in teaching,
            research, and fostering innovation in technology education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-gray-200 hover:border-tech-purple transition-colors duration-200"
            >
              <feature.icon className="w-12 h-12 text-tech-purple mb-4" />
              <h3 className="text-xl font-semibold text-tech-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-tech-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};