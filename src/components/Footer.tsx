import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-tech-dark text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-tech-purple transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-tech-purple transition-colors">About</Link></li>
            <li><Link to="/events" className="hover:text-tech-purple transition-colors">Events</Link></li>
            <li><Link to="/syllabus" className="hover:text-tech-purple transition-colors">Syllabus</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              BCA Department, Patna-20
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91-1234567890
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              bca.department@college.edu
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-tech-purple transition-colors">Student Portal</a></li>
            <li><a href="#" className="hover:text-tech-purple transition-colors">Library</a></li>
            <li><a href="#" className="hover:text-tech-purple transition-colors">Research</a></li>
            <li><a href="#" className="hover:text-tech-purple transition-colors">Alumni</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-tech-purple transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-tech-purple transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-tech-purple transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-tech-purple transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm">
          © 2024 BCA Department. All rights reserved.
        </div>
      </div>
    </footer>
  );
};