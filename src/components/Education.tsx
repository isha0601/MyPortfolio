
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor or Technology',
      school: 'Vishwakarma Institute of Information Technology',
      period: '2023 - 2027',
      location: 'Pune, Maharashtra,India',
    },
    {
      degree: 'HSC',
      school: 'Adv. Yadavrao Dhote Junior College',
      period: '2021 - 2023',
      location: 'Rajura,Maharashtra, India',
    },
    {
      degree: 'JEE Mains & Advanced Preparation',
      school: 'Allen Career Institute',
      period: '2021 - 2023',
      location: 'Nagpur,Maharashtra, India',
    },
    {
      degree: 'SSC',
      school: 'Montfort Higher Secondary School',
      period: '2020 - 2021',
      location: 'Ballarshah, Maharashtra,India',
    },
  ];

  const certifications = [
    {
      name: 'AWS APAC - Solutions Architecture Job Simulation',
      issuer: 'Forage',
      year: '2025',
      badge: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop',
    },
    {
      name: 'Accenture Nordics - Software Engineering Job Simulation',
      issuer: 'Forage',
      year: '2025',
      badge: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop',
    },
    {
      name: 'MySQL Bootcamp',
      issuer: 'LetsUpgrade',
      year: '2025',
      badge: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop',
    },
    {
      name: 'Postman API Fundamentals Student Expert',
      issuer: 'Canvas Credentials (Badgr)',
      year: '2025',
      badge: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop',
    },
    {
      name: 'The Complete PL/SQL Bootcamp : "Begineer to Advanced PL/SQL" ',
      issuer: 'Udemy',
      year: '2025',
      badge: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop',
    },
    {
      name: 'The Complete Full-Stack Web Development Bootcamp',
      issuer: 'Udemy',
      year: '2025',
      badge: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop',
    },
    {
      name: '100 Days of Code - The Complete Python Pro Bootcamp',
      issuer: 'Udemy',
      year: '2025',
      badge: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop',
    },
    {
      name: 'NinjaSlayground',
      issuer: 'Coding Ninjas',
      year: '2024',
      badge: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop',
    },

  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications that keep me at the forefront of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <GraduationCap className="mr-3 text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-card-foreground mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-primary font-semibold mb-2">
                    {edu.school}
                  </p>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <Calendar size={16} className="mr-2" />
                    {edu.period}
                  </div>
                  
                  <p className="text-muted-foreground flex items-center">
                  <MapPin size={16} className="mr-1" />{edu.location}
                  </p>
                      
                  
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center">
                    <img
                      src={cert.badge}
                      alt={cert.name}
                      className="w-12 h-12 rounded-lg mr-4"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-card-foreground">
                        {cert.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
