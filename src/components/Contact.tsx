
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ishakomevelliwar0601@gmail.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7887669907',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/isha-komervelliwar-55a79a289/',
      color: 'text-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/isha0601',
      color: 'text-gray-800',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/isha_komervelliwar01/profilecard/?igsh=czN6a2RzaDY4MnBr',
      color: 'text-blue-400',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-10 animate-bounce-soft" style={{ background: 'var(--gradient-primary)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 rounded-lg hover-lift animate-scale-in"
                  style={{ 
                    background: 'var(--gradient-card)',
                    boxShadow: 'var(--shadow-soft)',
                    animationDelay: `${index * 0.1}s`,
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <div className="p-3 rounded-lg mr-4 hover-glow" style={{ background: 'var(--gradient-primary)' }}>
                    <info.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{info.label}</div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 rounded-lg hover-lift hover-glow hover-rotate text-primary-foreground"
                    style={{
                      background: 'var(--gradient-primary)',
                      transition: 'var(--transition-bounce)'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-lg" 
                  style={{ 
                    background: 'var(--gradient-card)',
                    boxShadow: 'var(--shadow-soft)'
                  }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="hover-lift"
                    style={{ transition: 'var(--transition-smooth)' }}
                  />
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="hover-lift"
                    style={{ transition: 'var(--transition-smooth)' }}
                  />
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Project Inquiry"
                  className="hover-lift"
                  style={{ transition: 'var(--transition-smooth)' }}
                />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="hover-lift"
                  style={{ transition: 'var(--transition-smooth)' }}
                />
              </div>
              
              <Button type="submit" className="w-full hover-lift hover-glow animate-fade-in" size="lg"
                      style={{ 
                        background: 'var(--gradient-primary)',
                        animationDelay: '0.7s',
                        transition: 'var(--transition-bounce)'
                      }}>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
