
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Chief Executive Officer",
    company: "Coding Ninjas SRM",
    duration: "May 2022 - Present",
    location: "Chennai, India",
    description: [
      "Led a team of 20+ members to organize tech events and workshops",
      "Managed partnerships with tech companies for sponsorships and collaborations",
      "Increased community engagement by 40% through innovative outreach programs",
      "Oversaw the planning and execution of 10+ coding competitions and hackathons"
    ]
  },
  {
    title: "UI/UX Intern",
    company: "Fuelemy",
    duration: "June 2022 - August 2022",
    location: "Remote",
    description: [
      "Designed user interfaces for educational platform using Figma",
      "Collaborated with development team to implement UI designs",
      "Conducted user testing and incorporated feedback to improve UI/UX",
      "Created wireframes and prototypes for new features"
    ]
  },
  {
    title: "Graphic Designer Intern",
    company: "RecruitNXT",
    duration: "May 2021 - June 2021",
    location: "Remote",
    description: [
      "Designed marketing materials for social media and web platforms",
      "Created brand assets and visual identity elements",
      "Developed presentation templates and infographics",
      "Collaborated with marketing team to align visual designs with brand strategy"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-portfolio-gray-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-portfolio-blue-dark">Professional Experience</h2>
          <div className="h-1 w-20 bg-portfolio-blue-light mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey has allowed me to work in various roles, gaining experience in
            leadership, design, and development.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg duration-300 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  <div className="p-3 rounded-full bg-portfolio-blue-light bg-opacity-10">
                    <Briefcase className="w-6 h-6 text-portfolio-blue-light" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-portfolio-blue-dark">{experience.title}</h3>
                    <h4 className="text-lg font-medium text-portfolio-accent mb-1">{experience.company}</h4>
                  </div>
                  <div className="flex items-center text-portfolio-gray-dark">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                </div>
                <p className="text-portfolio-gray-dark mb-4">{experience.location}</p>
                <ul className="list-disc list-outside ml-6 space-y-2">
                  {experience.description.map((point, i) => (
                    <li key={i} className="text-gray-600">{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
