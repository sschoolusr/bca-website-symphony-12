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
        <p>The Department of Computer Applications was established in 2005 with a vision to provide quality education in computer science.</p>
        <p>Key milestones:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>2005: Department establishment</li>
          <li>2008: First batch graduation</li>
          <li>2010: Introduction of specialized tracks</li>
          <li>2015: Research center inauguration</li>
          <li>2020: Industry partnership program launch</li>
        </ul>
      </div>
    )
  },
  lifeAboutTown: {
    title: "Life About Town",
    content: (
      <div className="space-y-4">
        <p>Our campus is located in the heart of the city, providing students with easy access to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Tech hubs and startups</li>
          <li>Cultural centers and museums</li>
          <li>Sports facilities</li>
          <li>Public transportation</li>
          <li>Student housing areas</li>
        </ul>
      </div>
    )
  },
  facilities: {
    title: "Computing Facilities",
    content: (
      <div className="space-y-4">
        <p>Our state-of-the-art facilities include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Advanced Computer Labs with latest hardware</li>
          <li>High-speed internet connectivity</li>
          <li>Specialized software development environments</li>
          <li>Research laboratories</li>
          <li>24/7 access for projects</li>
        </ul>
      </div>
    )
  },
  faq: {
    title: "Department FAQ",
    content: (
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold">What is the admission process?</h3>
          <p>Admissions are based on academic performance and entrance test scores.</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">What are the career prospects?</h3>
          <p>Our graduates work in software development, system administration, and IT consulting.</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Are internships available?</h3>
          <p>Yes, we have partnerships with leading tech companies for internships.</p>
        </div>
      </div>
    )
  }
};

export const AdditionalResourcesContent: React.FC<{ selectedResource: string }> = ({ selectedResource }) => {
  const content = resourceContents[selectedResource] || resourceContents.history;

  return (
    <Card className="bg-gray-50 border-t-4 border-tech-purple">
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