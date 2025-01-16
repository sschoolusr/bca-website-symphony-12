import { BookOpen, Code, Download, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const yearData = [
  {
    year: "First Year",
    core: ["Computer Fundamentals", "Introduction to Computer Architecture", "Programming Logic", "Operating Systems"],
    languages: ["QBASIC", "DOS Commands"],
    practical: ["Basic system navigation", "Programming in QBASIC", "Hardware inspection"],
  },
  {
    year: "Second Year",
    core: ["Networking", "Internet Technologies", "Boolean Algebra", "Structured Programming"],
    languages: ["C Programming", "Data Structures"],
    practical: ["Network simulations", "Programming projects", "Database management"],
  },
  {
    year: "Third Year",
    core: ["Object-Oriented Programming", "Visual Basic", "Database Management", "Java Programming"],
    languages: ["Java", "C++", "Visual Basic"],
    practical: ["Database-driven applications", "RDBMS solutions", "C++ programming projects"],
  },
];

const highlightedTopics = [
  {
    title: "Programming Languages",
    description: "Deep dive into C, C++, Visual Basic, Java",
    icon: <Code className="h-6 w-6 text-emerald-500" />,
  },
  {
    title: "Data Structures",
    description: "Stacks, Queues, Trees, Graphs, and Sorting techniques",
    icon: <BookOpen className="h-6 w-6 text-emerald-500" />,
  },
  {
    title: "Operating Systems",
    description: "DOS, UNIX, memory management, and multitasking",
    icon: <Calendar className="h-6 w-6 text-emerald-500" />,
  },
];

export const Syllabus = () => {
  const handleDownloadSyllabus = (year: string) => {
    console.log(`Downloading syllabus for ${year}`);
    // Implement PDF download functionality here
  };

  return (
    <section id="syllabus" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tech-dark mb-4">Course Syllabus</h2>
          <p className="text-tech-gray max-w-3xl mx-auto">
            Explore the comprehensive curriculum of the BCA program, designed to equip students with the technical knowledge
            and skills required to thrive in the IT industry. The syllabus combines theoretical concepts with practical
            applications, ensuring a well-rounded education.
          </p>
        </div>

        {/* Year-wise Syllabus Tabs */}
        <Tabs defaultValue="1" className="w-full max-w-4xl mx-auto mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="1">First Year</TabsTrigger>
            <TabsTrigger value="2">Second Year</TabsTrigger>
            <TabsTrigger value="3">Third Year</TabsTrigger>
          </TabsList>

          {yearData.map((year, index) => (
            <TabsContent key={index} value={(index + 1).toString()} className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {year.year}
                    <Button
                      variant="outline"
                      onClick={() => handleDownloadSyllabus(year.year)}
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download Syllabus
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-tech-dark">Core Subjects</h4>
                    <ul className="list-disc pl-5 text-tech-gray">
                      {year.core.map((subject, idx) => (
                        <li key={idx}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-tech-dark">Languages and Tools</h4>
                    <ul className="list-disc pl-5 text-tech-gray">
                      {year.languages.map((lang, idx) => (
                        <li key={idx}>{lang}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-tech-dark">Practical Training</h4>
                    <ul className="list-disc pl-5 text-tech-gray">
                      {year.practical.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Highlighted Topics */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {highlightedTopics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {topic.icon}
                  {topic.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{topic.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Development Section */}
        <Card className="mt-12 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Skill Development</CardTitle>
            <CardDescription>Focus areas for practical skill enhancement</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-tech-gray space-y-2">
              <li>Algorithmic thinking and logical problem-solving</li>
              <li>Software development methodologies and best practices</li>
              <li>Integration of industry-relevant tools and platforms</li>
              <li>AutoCAD for technical drafting and design</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};