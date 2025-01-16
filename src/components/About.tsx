import { 
  BookOpen, 
  Users, 
  Trophy, 
  Monitor, 
  Wifi, 
  GraduationCap, 
  Building2, 
  Code,
  Lightbulb,
  Award,
  HandshakeIcon,
  Shield
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const facilities = [
  {
    icon: Monitor,
    title: "Computer Labs",
    description: "State-of-the-art computer labs with high-performance systems",
  },
  {
    icon: Code,
    title: "Software Access",
    description: "Access to industry-standard software and tools",
  },
  {
    icon: Building2,
    title: "Smart Classrooms",
    description: "Smart classrooms with audio-visual aids",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Campus",
    description: "Wi-Fi-enabled campus for seamless connectivity",
  },
];

const achievements = [
  {
    icon: GraduationCap,
    title: "90%+ Placement",
    description: "Placement success rate in top IT firms",
  },
  {
    icon: Trophy,
    title: "Competition Winners",
    description: "Multiple awards in hackathons and coding competitions",
  },
  {
    icon: BookOpen,
    title: "Research Papers",
    description: "Published in national and international journals",
  },
];

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Encouraging out-of-the-box thinking and technological advancement",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Commitment to academic and professional excellence",
  },
  {
    icon: HandshakeIcon,
    title: "Collaboration",
    description: "Building partnerships with industries and academia",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Upholding ethical practices and a culture of respect",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-tech-dark mb-4">
            Welcome to BCA Department
          </h2>
          <p className="text-tech-gray max-w-3xl mx-auto">
            Welcome to the Bachelor of Computer Applications (BCA) Department, where innovation meets education. 
            We are committed to nurturing future technology leaders and empowering students with the knowledge 
            and skills needed for a successful career in the digital age.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-tech-gray">
                Our mission is to provide a strong foundation in computer science, fostering creativity, 
                critical thinking, and technical expertise. We aim to bridge the gap between theoretical 
                learning and practical application.
              </p>
            </CardContent>
          </Card>
          <Card className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-tech-gray">
                To become a center of excellence in computer education, producing industry-ready 
                professionals equipped with ethical values and global competencies.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-tech-dark text-center mb-8">Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card 
                key={value.title}
                className="animate-fade-up hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <CardHeader>
                  <value.icon className="w-8 h-8 text-tech-purple mb-2" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-tech-gray text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-tech-dark text-center mb-8">Our Facilities</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card 
                key={facility.title}
                className="animate-fade-up hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <CardHeader>
                  <facility.icon className="w-8 h-8 text-tech-purple mb-2" />
                  <CardTitle className="text-lg">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-tech-gray text-sm">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-tech-dark text-center mb-8">Our Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="animate-fade-up hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <CardHeader>
                  <achievement.icon className="w-8 h-8 text-tech-purple mb-2" />
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-tech-gray text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center animate-fade-up">
          <blockquote className="text-xl italic text-tech-dark">
            "Shaping innovators of tomorrow with a passion for technology and a commitment to excellence."
          </blockquote>
        </div>
      </div>
    </section>
  );
};