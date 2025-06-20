"use client";

import { useEffect, useRef } from "react";

export function FluidAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Make canvas full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Configuration
    const config = {
      particleCount: 100,
      particleSize: 3,
      defaultSpeed: 1,
      variantSpeed: 1,
      defaultRadius: 2,
      variantRadius: 2,
      linkRadius: 200,
    };

    // Particle class
    class Particle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.dx = (Math.random() - 0.5) * config.variantSpeed;
        this.dy = (Math.random() - 0.5) * config.variantSpeed;
        this.size = Math.random() * config.variantRadius + config.defaultRadius;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.dx = -this.dx;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < config.particleCount; i++) {
      particles.push(new Particle());
    }

    // Mouse position
    let mouseX = 0;
    let mouseY = 0;
    let mouseRadius = 150;

    canvas.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < config.linkRadius) {
            const opacity = 1 - (distance / config.linkRadius);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        
        // Mouse interaction
        const dx = particles[i].x - mouseX;
        const dy = particles[i].y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          particles[i].x += Math.cos(angle) * force * 2;
          particles[i].y += Math.sin(angle) * force * 2;
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}

// Fluid effect component with gradient colors
export function FluidGradientAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Make canvas full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Colors for gradient
    const colors = [
      { r: 99, g: 102, b: 241 },   // indigo
      { r: 236, g: 72, b: 153 },   // pink
      { r: 124, g: 58, b: 237 },   // purple
      { r: 59, g: 130, b: 246 },   // blue
    ];

    // Fluid simulation variables
    const particles: any[] = [];
    const particleCount = 50;
    const maxVelocity = 2;
    const particleSize = 3;
    const particleLife = 100;
    const cursorSize = 50;
    let mouseX = 0;
    let mouseY = 0;
    let lastX = 0;
    let lastY = 0;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      createParticle(Math.random() * canvas.width, Math.random() * canvas.height);
    }

    function createParticle(x: number, y: number, isMouseGenerated = false) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * maxVelocity,
        vy: (Math.random() - 0.5) * maxVelocity,
        size: isMouseGenerated ? Math.random() * particleSize * 2 + particleSize : Math.random() * particleSize + 1,
        color: `rgba(${color.r}, ${color.g}, ${color.b}, ${isMouseGenerated ? 0.8 : 0.5})`,
        life: isMouseGenerated ? particleLife : Math.random() * particleLife * 2,
        maxLife: isMouseGenerated ? particleLife : Math.random() * particleLife * 2,
      });
    }

    // Mouse events
    canvas.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Create particles based on mouse movement speed
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 5) {
        for (let i = 0; i < 3; i++) {
          createParticle(
            mouseX + (Math.random() - 0.5) * cursorSize,
            mouseY + (Math.random() - 0.5) * cursorSize,
            true
          );
        }
      }
      
      lastX = mouseX;
      lastY = mouseY;
    });

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        
        // Apply some gravity to y axis
        p.vy += 0.05;
        
        // Slow down particles
        p.vx *= 0.99;
        p.vy *= 0.99;
        
        // Decrease life
        p.life--;
        
        // Remove dead particles
        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
          continue;
        }
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -0.8;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -0.8;
        
        // Calculate opacity based on life
        const opacity = p.life / p.maxLife;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(/[\d\.]+\)$/g, `${opacity})`);
        ctx.fill();
        
        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / 100) * 0.3 * opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      // Add new particles occasionally
      if (particles.length < particleCount && Math.random() > 0.97) {
        createParticle(Math.random() * canvas.width, Math.random() * canvas.height);
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-10 pointer-events-auto"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

export default FluidGradientAnimation;
