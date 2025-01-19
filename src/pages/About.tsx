import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const [selectedContent, setSelectedContent] = useState('default');

  const getContent = () => {
    switch (selectedContent) {
      case 'history':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">History</h2>
            <p className="italic text-gray-600 mb-4">"We have the mini and the micro computer. In what semantic niche would the pico computer fall?"</p>
            <p className="italic text-gray-600 mb-4">- Alan Perlis, Epigrams in Programming</p>
            <p>The Department of Computer Science was founded by people who had a vision. This vision was how computer science would fit into the unique spirit of Yale University, an institution oriented to an unusual degree around undergraduate education and close interdepartmental collaboration. The Department has always had close ties to mathematics and engineering, but has increasingly experienced collaborations with other disciplines important to Yale, including psychology, linguistics, economics, business, statistics, music, medicine, physics and more. It is through these collaborations that the importance of computer science in a broader sense is best appreciated.</p>
          </div>
        );
      case 'lifeAboutTown':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Life About Town</h2>
            <p>Yale is the focal point for much of the intellectual and cultural life of New Haven. Yale offers two symphony orchestras, a symphonic wind ensemble, a jazz ensemble, the Yale Repertory Theater, the Yale Art Gallery, the British Art Center, and more than a thousand informal concerts, recitals, and theatrical productions each year. Many of these events are presented by undergraduate members of Yale College; others are presented by the Schools of Fine Art, Drama, and Music.</p>
          </div>
        );
      case 'directions':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Directions</h2>
            <p>Our campus is conveniently located in the heart of Patna, making it easily accessible by various modes of transportation. The department is situated within the main college building, with clear signage to guide visitors.</p>
          </div>
        );
      case 'facilities':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Computing Facilities</h2>
            <p>Our department is equipped with state-of-the-art computing facilities including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Multiple computer labs with latest hardware</li>
              <li>High-speed internet connectivity</li>
              <li>Specialized software development environments</li>
              <li>Research laboratories</li>
              <li>Project rooms</li>
            </ul>
          </div>
        );
      case 'faq':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Department FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">What are the admission requirements?</h3>
                <p>Admission is based on academic merit and entrance examination performance.</p>
              </div>
              <div>
                <h3 className="font-semibold">What is the duration of the course?</h3>
                <p>The BCA program is a three-year full-time course.</p>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Department Information</h2>
            <p>Welcome to the Department of Computer Applications. Please select a topic from the left panel to learn more about our department.</p>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Panel */}
        <div className="md:col-span-3">
          <Card className="bg-gray-50 border-t-4 border-t-orange-500">
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { id: 'history', label: 'History' },
                { id: 'lifeAboutTown', label: 'Life About Town' },
                { id: 'directions', label: 'Directions' },
                { id: 'facilities', label: 'Computing Facilities' },
                { id: 'faq', label: 'Department FAQ' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedContent(item.id)}
                  className="w-full text-left px-2 py-1.5 hover:bg-gray-200 rounded transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Middle Content */}
        <div className="md:col-span-6">
          <Card className="bg-gray-50 border-t-4 border-t-orange-500 h-full">
            <CardContent className="p-6">
              {getContent()}
            </CardContent>
          </Card>
        </div>

        {/* Right Panel */}
        <div className="md:col-span-3">
          <Card className="bg-gray-50 border-t-4 border-t-orange-500">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-600">
                  BCA Department,<br />
                  College of Commerce, Arts & Science<br />
                  Rajendra Nagar Terminal,<br />
                  Patna-20
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+91-1234567890</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-600">9:00 AM to 5:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">bca.department@college.edu</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;