
import React from 'react';
import { Progress } from '@/components/ui/progress';

type SkillCategory = {
  category: string;
  skills: {
    name: string;
    percentage: number;
  }[];
};

const skillsData: SkillCategory[] = [
  {
    category: "Machine Learning",
    skills: [
      { name: "Supervised Learning", percentage: 95 },
      { name: "Unsupervised Learning", percentage: 90 },
      { name: "Neural Networks", percentage: 85 },
      { name: "Computer Vision", percentage: 80 },
      { name: "Time Series Analysis", percentage: 85 }
    ]
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", percentage: 95 },
      { name: "R", percentage: 80 },
      { name: "SQL", percentage: 85 },
      { name: "Java", percentage: 70 },
      { name: "JavaScript", percentage: 65 }
    ]
  },
  {
    category: "Tools & Frameworks",
    skills: [
      { name: "TensorFlow", percentage: 90 },
      { name: "PyTorch", percentage: 85 },
      { name: "Scikit-learn", percentage: 95 },
      { name: "Pandas", percentage: 95 },
      { name: "Docker", percentage: 75 }
    ]
  },
  {
    category: "Domain Knowledge",
    skills: [
      { name: "Agriculture", percentage: 95 },
      { name: "Environmental Science", percentage: 85 },
      { name: "Construction Materials", percentage: 80 },
      { name: "Geospatial Analysis", percentage: 75 },
      { name: "Statistical Analysis", percentage: 90 }
    ]
  }
];

const SkillItem = ({ 
  name, 
  percentage 
}: { 
  name: string; 
  percentage: number;
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm text-portfolio-primary">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2 bg-gray-200 dark:bg-gray-700" indicatorColor="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary" />
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
            A comprehensive overview of my technical skills and domain knowledge 
            in machine learning and related technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-6 text-portfolio-primary">{category.category}</h4>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h4 className="text-xl font-bold mb-6">Other Technologies & Tools</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Keras", "NLTK", "Matplotlib", "Seaborn", "Flask", "FastAPI", 
              "Django", "AWS", "GCP", "Azure ML", "Jupyter", "Git", "CI/CD",
              "MongoDB", "PostgreSQL", "Tableau", "Power BI", "Linux"
            ].map((item, i) => (
              <span 
                key={i}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
