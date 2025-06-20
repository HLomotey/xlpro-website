"use client";

import { motion } from "framer-motion";
import {
  BarChart4,
  Truck,
  Users,
  Package,
  Calculator,
  Building2,
  DollarSign,
  HeartPulse,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleItemProps {
  icon: React.ReactNode;
  color: string;
  delay: number;
  x: string;
  startY: string;
  direction: "up" | "down";
  speed: number;
}

function ModuleItem({
  icon,
  color,
  delay,
  x,
  startY,
  direction,
  speed,
}: ModuleItemProps) {
  const isMovingUp = direction === "up";

  return (
    <motion.div
      className={cn(
        "absolute flex items-center justify-center",
        "w-12 h-12 md:w-16 md:h-16 rounded-xl",
        "bg-white/5 backdrop-blur-sm border border-white/10",
        "shadow-lg"
      )}
      style={{
        left: x,
        top: startY,
      }}
      initial={{
        opacity: 0,
        scale: 0.3,
        y: isMovingUp ? 50 : -50,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: isMovingUp ? "-100vh" : "100vh",
      }}
      transition={{
        duration: speed,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear"
      }}
    >
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.5,
        }}
        className={cn("text-2xl md:text-3xl", color)}
      >
        {icon}
      </motion.div>

      {/* Trailing particle effect */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-xl opacity-30",
          "bg-gradient-to-b from-transparent to-white/20"
        )}
        animate={{
          opacity: [0, 0.3, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.5,
        }}
      />
    </motion.div>
  );
}

export function FloatingModules() {
  const modules = [
    {
      icon: <Calculator />,
      color: "text-blue-400",
      x: "10%",
      startY: "120%",
      direction: "up" as const,
      speed: 8,
    },
    {
      icon: <Package />,
      color: "text-green-400",
      x: "85%",
      startY: "-10%",
      direction: "down" as const,
      speed: 12,
    },
    {
      icon: <Users />,
      color: "text-purple-400",
      x: "75%",
      startY: "110%",
      direction: "up" as const,
      speed: 10,
    },
    {
      icon: <Truck />,
      color: "text-amber-400",
      x: "15%",
      startY: "-5%",
      direction: "down" as const,
      speed: 9,
    },
    {
      icon: <BarChart4 />,
      color: "text-rose-400",
      x: "25%",
      startY: "115%",
      direction: "up" as const,
      speed: 11,
    },
    {
      icon: <Building2 />,
      color: "text-cyan-400",
      x: "65%",
      startY: "-8%",
      direction: "down" as const,
      speed: 7,
    },
    {
      icon: <DollarSign />,
      color: "text-emerald-400",
      x: "20%",
      startY: "125%",
      direction: "up" as const,
      speed: 13,
    },
    {
      icon: <HeartPulse />,
      color: "text-pink-400",
      x: "70%",
      startY: "-12%",
      direction: "down" as const,
      speed: 6,
    },
    // Additional modules for more density
    {
      icon: <Calculator />,
      color: "text-indigo-400",
      x: "45%",
      startY: "110%",
      direction: "up" as const,
      speed: 9.5,
    },
    {
      icon: <Package />,
      color: "text-teal-400",
      x: "35%",
      startY: "-15%",
      direction: "down" as const,
      speed: 8.5,
    },
    {
      icon: <Users />,
      color: "text-orange-400",
      x: "55%",
      startY: "120%",
      direction: "up" as const,
      speed: 12.5,
    },
    {
      icon: <Truck />,
      color: "text-violet-400",
      x: "5%",
      startY: "-7%",
      direction: "down" as const,
      speed: 10.5,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/5 to-transparent" />

      {modules.map((module, index) => (
        <ModuleItem
          key={index}
          icon={module.icon}
          color={module.color}
          delay={index * 0.8}
          x={module.x}
          startY={module.startY}
          direction={module.direction}
          speed={module.speed}
        />
      ))}
    </div>
  );
}
