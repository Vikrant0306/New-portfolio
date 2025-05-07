
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-portfolio-blue-dark">About Me</h2>
          <div className="h-1 w-20 bg-portfolio-blue-light mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm passionate about creating intuitive digital experiences that solve real-world problems 
            through the intersection of creativity, technology, and artificial intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
            <CardContent className="p-6">
              <div className="p-3 rounded-full w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-portfolio-blue-dark">Development</h3>
              <p className="text-gray-600">
                I enjoy bringing ideas to life through code, creating robust and scalable applications 
                using modern frameworks and best practices.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
            <CardContent className="p-6">
              <div className="p-3 rounded-full w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-400">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-portfolio-blue-dark">UI/UX Design</h3>
              <p className="text-gray-600">
                I create intuitive, user-centered designs that make technology accessible 
                and delightful for everyone to use.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
            <CardContent className="p-6">
              <div className="p-3 rounded-full w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-400">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-portfolio-blue-dark">Machine Learning</h3>
              <p className="text-gray-600">
                I build intelligent systems using AI and machine learning techniques to solve 
                complex problems and create innovative solutions.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-blue-dark">My Journey</h3>
            <p className="text-gray-600 mb-4">
              As a B.Tech Computer Science student specializing in Information Technology, 
              I've been fortunate to explore various aspects of technology and design. 
              My passion for creating meaningful digital experiences has led me to work on 
              a diverse range of projects, from UI/UX design to machine learning applications.
            </p>
            <p className="text-gray-600 mb-4">
              When I'm not coding or designing, you'll find me on the basketball court or 
              going for a run. These activities help me maintain a balanced life and provide 
              fresh perspectives that I bring back to my technical work.
            </p>
            <p className="text-gray-600">
              I believe in continuous learning and staying updated with the latest technologies. 
              My goal is to create solutions that not only solve problems but also provide 
              delightful experiences for users.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-portfolio-gray-light p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-portfolio-blue-light mb-2">3+</div>
                <div className="text-portfolio-gray-dark font-medium">Years Experience</div>
              </div>
              <div className="bg-portfolio-gray-light p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-portfolio-blue-light mb-2">15+</div>
                <div className="text-portfolio-gray-dark font-medium">Projects</div>
              </div>
              <div className="bg-portfolio-gray-light p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-portfolio-blue-light mb-2">3+</div>
                <div className="text-portfolio-gray-dark font-medium">Internships</div>
              </div>
              <div className="bg-portfolio-gray-light p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-portfolio-blue-light mb-2">5+</div>
                <div className="text-portfolio-gray-dark font-medium">Tech Stacks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
