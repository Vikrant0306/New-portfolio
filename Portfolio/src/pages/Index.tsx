
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Awards from '../components/Awards';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
        const sectionId = htmlSection.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Awards />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
