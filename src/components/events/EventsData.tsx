import { Calendar, Award, Users, Rocket, BookOpen, Globe, Code, Shield, Cpu } from "lucide-react";

export const flagshipEvents = [
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

export const workshops = [
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

export const clubActivities = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Coding Club",
    description: "Weekly coding challenges and peer learning sessions"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Cybersecurity Club",
    description: "Ethical hacking simulations and cyber trend discussions"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI & Robotics Club",
    description: "Collaborative projects on AI and robotics"
  }
];

export default {
  flagshipEvents,
  workshops,
  clubActivities
};