
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Crop Recommendation System",
    description: "A machine learning system that recommends optimal crop choices based on soil composition, climate data, and geographical factors.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Flask", "React"],
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=600&h=400",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 2,
    title: "Hand Gesture Recognition System",
    description: "Computer vision application that recognizes hand gestures in real-time for human-computer interaction and sign language interpretation.",
    technologies: ["Python", "OpenCV", "TensorFlow", "MediaPipe", "Keras"],
    image: "https://images.unsplash.com/photo-1527239441953-caffd968d952?auto=format&fit=crop&w=600&h=400",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 3,
    title: "License Plate Recognition",
    description: "An automated system that detects and recognizes license plates from images and video streams using deep learning algorithms.",
    technologies: ["Python", "OpenCV", "YOLO", "OCR", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 4,
    title: "Dawaai",
    description: "A comprehensive healthcare application for medication management, prescription tracking, and connecting patients with healthcare providers.",
    technologies: ["React Native", "Firebase", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&h=400",
    demoUrl: "#",
    codeUrl: "#"
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-portfolio-blue-dark">Featured Projects</h2>
          <div className="h-1 w-20 bg-portfolio-blue-light mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills in development,
            design, and machine learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col">
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3 text-portfolio-blue-dark">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-portfolio-gray-light text-portfolio-gray-dark text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-4">
                <Button variant="outline" size="sm" className="flex-1 border-portfolio-blue-light text-portfolio-blue-light hover:bg-portfolio-blue-light hover:text-white flex items-center justify-center gap-2">
                  <ExternalLink size={16} />
                  <a href={project.demoUrl} className="w-full">Live Demo</a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white flex items-center justify-center gap-2">
                  <Github size={16} />
                  <a href={project.codeUrl} className="w-full">View Code</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
