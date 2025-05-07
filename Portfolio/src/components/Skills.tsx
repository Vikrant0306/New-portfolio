
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Code, Globe, Database, Palette, Brain, Wrench } from 'lucide-react';

// Define the skill categories and skills
const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'Java', 'C++', 'HTML', 'CSS'],
    icon: <Code className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    category: 'Web Technologies',
    skills: ['React', 'Node.js', 'Express', 'Angular', 'Flask', 'Next.js', 'Redux', 'Tailwind CSS'],
    icon: <Globe className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-400'
  },
  {
    category: 'Database Systems',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Redis'],
    icon: <Database className="w-8 h-8" />,
    color: 'from-amber-500 to-orange-400'
  },
  {
    category: 'UI/UX & Design Tools',
    skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Sketch', 'Wireframing', 'Prototyping'],
    icon: <Palette className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-400'
  },
  {
    category: 'Machine Learning & Data Science',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'YOLO', 'Keras'],
    icon: <Brain className="w-8 h-8" />,
    color: 'from-portfolio-blue-light to-portfolio-accent'
  },
  {
    category: 'Other Tools & Technologies',
    skills: ['Git', 'Docker', 'AWS', 'Heroku', 'Vercel', 'CI/CD', 'RESTful APIs', 'GraphQL'],
    icon: <Wrench className="w-8 h-8" />,
    color: 'from-rose-500 to-red-400'
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-portfolio-gray-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-portfolio-blue-dark">My Skills</h2>
          <div className="h-1 w-20 bg-portfolio-blue-light mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I've developed expertise across various technologies and disciplines,
            enabling me to deliver comprehensive solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <CardContent className="p-6">
                <div className={cn("p-3 rounded-full w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-br text-white", category.color)}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-portfolio-blue-dark">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-white text-portfolio-gray-dark rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
