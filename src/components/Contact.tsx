
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm md:text-base bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-transparent bg-clip-text font-medium mb-3">
            GET IN TOUCH
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Contact Me
          </h3>
          <div className="mx-auto w-24 h-1 bg-portfolio-primary mt-4 mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss collaboration opportunities?
            Feel free to reach out to me using the form below or through my contact information.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg h-full">
              <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-portfolio-light dark:bg-gray-800 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-portfolio-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Email</h5>
                    <a href="mailto:lanibidaniel@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-primary">
                      lanibidaniel@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-portfolio-light dark:bg-gray-800 p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-portfolio-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Phone</h5>
                    <a href="tel:+2347011515613" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-primary">
                      +2347011515613
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold mb-6">Send a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="bg-gray-50 dark:bg-gray-800"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="min-h-[150px] bg-gray-50 dark:bg-gray-800"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-portfolio-primary to-portfolio-secondary hover:bg-gradient-to-l" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
