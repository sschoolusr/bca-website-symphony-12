import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    // Add form submission logic here
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Connect with the BCA Department to learn more about our programs, facilities, and activities. 
          We are here to guide and assist you in your academic journey.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-tech-purple" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">
                    BCA Department, College of Commerce, Arts & Science<br />
                    Rajendra Nagar Terminal, Patna-20
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-tech-purple" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">+91-1234567890</p>
                  <p className="text-sm text-gray-500">Office Hours: 9:00 AM to 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-tech-purple" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">bca.department@college.edu</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-600 hover:text-tech-purple transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-tech-purple transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-tech-purple transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-tech-purple transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5133637676064!2d85.1397!3d25.5941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM1JzM4LjgiTiA4NcKwMDgnMjIuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};