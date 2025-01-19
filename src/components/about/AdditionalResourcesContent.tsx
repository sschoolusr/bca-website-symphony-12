import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResourceContent {
  title: string;
  content: string;
}

const resourceContents: Record<string, ResourceContent> = {
  history: {
    title: "Our History",
    content: "The Department of Computer Applications was established in 2005 with a vision to provide quality education in computer science. Over the years, we have grown from a small department to a center of excellence in computer education."
  },
  lifeAboutTown: {
    title: "Life About Town",
    content: "Our campus is located in the heart of the city, providing students with easy access to various amenities, cultural activities, and professional opportunities. The vibrant city life complements the academic environment."
  },
  facilities: {
    title: "Computing Facilities",
    content: "Our department features state-of-the-art computing labs equipped with the latest hardware and software. We maintain multiple computer laboratories with high-speed internet connectivity and industry-standard development tools."
  },
  faq: {
    title: "Department FAQ",
    content: "Find answers to commonly asked questions about admissions, course structure, placement opportunities, and other academic matters. Our comprehensive FAQ section covers all aspects of student life in the BCA program."
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
        <p className="text-tech-gray">{content.content}</p>
      </CardContent>
    </Card>
  );
};