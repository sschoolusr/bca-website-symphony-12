import { Navbar } from "../components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Clock, Phone, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content Section */}
          <div className="col-span-1 md:col-span-2 space-y-8">
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

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-tech-dark">Leadership and Contacts</h2>
              <Card>
                <CardContent className="grid md:grid-cols-2 gap-4 p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Dr. Sarah Johnson</h3>
                      <p className="text-tech-gray">Department Chair</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Dr. Michael Chen</h3>
                      <p className="text-tech-gray">Director of Graduate Studies</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Prof. Emily Williams</h3>
                      <p className="text-tech-gray">Undergraduate Program Coordinator</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <a href="mailto:sarah.johnson@university.edu" className="text-tech-purple hover:underline block">
                      sarah.johnson@university.edu
                    </a>
                    <a href="mailto:michael.chen@university.edu" className="text-tech-purple hover:underline block">
                      michael.chen@university.edu
                    </a>
                    <a href="mailto:emily.williams@university.edu" className="text-tech-purple hover:underline block">
                      emily.williams@university.edu
                    </a>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Side Panel */}
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
        </div>

        {/* Contact Information Section */}
        <section className="mt-12">
          <Card>
            <CardContent className="grid md:grid-cols-2 gap-8 p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-tech-purple" />
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-tech-gray">
                      Department of Computer Applications<br />
                      University Campus, Block A<br />
                      123 University Street<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-tech-purple" />
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-tech-gray">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-tech-purple" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone & Fax</h3>
                    <p className="text-tech-gray">
                      Phone: (555) 123-4567<br />
                      Fax: (555) 123-4568
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 text-tech-purple" />
                  <div>
                    <h3 className="font-semibold mb-2">Email Contacts</h3>
                    <div className="space-y-2">
                      <a href="mailto:registrar@university.edu" className="text-tech-purple hover:underline block">
                        Registrar: registrar@university.edu
                      </a>
                      <a href="mailto:admissions@university.edu" className="text-tech-purple hover:underline block">
                        Admissions: admissions@university.edu
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default About;