import { Navbar } from "../components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Additional Resources Panel - Left Side */}
          <div className="col-span-1 order-1 lg:order-1">
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
          <div className="col-span-1 lg:col-span-1 order-2 lg:order-2">
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
          </div>

          {/* Contact Information - Right Side */}
          <div className="col-span-1 order-3 lg:order-3">
            <Card>
              <CardContent className="p-6 space-y-6">
                <h2 className="text-xl font-semibold">Contact Us</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
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
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-tech-gray">+91-1234567890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div>
                      <h3 className="font-semibold mb-2">Office Hours</h3>
                      <p className="text-tech-gray">9:00 AM to 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
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