
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    institution: "SRM Institute of Science and Technology",
    degree: "B.Tech in Computer Science and Engineering (Information Technology)",
    duration: "2020 - 2024",
    location: "Chennai, India",
    gpa: "9.43/10.0",
    achievements: [
      "Dean's List student for all semesters",
      "Technical Lead for college coding club",
      "Published research paper on AI applications in healthcare",
      "Represented university in multiple hackathons and coding competitions"
    ]
  },
  {
    institution: "Navy Children School",
    degree: "Secondary Education",
    duration: "2018 - 2020",
    location: "Visakhapatnam, India",
    gpa: "92%",
    achievements: [
      "School prefect and student council member",
      "Winner of interschool science and technology exhibition",
      "Captain of basketball team",
      "Received outstanding academic achievement award"
    ]
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-portfolio-blue-dark">Education</h2>
          <div className="h-1 w-20 bg-portfolio-blue-light mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic background has provided me with a strong foundation in computer science
            and has fostered my passion for technology and innovation.
          </p>
        </div>
        
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg duration-300 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  <div className="p-3 rounded-full bg-portfolio-blue-light bg-opacity-10">
                    <GraduationCap className="w-6 h-6 text-portfolio-blue-light" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-portfolio-blue-dark">{education.institution}</h3>
                    <h4 className="text-lg font-medium text-portfolio-accent mb-2">{education.degree}</h4>
                  </div>
                  <div className="flex items-center text-portfolio-gray-dark">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{education.duration}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-portfolio-gray-dark mb-1">{education.location}</p>
                  <p className="text-portfolio-blue-light font-medium">GPA: {education.gpa}</p>
                </div>
                
                <h5 className="text-md font-semibold text-portfolio-gray-dark mb-2">Achievements & Activities</h5>
                <ul className="list-disc list-outside ml-6 space-y-2">
                  {education.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600">{achievement}</li>
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

export default Education;
