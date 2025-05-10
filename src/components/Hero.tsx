
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-gradient-to-br from-portfolio-light via-white to-blue-50 dark:from-gray-900 dark:via-portfolio-dark dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-10 md:mb-0 md:pr-8">
            <div className="space-y-6">
              <div>
                <h2 className="inline-block text-sm md:text-base bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-transparent bg-clip-text font-medium mb-3">
                  MACHINE LEARNING ENGINEER
                </h2>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Building <span className="text-portfolio-primary">Predictive Systems</span> for Future Uses
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 md:pr-10">
                Specializing in developing machine learning models for innovative applications across industries,
                with expertise in deep learning, computer vision, and predictive analytics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary hover:bg-gradient-to-l text-white px-8 py-6 text-lg">
                  <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer"
                  >
                    View Projects
                  </ScrollLink>
                </Button>
                <Button variant="outline" className="text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:border-portfolio-primary hover:text-portfolio-primary px-8 py-6 text-lg">
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Contact Me
                  </ScrollLink>
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="relative w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1206&q=80"
                alt="Machine Learning visualization"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 inline-flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-white text-sm font-medium">ML Models in Production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer flex flex-col items-center animate-bounce"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
          <ArrowDown className="h-4 w-4 text-portfolio-primary" />
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
