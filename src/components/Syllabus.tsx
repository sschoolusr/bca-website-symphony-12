import { BookOpen, Code, Download, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

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

const academicLinks = [
  "Academics",
  "Academic Calendars",
  "Course Listings",
  "Undergraduate Program",
  "Graduate Program",
  "Certificate in Programming",
  "Student Research Opportunities",
  "Career Fair"
];

export const Syllabus = () => {
  const [selectedContent, setSelectedContent] = useState("syllabus");

  const handleDownloadSyllabus = (year: string) => {
    console.log(`Downloading syllabus for ${year}`);
  };

  const renderContent = () => {
    if (selectedContent === "syllabus") {
      return yearData.map((year, index) => (
        <Card key={index} className="mb-8">
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
      ));
    }
    
    return (
      <Card>
        <CardHeader>
          <CardTitle>{selectedContent}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-tech-gray">Content for {selectedContent} will be displayed here.</p>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="syllabus" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tech-dark mb-4">Course Syllabus</h2>
          <p className="text-tech-gray max-w-3xl mx-auto">
            Explore the comprehensive curriculum of the BCA program, designed to equip students with the technical knowledge
            and skills required to thrive in the IT industry.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <Card>
              <CardContent className="p-4">
                {academicLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-left mb-2"
                    onClick={() => setSelectedContent(link.toLowerCase().replace(/ /g, '_'))}
                  >
                    {link}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="md:w-3/4">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};