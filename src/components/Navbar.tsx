import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: 'Home', path: '/' },
  { 
    name: 'Events', 
    path: '/events',
    dropdownItems: [
      { name: 'Workshops', path: '/events#workshops' },
      { name: 'Seminars', path: '/events#seminars' },
      { name: 'Tech Fests', path: '/events#tech-fests' },
    ]
  },
  { name: 'About', path: '/about' },
  { name: 'Faculties', path: '/faculties' },
  { name: 'Syllabus', path: '/syllabus' },
  { name: 'Contact', path: '/contact' },
  { name: 'Gallery', path: '/gallery' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-tech-dark hover:text-tech-purple transition-colors">
              BCA
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.dropdownItems ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger 
                    className={`flex items-center space-x-1 text-tech-gray hover:text-tech-purple transition-colors ${
                      isActive(item.path) ? 'text-tech-purple' : ''
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.dropdownItems.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.name}>
                        <Link 
                          to={dropdownItem.path}
                          className="w-full text-tech-gray hover:text-tech-purple transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-tech-gray hover:text-tech-purple transition-colors relative group ${
                    isActive(item.path) ? 'text-tech-purple' : ''
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-tech-purple transform origin-left transition-transform duration-300 ${
                      isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              )
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-tech-dark hover:text-tech-purple transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg animate-fade-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdownItems ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-tech-gray font-semibold">
                        {item.name}
                      </div>
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-3 py-2 pl-6 text-tech-gray hover:text-tech-purple transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 text-tech-gray hover:text-tech-purple transition-colors ${
                        isActive(item.path) ? 'text-tech-purple' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};