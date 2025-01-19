import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResourceContent {
  title: string;
  content: string;
}

const resourceContents: Record<string, ResourceContent> = {
  history: {
    title: "History",
    content: "The Department of Computer Applications was established in 2005 with a vision to provide quality education in computer science. Over the years, we have grown from a small department to a center of excellence in computer education."
  },
  lifeAboutTown: {
    title: "Life About Town",
    content: "Our campus is located in the heart of the city, providing students with easy access to various amenities, cultural activities, and professional opportunities. The vibrant city life complements the academic environment."
  },
  directions: {
    title: "Directions",
    content: "Our campus is easily accessible by public transport. The nearest bus stop is within walking distance, and we're just 2 kilometers from the main railway station."
  },
  facilities: {
    title: "Computing Facilities",
    content: "Our department features state-of-the-art computing labs, high-speed internet connectivity, and the latest software tools for practical learning and research."
  },
  faq: {
    title: "Department FAQ",
    content: "Find answers to commonly asked questions about admissions, courses, placements, and other academic matters."
  }
};

interface AdditionalResourcesContentProps {
  selectedResource: string;
}

export const AdditionalResourcesContent: React.FC<AdditionalResourcesContentProps> = ({ selectedResource }) => {
  const content = resourceContents[selectedResource] || resourceContents.history;

  return (
    <Card className="animate-fade-up">
      <CardHeader>
        <CardTitle>{content.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-tech-gray">{content.content}</p>
      </CardContent>
    </Card>
  );
};