


import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'AI Voice Translator',
      description: 'A real-time AI speech-to-speech translator with auto language detection, voice options, sentiment analysis, audio download, PDF export, and conversation mode.',
      image: 'https://images.unsplash.com/photo-1581091870622-4c4c39e7e4ab?w=500&h=300&fit=crop',
      tags: ['Python', 'Streamlit', 'Google Cloud API', 'gTTS', 'Speech Recognition'],
      liveUrl: '#',
      githubUrl: 'https://github.com/isha0601/AI-Voice-Translator',
      type: 'Web Application',
    },
    {
      title: 'Code Explainer',
      description: 'AI-powered tool that explains code step-by-step, generates quizzes, supports multiple languages, file uploads, and PDF export.',
      image: 'https://images.unsplash.com/photo-1537432376769-00a2f7f03861?w=500&h=300&fit=crop',
      tags: ['Python', 'Streamlit', 'Google Gemini API', 'ReportLab'],
      liveUrl: '#',
      githubUrl: 'https://github.com/isha0601/Code-Explainer',
      type: 'Web Application',
    },
    {
      title: 'Heart Disease Risk Predictor',
      description: 'ML app to predict heart disease risk using clinical data. Shows model accuracy, heatmap visualizations, built with Streamlit.',
      image: 'https://images.unsplash.com/photo-1579154204601-01599a58077b?w=500&h=300&fit=crop',
      tags: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'Seaborn'],
      liveUrl: '#',
      githubUrl: 'https://github.com/isha0601/Heart-Disease-Risk-Predictor',
      type: 'Web Application',
    },
    {
      title: 'Instagram Photo Uploader',
      description: 'Upload photos to Instagram straight from your browser. Features drag-and-drop, caption, hashtag suggestions & session persistence.',
      image: 'https://images.unsplash.com/photo-1549921296-3cce7abf1a06?w=500&h=300&fit=crop',
      tags: ['Python', 'Streamlit', 'instagrapi', 'Pillow'],
      liveUrl: '#',
      githubUrl: 'https://github.com/isha0601/Instagram-Photo-Uploader',
      type: 'Web Application',
    },
    {
      title: 'Mood Tracker',
      description: 'Full-stack mood tracker with JWT auth, Chart.js visualizations, daily mood logs with notes, built with Node.js & MongoDB.',
      image: 'https://images.unsplash.com/photo-1494172961521-33799ddd43a5?w=500&h=300&fit=crop',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/isha0601/Mood-Tracker',
      type: 'Web Application',
    },
    {
      title: 'Movie Recommendation System',
      description: 'Suggests movies, shows posters via OMDB, pulls trailers from YouTube, secure API key management. Search-as-you-type!',
      image: 'https://images.unsplash.com/photo-1614064641637-3c71c37f0700?w=500&h=300&fit=crop',
      tags: ['Python', 'Streamlit', 'OMDB API', 'YouTube API', 'Pandas'],
      liveUrl: '#',
      githubUrl: 'https://github.com/isha0601/Movie-Recommendations-System',
      type: 'Web Application',
    },
    {
      title: 'Password Generator',
      description: 'Strong password generator using Node.js & Express. Choose length, copy with one click, secure API requests.',
      image: 'https://images.unsplash.com/photo-1584433144859-1fc5b1c38e2f?w=500&h=300&fit=crop',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'Express', 'API Ninjas'],
      liveUrl: '#',
      githubUrl: 'https://github.com/isha0601/Password-Generator',
      type: 'Web Application',
    },
    {
      title: 'Random Quote Generator',
      description: 'Pure HTML, CSS, JS quote generator. Smooth animations, dark mode toggle, copy to clipboard, powered by API Ninjas.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      tags: ['HTML', 'CSS', 'Vanilla JS', 'API Ninjas'],
      liveUrl: '#',
      githubUrl: 'https://github.com/isha0601/Random-Quote-Generator',
      type: 'Web Application',
    },
    {
      title: 'WhatsApp Sender Pro',
      description: 'Send or schedule WhatsApp messages or images from your browser. No phone juggling, all built in Python with Streamlit.',
      image: 'https://images.unsplash.com/photo-1591734091214-3f7e3ec5d9e9?w=500&h=300&fit=crop',
      tags: ['Python', 'Streamlit', 'pywhatkit'],
      liveUrl: '#',
      githubUrl: 'https://github.com/isha0601/WhatsApp-Sender-Pro',
      type: 'Web Application',
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Mobile App':
        return <Smartphone size={16} />;
      case 'Web Application':
        return <Globe size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my latest builds — blending AI, automation, and web tech into practical, fun tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden hover-lift hover-glow border"
              style={{
                animationDelay: `${index * 0.1}s`,
                background: 'var(--gradient-card)',
                boxShadow: 'var(--shadow-soft)',
                transition: 'var(--transition-smooth)',
              }}
            >
              <div className="relative overflow-hidden">
                {/* <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105"
                  style={{ transition: 'var(--transition-smooth)' }}
                /> */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 hover-lift">
                    <span className="mr-1">{getTypeIcon(project.type)}</span>
                    {project.type}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="hover-lift text-primary-foreground"
                      style={{
                        background: 'var(--gradient-primary)',
                        border: 'none',
                        transition: 'var(--transition-bounce)',
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
  
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover-lift border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    style={{ transition: 'var(--transition-bounce)' }}
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
