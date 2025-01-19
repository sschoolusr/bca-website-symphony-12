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
        <p>Established in 2005, the Department of Computer Applications has grown to become a center of excellence in computer science education.</p>
        <p>Key milestones:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>2005: Department establishment with initial batch of 60 students</li>
          <li>2008: First batch graduates with 100% placement</li>
          <li>2010: Introduction of specialized tracks in AI and Data Science</li>
          <li>2015: Research center inauguration and industry partnerships</li>
          <li>2020: Expansion of facilities and modernization of labs</li>
        </ul>
      </div>
    )
  },
  lifeAboutTown: {
    title: "Life About Town",
    content: (
      <div className="space-y-4">
        <p>Our campus is strategically located in the heart of the city, offering students:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Easy access to tech hubs and startup incubators</li>
          <li>Rich cultural experiences through nearby museums and theaters</li>
          <li>Modern sports complexes and recreation centers</li>
          <li>Convenient public transportation connections</li>
          <li>Affordable student housing options in safe neighborhoods</li>
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
          <li>Multiple computer labs with latest hardware configurations</li>
          <li>High-speed internet and Wi-Fi throughout campus</li>
          <li>Specialized software development and testing environments</li>
          <li>Advanced research laboratories for emerging technologies</li>
          <li>24/7 access to project rooms and study spaces</li>
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
          <p>Admissions are based on academic merit and entrance test performance. The process includes:</p>
          <ul className="list-disc pl-5">
            <li>Online application submission</li>
            <li>Entrance examination</li>
            <li>Merit list publication</li>
            <li>Document verification</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">What are the career prospects?</h3>
          <p>Our graduates work in various roles including:</p>
          <ul className="list-disc pl-5">
            <li>Software Development</li>
            <li>System Administration</li>
            <li>Data Analysis</li>
            <li>IT Consulting</li>
          </ul>
        </div>
      </div>
    )
  }
};

export const AdditionalResourcesContent: React.FC<{ selectedResource: string }> = ({ selectedResource }) => {
  const content = resourceContents[selectedResource] || resourceContents.history;

  return (
    <Card className="rounded-none border-t-4 border-[#ff9800] bg-gray-100">
      <CardHeader>
        <CardTitle>{content.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-gray-700">
          {content.content}
        </div>
      </CardContent>
    </Card>
  );
};