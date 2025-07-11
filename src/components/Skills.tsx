
import React from 'react';
import { Button } from '@/components/ui/button';

const Skills = () => {
  const skills = [

    'Technical Communication',
    'Data Structures',
    'Algorithms',
    'Problem Solving',
    'C Programming',
    'C++',
    'Java',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'RESTful APIs',
    'Bootstrap',
    'Tailwind CSS',
    'jQuery',
    'Git',
    'GitHub',
    'Next.js',
    'Linux',
    'MySQL',
    'PL/SQL',
    'Microsoft Power BI',
    'Data Visualization',
    'Data Analysis',
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Redux',
    'Tableau',
    'Operating Systems',
    'API Testing',
    'Rest APIs',
    'Postman',
    'PostgreSQL',
    'Figma',
    'Canva',
    'NumPy',
    'Pandas',
    'Matplotlib',
    'Seaborn',
    'Scikit-learn',
    'TensorFlow',
    'Data Science',
    'Object-Oriented Programming',
    'Competitive Programming',
    'Streamlit',
    'Web Development',
    'Full Stack Development',
    'Vercel',

    
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Button
              key={index}
              variant="outline"
              className="text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {skill}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
