import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Full-width title image */}
      <div className="w-full h-[40vh] relative">
        <img
          src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
          alt="Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-6">Welcome to Computer Applications</h1>
            <p className="text-lg text-gray-600 mb-8">
              The Department of Computer Applications at our institution is dedicated to advancing the field of computer science through groundbreaking research and exceptional education.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link to="/about">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">About Us</h3>
                    <p className="text-gray-600 mb-4">Learn about our mission, vision, and values</p>
                    <Button variant="outline" className="w-full">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/events">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Events</h3>
                    <p className="text-gray-600 mb-4">Discover our upcoming events and activities</p>
                    <Button variant="outline" className="w-full">
                      View Events <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <nav className="space-y-2">
                  <Link to="/syllabus" className="block text-tech-purple hover:underline">Course Syllabus</Link>
                  <Link to="/faculties" className="block text-tech-purple hover:underline">Faculty Directory</Link>
                  <Link to="/gallery" className="block text-tech-purple hover:underline">Photo Gallery</Link>
                  <Link to="/contact" className="block text-tech-purple hover:underline">Contact Us</Link>
                </nav>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Announcements</h3>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">New research opportunities available for final year students</p>
                  <p className="text-sm text-gray-600">Upcoming workshop on AI and Machine Learning</p>
                  <Link to="/events" className="text-tech-purple hover:underline text-sm">View all announcements</Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Research Areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Artificial Intelligence</li>
                <li>Data Science</li>
                <li>Cloud Computing</li>
                <li>Cybersecurity</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Student Life</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Tech Clubs</li>
                <li>Coding Competitions</li>
                <li>Industry Visits</li>
                <li>Cultural Activities</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Career Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Placement Assistance</li>
                <li>Industry Partners</li>
                <li>Alumni Network</li>
                <li>Internship Programs</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Home;