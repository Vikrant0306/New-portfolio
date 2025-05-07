
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Calendar } from 'lucide-react';

const awardsData = [
  {
    title: "1st Place - Google Developers Students Club Hackathon",
    organization: "Google Developers Students Club VIT Chennai",
    date: "September 2022",
    description: "Developed a machine learning-based health monitoring system that won first place among 40+ teams."
  },
  {
    title: "2nd Place - Next-Gen AI and Bajaj Finserv Hackathon",
    organization: "Bajaj Finserv",
    date: "March 2023",
    description: "Created an AI-powered financial assistant that provides personalized investment advice based on user spending patterns."
  },
  {
    title: "Best UI/UX Design Award - SRM Hackathon",
    organization: "SRM Institute of Science and Technology",
    date: "November 2022",
    description: "Recognized for exceptional user interface and experience design in an educational technology application."
  },
  {
    title: "Technical Innovation Award - Code for Good",
    organization: "J.P. Morgan Chase",
    date: "February 2023",
    description: "Awarded for developing an innovative solution for a non-profit organization that helps track and optimize resource distribution."
  }
];

const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-20 px-6 bg-portfolio-gray-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-portfolio-blue-dark">Awards & Recognition</h2>
          <div className="h-1 w-20 bg-portfolio-blue-light mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition received for excellence in technology innovation, design thinking, and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awardsData.map((award, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <CardContent className="p-6 flex gap-4">
                <div className="p-3 rounded-full h-fit bg-portfolio-blue-light bg-opacity-10">
                  <Award className="w-6 h-6 text-portfolio-blue-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-portfolio-blue-dark">{award.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-portfolio-accent font-medium">{award.organization}</span>
                    <span className="text-gray-400">|</span>
                    <div className="flex items-center text-portfolio-gray-dark">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{award.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
