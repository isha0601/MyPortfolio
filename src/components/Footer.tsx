
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <Code className="h-6 w-6 text-primary mr-2 animate-pulse" />
            <span className="text-2xl font-bold text-foreground">Portfolio</span>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Passionate about creating digital experiences that make a difference. 
            Let's build something amazing together.
          </p>
          
          <div className="flex justify-center items-center text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-2 animate-pulse" />
            <span>by Isha Komervelliwar © {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
