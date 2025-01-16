import { Calendar, Award, Users, Rocket, BookOpen, Globe, Code, Shield, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const flagshipEvents = [
  {
    title: "TechNova",
    description: "Annual tech fest showcasing innovation, coding challenges, and hackathons",
    icon: <Rocket className="h-6 w-6 text-tech-purple" />,
    date: "October 2024",
  },
  {
    title: "CodeSprint",
    description: "24-hour coding marathon solving real-world problems",
    icon: <Code className="h-6 w-6 text-tech-purple" />,
    date: "July 2024",
  },
  {
    title: "Innovators' Summit",
    description: "Platform for innovative projects and research presentations",
    icon: <Globe className="h-6 w-6 text-tech-purple" />,
    date: "December 2024",
  },
];

const workshops = [
  {
    title: "Machine Learning Workshop",
    description: "Hands-on sessions with industry professionals",
    icon: <BookOpen className="h-6 w-6 text-tech-purple" />,
    date: "June 2024",
  },
  {
    title: "Cybersecurity Week",
    description: "Seminars and simulations on cyber threats",
    icon: <Shield className="h-6 w-6 text-tech-purple" />,
    date: "August 2024",
  },
  {
    title: "Web Development Bootcamp",
    description: "Cutting-edge tools and techniques in development",
    icon: <Code className="h-6 w-6 text-tech-purple" />,
    date: "September 2024",
  },
];

export const Events = () => {
  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl font-bold text-tech-dark mb-4">Events & Activities</h2>
          <p className="text-tech-gray max-w-3xl mx-auto">
            The BCA Department thrives on fostering innovation, creativity, and collaboration through a diverse range of events. 
            Our events are designed to enhance learning, provide industry exposure, and build a strong sense of community among students.
          </p>
        </div>

        {/* Flagship Events Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-tech-dark mb-6">Flagship Events</h3>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {flagshipEvents.map((event, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        {event.icon}
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                      </div>
                      <CardDescription>{event.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-tech-gray">{event.description}</p>
                      <Button className="mt-4 w-full" variant="outline">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Workshops Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-tech-dark mb-6">Workshops & Seminars</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {workshop.icon}
                    <CardTitle className="text-xl">{workshop.title}</CardTitle>
                  </div>
                  <CardDescription>{workshop.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-tech-gray">{workshop.description}</p>
                  <Button className="mt-4 w-full" variant="outline">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Club Activities */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-tech-dark mb-6">Regular Club Activities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4">
              <Code className="h-8 w-8 mx-auto mb-4 text-tech-purple" />
              <h4 className="font-semibold mb-2">Coding Club</h4>
              <p className="text-tech-gray">Weekly coding challenges and peer learning sessions</p>
            </div>
            <div className="p-4">
              <Shield className="h-8 w-8 mx-auto mb-4 text-tech-purple" />
              <h4 className="font-semibold mb-2">Cybersecurity Club</h4>
              <p className="text-tech-gray">Ethical hacking simulations and cyber trend discussions</p>
            </div>
            <div className="p-4">
              <Cpu className="h-8 w-8 mx-auto mb-4 text-tech-purple" />
              <h4 className="font-semibold mb-2">AI & Robotics Club</h4>
              <p className="text-tech-gray">Collaborative projects on AI and robotics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
