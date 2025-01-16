import { useState } from "react";
import { Search, Filter, Award, BookOpen, Mail, Linkedin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";

// Faculty data
const facultyMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Head of Department",
    specialization: "Artificial Intelligence & Machine Learning",
    email: "sarah.johnson@bca.edu",
    linkedin: "linkedin.com/in/sarahjohnson",
    achievements: ["Best Teacher Award 2023", "AWS Certified Solutions Architect"],
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    title: "Associate Professor",
    specialization: "Cybersecurity & Network Security",
    email: "michael.chen@bca.edu",
    linkedin: "linkedin.com/in/michaelchen",
    achievements: ["Published in IEEE Journal", "Certified Ethical Hacker"],
    image: "/placeholder.svg",
  },
  // Add more faculty members as needed
];

const departments = [
  "Computer Science Core",
  "Artificial Intelligence & Machine Learning",
  "Cybersecurity",
  "Data Science and Analytics",
  "Web Development",
  "Networking and Cloud Computing",
];

export const Faculties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );

  // Filter faculty members based on search query and department
  const filteredFaculty = facultyMembers.filter((faculty) => {
    const matchesSearch =
      faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment
      ? faculty.specialization === selectedDepartment
      : true;
    return matchesSearch && matchesDepartment;
  });

  return (
    <section
      id="faculties"
      className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-[#f5f5f5]"
    >
      {/* Introduction */}
      <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
        <h2 className="text-3xl font-bold text-[#004080] mb-4">
          Our Faculty Members
        </h2>
        <p className="text-gray-600 mb-8">
          The backbone of the BCA Department is its team of dedicated and
          experienced faculty members, who inspire, mentor, and guide students to
          excel in academics and beyond.
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name or specialization..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter by Department
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                {departments.map((dept) => (
                  <Button
                    key={dept}
                    variant={selectedDepartment === dept ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() =>
                      setSelectedDepartment(
                        selectedDepartment === dept ? null : dept
                      )
                    }
                  >
                    {dept}
                  </Button>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredFaculty.map((faculty) => (
          <Card
            key={faculty.id}
            className="group hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex items-center gap-4">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-[#004080]">{faculty.name}</CardTitle>
                  <CardDescription>{faculty.title}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#00b3b3]">
                  <BookOpen className="h-4 w-4" />
                  <span>{faculty.specialization}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <a
                    href={`mailto:${faculty.email}`}
                    className="hover:text-[#00b3b3]"
                  >
                    {faculty.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Linkedin className="h-4 w-4" />
                  <a
                    href={`https://${faculty.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00b3b3]"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-4 w-4 text-[#ff7043]" />
                    <span className="font-semibold">Achievements</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {faculty.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Button
          className="bg-[#ff7043] hover:bg-[#ff7043]/90 text-white mr-4"
        >
          Request Mentorship Session
        </Button>
        <Button
          variant="outline"
          className="border-[#004080] text-[#004080] hover:bg-[#004080] hover:text-white"
        >
          View Publications
        </Button>
      </div>
    </section>
  );
};