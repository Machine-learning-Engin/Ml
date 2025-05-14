
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer font-bold text-2xl text-portfolio-primary mb-4 inline-block"
            >
              ML<span className="text-portfolio-secondary">Engineer</span>
            </ScrollLink>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              Specializing in machine learning solutions for agriculture and construction domains,
              with a focus on predictive modeling and data analysis.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Machine-learning-Engin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-portfolio-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/olanibi-daniel-6b90641a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-portfolio-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/ChrisMorga76471"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-portfolio-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:w-1/2">
            <div>
              <h5 className="font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-portfolio-primary transition-colors"
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-portfolio-primary transition-colors"
                  >
                    Projects
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-portfolio-primary transition-colors"
                  >
                    Skills
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-portfolio-primary transition-colors"
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4">Projects</h5>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/Machine-learning-Engin/Machine-learning" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-primary transition-colors">
                    Crop Yield Prediction
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Machine-learning-Engin/Machine-learning/blob/Maize/Drought.ipynb" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-primary transition-colors">
                    Drought Prediction
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Machine-learning-Engin/Machine-learning/blob/Maize/Comparative%20analysis%20of%20CNN%20and%20SRM%20machine%20learning%20technique%20for%20maize%20disease%20detection%20(1).ipynb" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-primary transition-colors">
                    Maize Disease Prediction
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-primary transition-colors">
                    Concrete Strength Prediction
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} ML Engineer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
