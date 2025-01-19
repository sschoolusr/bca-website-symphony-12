import { Navbar } from "../components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Clock, Phone, MapPin, Bus, Train, Car } from "lucide-react";
import MapComponent from "../components/MapComponent";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Additional Resources Panel - Left Side */}
          <div className="col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
                <nav className="space-y-3">
                  <a href="#history" className="text-tech-purple hover:underline block">History</a>
                  <a href="#life" className="text-tech-purple hover:underline block">Life About Town</a>
                  <a href="#directions" className="text-tech-purple hover:underline block">Directions</a>
                  <a href="#facilities" className="text-tech-purple hover:underline block">Computing Facilities</a>
                  <a href="#faq" className="text-tech-purple hover:underline block">Department FAQ</a>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Section */}
          <div className="col-span-1">
            <section className="space-y-6">
              <h1 className="text-4xl font-bold text-center text-tech-dark mb-8">
                Department Information
              </h1>
              <p className="text-tech-gray text-lg leading-relaxed">
                The Department of Computer Applications is dedicated to fostering excellence 
                in computer science education and research. Our mission is to prepare students 
                for successful careers in technology through comprehensive education, practical 
                experience, and innovative research opportunities.
              </p>
            </section>

            {/* Map and Directions Section */}
            <section className="mt-8 space-y-6">
              <h2 className="text-2xl font-semibold text-tech-dark">Map and Directions</h2>
              <MapComponent />
              
              <div className="space-y-6 mt-6">
                <h3 className="text-xl font-semibold">How to Reach Us</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Train className="w-5 h-5 mt-1 text-tech-purple" />
                    <div>
                      <h4 className="font-semibold">By Train</h4>
                      <p className="text-tech-gray">
                        From Patna Junction, take an auto-rickshaw or taxi to Rajendra Nagar Terminal. 
                        The college is located 5 minutes from the terminal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Bus className="w-5 h-5 mt-1 text-tech-purple" />
                    <div>
                      <h4 className="font-semibold">By Bus</h4>
                      <p className="text-tech-gray">
                        Take any city bus to Rajendra Nagar Terminal. Multiple bus routes connect 
                        to our location from different parts of the city.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 mt-1 text-tech-purple" />
                    <div>
                      <h4 className="font-semibold">By Car</h4>
                      <p className="text-tech-gray">
                        Follow Bailey Road towards Rajendra Nagar Terminal. The college is 
                        visible on the right side with ample parking space available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Contact Information - Right Side */}
          <div className="col-span-1">
            <Card>
              <CardContent className="p-6 space-y-6">
                <h2 className="text-xl font-semibold">Contact Us</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 text-tech-purple" />
                    <div>
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p className="text-tech-gray">
                        BCA Department,<br />
                        College of Commerce, Arts & Science<br />
                        Rajendra Nagar Terminal,<br />
                        Patna-20
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-1 text-tech-purple" />
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-tech-gray">+91-1234567890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-1 text-tech-purple" />
                    <div>
                      <h3 className="font-semibold mb-2">Office Hours</h3>
                      <p className="text-tech-gray">9:00 AM to 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 text-tech-purple" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <a href="mailto:bca.department@college.edu" className="text-tech-purple hover:underline">
                        bca.department@college.edu
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;