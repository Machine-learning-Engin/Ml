
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

type ProjectData = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  imageLink?: string;
};

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Crop Yield Prediction System",
    description: "Machine learning model that predicts crop yields based on various environmental factors such as soil conditions, weather, and farming practices.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Python", "TensorFlow", "Random Forest", "Flask"],
    githubLink: "https://github.com/Machine-learning-Engin/Machine-learning",
    demoLink: "#",
    imageLink: "https://github.com/Machine-learning-Engin/Machine-learning"
  },
  {
    id: 2,
    title: "Drought Prediction System",
    description: "A predictive model using LSTM, SVC, and Random Forest algorithms to forecast drought conditions based on historical weather data and soil moisture analysis.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3024&q=80",
    technologies: ["Python", "LSTM", "SVC", "Random Forest"],
    githubLink: "https://github.com/Machine-learning-Engin/Machine-learning/blob/Maize/Drought.ipynb",
    imageLink: "https://github.com/Machine-learning-Engin/Machine-learning/blob/Maize/Drought.ipynb"
  },
  {
    id: 3,
    title: "Maize Disease Prediction System",
    description: "Computer vision application that identifies diseases in maize plants from images, helping farmers take early interventions to protect crops.",
    image: "https://images.unsplash.com/photo-1543769657-fcf1236421bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80",
    technologies: ["PyTorch", "CNN", "Transfer Learning", "Streamlit"],
    githubLink: "https://github.com/Machine-learning-Engin/Machine-learning/blob/Maize/Comparative%20analysis%20of%20CNN%20and%20SRM%20machine%20learning%20technique%20for%20maize%20disease%20detection%20(1).ipynb",
    demoLink: "#",
    imageLink: "https://github.com/Machine-learning-Engin/Machine-learning/blob/Maize/Comparative%20analysis%20of%20CNN%20and%20SRM%20machine%20learning%20technique%20for%20maize%20disease%20detection%20(1).ipynb"
  },
  {
    id: 4,
    title: "Concrete Strength Prediction System",
    description: "ML model that predicts concrete strength based on mixture composition and curing conditions, optimizing construction material performance.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Scikit-learn", "Regression", "Feature Engineering", "Django"],
    githubLink: "https://github.com/Machine-learning-Engin/Machine-learning/blob/Concrete-Ml/Concrete%20prediction.ipynb",
    imageLink: "https://github.com/Machine-learning-Engin/Machine-learning/blob/Concrete-Ml/Concrete%20prediction.ipynb"
  }
];

const ProjectCard = ({ project }: { project: ProjectData }) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg project-card">
      <div className="relative overflow-hidden h-56">
        {project.imageLink ? (
          <a href={project.imageLink} target="_blank" rel="noopener noreferrer" className="block h-full">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 card-image" 
            />
          </a>
        ) : (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 card-image" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 project-overlay flex items-end">
          <div className="p-6">
            <div className="flex space-x-2 mb-3">
              <Button size="sm" variant="default" asChild className="bg-portfolio-primary hover:bg-portfolio-primary/90">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <Github className="mr-1 h-4 w-4" />
                  <span>Code</span>
                </a>
              </Button>
              {project.demoLink && (
                <Button size="sm" variant="secondary" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    <ExternalLink className="mr-1 h-4 w-4" />
                    <span>Demo</span>
                  </a>
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm md:text-base bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-transparent bg-clip-text font-medium mb-3">
            MY PROJECTS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Featured ML Projects
          </h3>
          <div className="mx-auto w-24 h-1 bg-portfolio-primary mt-4 mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of machine learning projects focused on solving real-world 
            problems in agriculture and construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
