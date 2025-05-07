
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Form submission logic would go here in a real implementation
    console.log('Form data:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-portfolio-gray-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-portfolio-blue-dark">Get In Touch</h2>
          <div className="h-1 w-20 bg-portfolio-blue-light mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-blue-dark">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-gray-light p-3 rounded-full">
                  <Mail className="w-6 h-6 text-portfolio-blue-light" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-portfolio-gray-dark">Email</h4>
                  <a href="mailto:vikrantsingh121931@gmail.com" className="text-portfolio-blue-light hover:underline">
                    vikrantsingh121931@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-gray-light p-3 rounded-full">
                  <Phone className="w-6 h-6 text-portfolio-blue-light" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-portfolio-gray-dark">Phone</h4>
                  <a href="tel:+918919134912" className="text-portfolio-blue-light hover:underline">
                    +91 8919134912
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-gray-light p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-portfolio-blue-light" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-portfolio-gray-dark">Location</h4>
                  <p className="text-gray-600">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-blue-dark">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-portfolio-gray-light p-3 rounded-full hover:bg-portfolio-blue-light hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-portfolio-gray-light p-3 rounded-full hover:bg-portfolio-blue-light hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <Card className="shadow-lg animate-fade-in">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-blue-dark">Send Me a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-portfolio-gray-dark">Name</label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      required 
                      className="border-portfolio-gray-light focus:border-portfolio-blue-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-portfolio-gray-dark">Email</label>
                    <Input 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="Your email" 
                      required 
                      className="border-portfolio-gray-light focus:border-portfolio-blue-light"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-portfolio-gray-dark">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?" 
                    required 
                    className="border-portfolio-gray-light focus:border-portfolio-blue-light"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-portfolio-gray-dark">Message</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message" 
                    required 
                    className="min-h-32 border-portfolio-gray-light focus:border-portfolio-blue-light"
                  />
                </div>
                <Button 
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-portfolio-blue-light hover:bg-portfolio-accent transition-all"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
