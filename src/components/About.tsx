import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ResourceLinks } from './about/ResourceLinks';
import { ContactInfo } from './about/ContactInfo';

const resourceContent: Record<string, string> = {
  history: `History
We have the mini and the micro computer. In what semantic niche would the pico computer fall?

      Alan Perlis, Epigrams in Programming

The Department of Computer Science was founded by people who had a vision. This vision was how computer science would fit into the unique spirit of Yale University, an institution oriented to an unusual degree around undergraduate education and close interdepartmental collaboration. The Department has always had close ties to mathematics and engineering, but has increasingly experienced collaborations with other disciplines important to Yale, including psychology, linguistics, economics, business, statistics, music, medicine, physics and more. It is through these collaborations that the importance of computer science in a broader sense is best appreciated.`,
  lifeAboutTown: `Life About Town
Yale is the focal point for much of the intellectual and cultural life of New Haven. Yale offers two symphony orchestras, a symphonic wind ensemble, a jazz ensemble, the Yale Repertory Theater, the Yale Art Gallery, the British Art Center, and more than a thousand informal concerts, recitals, and theatrical productions each year. Many of these events are presented by undergraduate members of Yale College; others are presented by the Schools of Fine Art, Drama, and Music.`,
  directions: "Directions content will be added here.",
  facilities: "Computing facilities content will be added here.",
  faq: "FAQ content will be added here."
};

export const About = () => {
  const [selectedResource, setSelectedResource] = useState('history');

  return (
    <section className="py-20 container mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        <div>
          <ResourceLinks
            selectedResource={selectedResource}
            onResourceSelect={setSelectedResource}
          />
        </div>
        
        <div>
          <Card className="bg-gray-100 shadow-none border-t-4 border-orange-500">
            <CardContent className="p-6">
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap font-sans">
                  {resourceContent[selectedResource]}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};