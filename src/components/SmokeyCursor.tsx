
import React, { useEffect, useRef } from 'react';

const SmokeyCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const mouseVelocity = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let animationFrame: number;
    let trailTimeout: NodeJS.Timeout;

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.className = 'cursor-particle';
      
      // Random offset for particle position
      const randomX = (Math.random() - 0.5) * 40;
      const randomY = (Math.random() - 0.5) * 40;
      
      particle.style.left = x + randomX + 'px';
      particle.style.top = y + randomY + 'px';
      particle.style.setProperty('--random-x', randomX + 'px');
      particle.style.setProperty('--random-y', randomY - 40 + 'px');
      
      document.body.appendChild(particle);

      setTimeout(() => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      }, 2000);
    };

    const createTrail = (x: number, y: number, velocity: number) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      
      // Adjust trail size based on velocity
      const size = Math.min(12, 6 + velocity * 2);
      trail.style.width = size + 'px';
      trail.style.height = size + 'px';
      trail.style.left = x - size / 2 + 'px';
      trail.style.top = y - size / 2 + 'px';
      
      // Add slight random offset for more organic feel
      const offsetX = (Math.random() - 0.5) * 6;
      const offsetY = (Math.random() - 0.5) * 6;
      trail.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      
      document.body.appendChild(trail);

      setTimeout(() => {
        if (document.body.contains(trail)) {
          document.body.removeChild(trail);
        }
      }, 1200);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Calculate velocity
      const deltaX = x - lastMousePosition.current.x;
      const deltaY = y - lastMousePosition.current.y;
      const velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      mouseVelocity.current = { x: deltaX, y: deltaY };
      lastMousePosition.current = { x, y };

      // Update cursor position with smooth animation
      cursor.style.left = x - 12 + 'px';
      cursor.style.top = y - 12 + 'px';
      
      // Scale cursor based on velocity
      const scale = Math.min(1.5, 1 + velocity * 0.02);
      cursor.style.transform = `scale(${scale})`;

      // Create trail effect
      createTrail(x, y, velocity * 0.1);

      // Create particles on faster movement
      if (velocity > 5 && Math.random() > 0.7) {
        createParticle(x, y);
      }

      // Clear previous timeout and set new one for idle state
      clearTimeout(trailTimeout);
      trailTimeout = setTimeout(() => {
        cursor.style.transform = 'scale(1)';
      }, 100);
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      cursor.style.transform = 'scale(1.2)';
      setTimeout(() => {
        cursor.style.transform = 'scale(1)';
      }, 300);
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursor.style.transform = 'scale(0.8)';
    };

    const handleMouseDown = () => {
      cursor.style.transform = 'scale(0.8)';
      // Create burst of particles on click
      const rect = cursor.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      for (let i = 0; i < 8; i++) {
        setTimeout(() => createParticle(centerX, centerY), i * 50);
      }
    };

    const handleMouseUp = () => {
      cursor.style.transform = 'scale(1.1)';
      setTimeout(() => {
        cursor.style.transform = 'scale(1)';
      }, 150);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      clearTimeout(trailTimeout);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return <div ref={cursorRef} className="cursor" />;
};

export default SmokeyCursor;
