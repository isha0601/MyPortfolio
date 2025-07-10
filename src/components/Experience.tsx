
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'HTML/CSS Developer',
      company: 'Innovatecloud Solutions',
      location: 'Remote',
      period: '2025',
      description: [
        
      ],
    },
    {
      title: 'SQL Developer',
      company: 'Innovatecloud Solutions',
      location: 'Remote',
      period: '2025',
      description: [
        
      ],
    },
    {
      title: 'Full Stack Development',
      company: 'Pratinik Infotecg',
      location: 'Remote',
      period: '2025',
      description: [
      
      ],
    },
    {
      title: 'Campus Ambassador',
      company: 'GirlScript Summer of Code',
      location: 'Remote',
      period: '2025',
      description: [
        
      ],
    },
    {
      title: 'Student Ambassador Program',
      company: 'LetsUpgrade',
      location: 'Remote',
      period: '2025',
      description: [
        
      ],
    },
    {
      title: 'Internshala Student Program',
      company: 'Internshala',
      location: 'Remote',
      period: '2025',
      description: [
        
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full -translate-x-1/2"></div>
              
              <div className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                    <div className="flex items-center mb-1">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
