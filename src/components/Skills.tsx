
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

type Skill = {
  name: string;
  proficiency: number;
  category: 'machine-learning' | 'programming' | 'tools';
  color?: string;
};

const Skills = () => {
  const skills: Skill[] = [
    // Machine Learning
    { 
      name: 'Predictive Modeling', 
      proficiency: 95, 
      category: 'machine-learning', 
      color: 'bg-blue-500' 
    },
    { 
      name: 'Deep Learning', 
      proficiency: 90, 
      category: 'machine-learning', 
      color: 'bg-blue-500' 
    },
    { 
      name: 'NLP', 
      proficiency: 85, 
      category: 'machine-learning', 
      color: 'bg-blue-500' 
    },
    { 
      name: 'Computer Vision', 
      proficiency: 88, 
      category: 'machine-learning', 
      color: 'bg-blue-500' 
    },
    
    // Programming
    { 
      name: 'Python', 
      proficiency: 95, 
      category: 'programming', 
      color: 'bg-purple-500'
    },
    { 
      name: 'R', 
      proficiency: 80, 
      category: 'programming', 
      color: 'bg-purple-500'
    },
    { 
      name: 'SQL', 
      proficiency: 85, 
      category: 'programming', 
      color: 'bg-purple-500'
    },
    { 
      name: 'Java', 
      proficiency: 75, 
      category: 'programming', 
      color: 'bg-purple-500'
    },
    
    // Tools
    { 
      name: 'TensorFlow', 
      proficiency: 92, 
      category: 'tools', 
      color: 'bg-green-500'
    },
    { 
      name: 'PyTorch', 
      proficiency: 90, 
      category: 'tools', 
      color: 'bg-green-500'
    },
    { 
      name: 'Scikit-Learn', 
      proficiency: 95, 
      category: 'tools', 
      color: 'bg-green-500'
    },
    { 
      name: 'Docker', 
      proficiency: 82, 
      category: 'tools', 
      color: 'bg-green-500'
    },
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm md:text-base bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-transparent bg-clip-text font-medium mb-3">
            MY SKILLS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Technical Expertise
          </h3>
          <div className="mx-auto w-24 h-1 bg-portfolio-primary mt-4 mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            As a Machine Learning Engineer, I've developed expertise in various technologies and tools.
            Here's an overview of my technical skills across different domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="shadow-lg border-t-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Machine Learning</h3>
              <div className="space-y-4">
                {getSkillsByCategory('machine-learning').map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className={`h-2 ${skill.color ? skill.color : ''}`} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-t-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Programming</h3>
              <div className="space-y-4">
                {getSkillsByCategory('programming').map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className={`h-2 ${skill.color ? skill.color : ''}`} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-t-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">Tools & Frameworks</h3>
              <div className="space-y-4">
                {getSkillsByCategory('tools').map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className={`h-2 ${skill.color ? skill.color : ''}`} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
