
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-portfolio-gray-light px-6 pt-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-portfolio-blue-dark">
            Hi, I'm <span className="text-portfolio-blue-light">Vikrant Kumar Singh</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-portfolio-gray-dark">
            Blending Creativity, AI, and Technology
          </h2>
          <p className="text-lg mb-8 text-gray-600 max-w-lg">
            B.Tech Computer Science student specializing in Information Technology, 
            with expertise in UI/UX design, web development, and machine learning.
            Passionate about solving complex problems using technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-portfolio-blue-light hover:bg-portfolio-accent transition-all flex items-center gap-2"
              onClick={() => window.open('https://www.linkedin.com/', '_blank')}
            >
              <Linkedin size={18} />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-blue-light text-portfolio-blue-light hover:bg-portfolio-blue-light hover:text-white flex items-center gap-2"
              onClick={() => window.open('https://github.com/', '_blank')}
            >
              <Github size={18} />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-portfolio-blue-light to-portfolio-accent rounded-full overflow-hidden">
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center text-5xl font-bold text-portfolio-blue-light">
              VKS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
