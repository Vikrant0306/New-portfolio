
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'awards', label: 'Awards' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={cn(
                "font-medium transition-colors",
                activeSection === link.id 
                  ? "text-portfolio-blue-light" 
                  : "text-portfolio-gray-dark hover:text-portfolio-blue-light"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-gray-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4 p-6">
            {navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className={cn(
                  "font-medium transition-colors",
                  activeSection === link.id 
                    ? "text-portfolio-blue-light" 
                    : "text-portfolio-gray-dark hover:text-portfolio-blue-light"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
