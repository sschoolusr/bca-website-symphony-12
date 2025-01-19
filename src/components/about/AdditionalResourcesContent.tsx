import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResourceContent {
  title: string;
  content: React.ReactNode;
}

const resourceContents: Record<string, ResourceContent> = {
  history: {
    title: "Our History",
    content: (
      <div className="space-y-4">
        <p>The Department of Computer Applications was established in 2005 with a vision to provide quality education in computer science and technology.</p>
        <p>Key milestones in our journey:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>2005: Establishment of the department with initial batch of 60 students</li>
          <li>2008: First batch graduates with 100% placement</li>
          <li>2010: Introduction of specialized tracks in AI and Data Science</li>
          <li>2015: Establishment of Research Center for Advanced Computing</li>
          <li>2018: Collaboration with leading tech companies for internships</li>
          <li>2020: Launch of Innovation Hub and Incubation Center</li>
          <li>2022: Recognition as Center of Excellence in Computer Applications</li>
        </ul>
      </div>
    )
  },
  lifeAboutTown: {
    title: "Life About Town",
    content: (
      <div className="space-y-4">
        <p>Our campus is strategically located in the heart of the city, offering students a vibrant urban experience alongside their academic journey.</p>
        <div className="space-y-2">
          <h3 className="font-semibold">Campus Surroundings</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Walking distance to major tech companies and startups</li>
            <li>Proximity to public libraries and research centers</li>
            <li>Easy access to public transportation</li>
            <li>Nearby parks and recreational facilities</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Student Life</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Active student communities and tech clubs</li>
            <li>Regular cultural events and festivals</li>
            <li>Sports facilities and fitness centers</li>
            <li>Safe and affordable student housing options</li>
          </ul>
        </div>
      </div>
    )
  },
  facilities: {
    title: "Computing Facilities",
    content: (
      <div className="space-y-4">
        <p>Our state-of-the-art computing facilities provide students with the latest technology and resources:</p>
        <div className="space-y-2">
          <h3 className="font-semibold">Infrastructure</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>High-performance computing lab with latest hardware</li>
            <li>Dedicated AI and Machine Learning lab</li>
            <li>IoT and Embedded Systems lab</li>
            <li>24/7 access to computer resources</li>
            <li>High-speed internet connectivity</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Software Resources</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Latest development tools and IDEs</li>
            <li>Cloud computing platforms access</li>
            <li>Professional software licenses</li>
            <li>Virtual reality development kit</li>
          </ul>
        </div>
      </div>
    )
  },
  faq: {
    title: "Department FAQ",
    content: (
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold">Admission Process</h3>
          <p>Our admission process is merit-based, considering academic performance and entrance test scores.</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Course Duration</h3>
          <p>The BCA program is a three-year full-time course divided into six semesters.</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Career Prospects</h3>
          <p>Our graduates work in various roles including software development, system administration, and IT consulting.</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Internship Opportunities</h3>
          <p>We have partnerships with leading tech companies providing internship opportunities to our students.</p>
        </div>
      </div>
    )
  }
};

export const AdditionalResourcesContent: React.FC<{ selectedResource: string }> = ({ selectedResource }) => {
  const content = resourceContents[selectedResource] || resourceContents.history;

  return (
    <Card className="bg-gray-100 shadow-none border-t-4 border-orange-500 rounded-none border-x-0 border-b-0">
      <CardHeader>
        <CardTitle>{content.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-tech-gray">
          {content.content}
        </div>
      </CardContent>
    </Card>
  );
};