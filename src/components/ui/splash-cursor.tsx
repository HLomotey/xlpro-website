"use client";

import { useEffect, useRef } from "react";

interface SplashCursorProps {
  color?: string;
  size?: number;
  opacity?: number;
}

export function SplashCursor({
  color = "rgba(74, 144, 226, 0.8)",
  size = 15,
  opacity = 0.7,
}: SplashCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<{ x: number; y: number; lastX: number; lastY: number }>({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    life: number;
    maxLife: number;
  }>>([]);
  const requestRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.lastX = cursorRef.current.x;
      cursorRef.current.lastY = cursorRef.current.y;
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;

      // Calculate speed and direction
      const dx = cursorRef.current.x - cursorRef.current.lastX;
      const dy = cursorRef.current.y - cursorRef.current.lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Create particles based on movement speed - lower threshold and more particles
      if (speed > 2) {
        const particleCount = Math.min(Math.floor(speed), 10);
        
        for (let i = 0; i < particleCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * size * 0.8;
          
          particlesRef.current.push({
            x: cursorRef.current.x + Math.cos(angle) * distance,
            y: cursorRef.current.y + Math.sin(angle) * distance,
            size: size * (0.7 + Math.random() * 0.5),
            speedX: dx * (0.3 + Math.random() * 0.4),
            speedY: dy * (0.3 + Math.random() * 0.4),
            life: 0,
            maxLife: 30 + Math.random() * 50,
          });
        }
      }
    };

    // Handle touch events for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        cursorRef.current.lastX = cursorRef.current.x;
        cursorRef.current.lastY = cursorRef.current.y;
        cursorRef.current.x = touch.clientX;
        cursorRef.current.y = touch.clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Apply friction
        particle.speedX *= 0.96;
        particle.speedY *= 0.96;
        
        // Update life
        particle.life++;
        
        // Calculate opacity based on life
        const opacity = 1 - particle.life / particle.maxLife;
        
        // Draw particle
        ctx.globalAlpha = opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(
          particle.x, 
          particle.y, 
          particle.size * (1 - particle.life / particle.maxLife), 
          0, 
          Math.PI * 2
        );
        ctx.fill();
        
        // Remove dead particles
        if (particle.life >= particle.maxLife) {
          particlesRef.current.splice(index, 1);
        }
      });

      // Reset global alpha
      ctx.globalAlpha = 1;

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", setCanvasDimensions);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [color, size]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[100]"
      style={{ opacity }}
    />
  );
}
