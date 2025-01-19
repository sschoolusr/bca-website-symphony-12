import { useState } from 'react';
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
import { AdditionalResourcesContent } from './about/AdditionalResourcesContent';

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
  const [selectedResource, setSelectedResource] = useState('history');

  const resources = [
    { id: 'history', label: 'History' },
    { id: 'lifeAboutTown', label: 'Life About Town' },
    { id: 'facilities', label: 'Computing Facilities' },
    { id: 'faq', label: 'Department FAQ' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 font-mallory">
      <div className="container mx-auto px-4 lg:px-8">
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Additional Resources Panel - Left Side */}
          <div className="order-1 lg:order-1">
            <Card className="bg-gray-100 shadow-none border-t-4 border-tech-purple">
              <CardHeader>
                <CardTitle>Additional Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-3">
                  {resources.map((resource) => (
                    <button
                      key={resource.id}
                      onClick={() => setSelectedResource(resource.id)}
                      className={`w-full text-left px-4 py-2 rounded-none transition-colors ${
                        selectedResource === resource.id
                          ? 'bg-tech-purple text-white'
                          : 'text-tech-gray hover:bg-gray-200'
                      }`}
                    >
                      {resource.label}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Middle */}
          <div className="lg:col-span-1 order-2 lg:order-2">
            <AdditionalResourcesContent selectedResource={selectedResource} />
          </div>

          {/* Contact Information - Right Side */}
          <div className="order-3 lg:order-3">
            <Card className="bg-gray-100 shadow-none border-t-4 border-tech-purple">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-tech-gray">
                      BCA Department,<br />
                      College of Commerce, Arts & Science<br />
                      Rajendra Nagar Terminal,<br />
                      Patna-20
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-tech-gray">+91-1234567890</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a href="mailto:bca.department@college.edu" className="text-tech-purple hover:underline">
                      bca.department@college.edu
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Office Hours</h3>
                    <p className="text-tech-gray">9:00 AM to 5:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-tech-dark text-center mb-8">Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card 
                key={value.title}
                className="animate-fade-up bg-gray-100 shadow-none border-t-4 border-tech-purple"
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

        {/* Quote */}
        <div className="text-center animate-fade-up mt-16">
          <blockquote className="text-xl italic text-tech-dark">
            "Shaping innovators of tomorrow with a passion for technology and a commitment to excellence."
          </blockquote>
        </div>
      </div>
    </section>
  );
};
