
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Calendar } from 'lucide-react';

const certificationsData = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera - Stanford University",
    date: "August 2022",
    credentialId: "MLSP-9876-5432"
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "June 2022",
    credentialId: "FSWD-1234-5678"
  },
  {
    title: "UI/UX Design Professional Certificate",
    issuer: "Google - Coursera",
    date: "November 2021",
    credentialId: "UXDC-5678-9012"
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "March 2023",
    credentialId: "AWS-3456-7890"
  },
  {
    title: "TensorFlow Developer Certification",
    issuer: "Google",
    date: "January 2023",
    credentialId: "TF-7890-1234"
  },
  {
    title: "Python for Data Science and AI",
    issuer: "IBM - Coursera",
    date: "May 2022",
    credentialId: "PDSA-2345-6789"
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-portfolio-blue-dark">Certifications</h2>
          <div className="h-1 w-20 bg-portfolio-blue-light mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my skills and knowledge in various technology domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((certification, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <CardContent className="p-6 flex gap-4">
                <div className="p-3 rounded-full h-fit bg-portfolio-blue-light bg-opacity-10">
                  <FileText className="w-6 h-6 text-portfolio-blue-light" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-portfolio-blue-dark">{certification.title}</h3>
                  <p className="text-portfolio-accent font-medium mb-1">{certification.issuer}</p>
                  <div className="flex items-center text-portfolio-gray-dark mb-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{certification.date}</span>
                  </div>
                  <p className="text-gray-500 text-sm">Credential ID: {certification.credentialId}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
