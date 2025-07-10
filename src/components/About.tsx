
import React from 'react';
import { Code, Coffee, Users, Trophy } from 'lucide-react';

const About = () => {
  const stats = [
    
  ];

  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 animate-float" style={{ background: 'var(--gradient-primary)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, passion, and what drives me to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop"
              alt="Working"
              className="rounded-lg hover-lift hover-glow"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            />
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              My Story
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Hey! I’m Isha — a full-stack dev and AI/ML explorer on a mission to build things that matter. I’m all about mixing modern web tech with smart algorithms to solve real-world problems and make life just a bit easier (or cooler 😉).
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
             When I’m not coding, I’m probably trying out new AI tools, sharing what I learn with the dev community, or hacking on side projects that push my brain in new directions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Code. Learn. Share. Repeat. That’s the vibe. 🚀
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-scale-in hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-glow" style={{ background: 'var(--gradient-primary)' }}>
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
