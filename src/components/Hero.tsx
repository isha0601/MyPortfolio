
import React from 'react';
import { Github, Linkedin, Mail, Download, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" style={{ background: 'radial-gradient(ellipse at center, hsl(220 13% 12%) 0%, hsl(220 13% 8%) 100%)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 animate-float" style={{ background: 'radial-gradient(circle, hsl(220 100% 50%) 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 animate-bounce-soft" style={{ background: 'radial-gradient(circle, hsl(280 100% 60%) 0%, transparent 70%)' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-5 animate-pulse" style={{ background: 'radial-gradient(circle, hsl(220 100% 70%) 0%, transparent 80%)', transform: 'translate(-50%, -50%)' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in">
            <div className="relative inline-block">
              <img
                // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                src="/yourphoto.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto border-4 border-primary/30 hover-lift hover-glow animate-glow"
                style={{ boxShadow: 'var(--shadow-elegant)' }}
              />
              <div className="absolute -inset-4 rounded-full opacity-20 animate-pulse" style={{ background: 'var(--gradient-primary)' }}></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-slide-up">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-glow">Isha Komervelliwar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer & AIML Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Passionate about creating innovative solutions and building amazing user experiences. 
            I specialize in modern web technologies and love turning ideas into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            {/* <Button size="lg" className="hover-lift hover-glow bg-primary hover:bg-primary/90" style={{ background: 'var(--gradient-primary)', transition: 'var(--transition-smooth)' }}>
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button> */}
              <a href="https://drive.google.com/file/d/1SGbuxGfCSyNxcb6Wt-ckOfMeFXOgqhn7/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="hover-lift border-primary/50 text-primary hover:bg-primary/10 hover:border-primary" style={{ transition: 'var(--transition-bounce)' }}>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
</a>

          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com/isha0601" className="text-muted-foreground hover:text-primary hover-lift hover-rotate" style={{ transition: 'var(--transition-smooth)' }}>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/isha-komervelliwar-55a79a289/" className="text-muted-foreground hover:text-primary hover-lift hover-rotate" style={{ transition: 'var(--transition-smooth)' }}>
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/isha_komervelliwar01/profilecard/?igsh=czN6a2RzaDY4MnBr" className="text-muted-foreground hover:text-primary hover-lift hover-rotate" style={{ transition: 'var(--transition-smooth)' }}>
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
