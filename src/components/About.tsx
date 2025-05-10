
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck, Brain, Zap, BarChart } from 'lucide-react';

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <Card className="border-0 shadow-lg">
    <CardContent className="p-6">
      <div className="mb-4 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary p-3 rounded-lg inline-block text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </CardContent>
  </Card>
);

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm md:text-base bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-transparent bg-clip-text font-medium mb-3">
            ABOUT ME
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Machine Learning Expertise
          </h3>
          <div className="mx-auto w-24 h-1 bg-portfolio-primary mt-4 mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I specialize in building machine learning models for real-world applications, 
            with a focus on innovative predictive systems. My expertise lies in 
            predictive modeling, data analysis, and deploying models for production use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Zap size={24} />}
            title="Predictive Modeling"
            description="Building ML models that make accurate predictions for various metrics across different industries."
          />
          <FeatureCard
            icon={<Brain size={24} />}
            title="Deep Learning"
            description="Implementing neural networks and computer vision models for image classification and analysis."
          />
          <FeatureCard
            icon={<BarChart size={24} />}
            title="Data Analysis"
            description="Converting complex datasets into actionable insights through statistical analysis and visualization."
          />
          <FeatureCard
            icon={<BadgeCheck size={24} />}
            title="Model Deployment"
            description="Deploying models to production environments for real-world applications and decision support."
          />
        </div>

        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-full opacity-20 animate-pulse"></div>
                <img
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1206&q=80"
                  alt="Profile"
                  className="absolute inset-2 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                As a Machine Learning Engineer, I've dedicated my career to developing predictive 
                models that solve real-world problems across various industries. 
                My passion lies in using technology to create innovative solutions through data science and 
                artificial intelligence.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                With expertise in Python, TensorFlow, PyTorch, and various data science tools, 
                I build end-to-end machine learning pipelines that transform raw data into 
                actionable insights. My work aims to help organizations make better decisions 
                and optimize processes through advanced machine learning techniques.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-portfolio-light dark:bg-gray-700 text-portfolio-primary px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-portfolio-light dark:bg-gray-700 text-portfolio-primary px-3 py-1 rounded-full text-sm font-medium">TensorFlow</span>
                <span className="bg-portfolio-light dark:bg-gray-700 text-portfolio-primary px-3 py-1 rounded-full text-sm font-medium">PyTorch</span>
                <span className="bg-portfolio-light dark:bg-gray-700 text-portfolio-primary px-3 py-1 rounded-full text-sm font-medium">Scikit-learn</span>
                <span className="bg-portfolio-light dark:bg-gray-700 text-portfolio-primary px-3 py-1 rounded-full text-sm font-medium">Computer Vision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
