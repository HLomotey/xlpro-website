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
  HeartPulse
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleItemProps {
  icon: React.ReactNode;
  color: string;
  delay: number;
  x: string;
  y: string;
}

function ModuleItem({ icon, color, delay, x, y }: ModuleItemProps) {
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
        top: y,
      }}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
    >
      <motion.div
        animate={{ 
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: delay * 0.5,
        }}
        className={cn("text-2xl md:text-3xl", color)}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}

export function FloatingModules() {
  const modules = [
    { icon: <Calculator />, color: "text-blue-400", x: "10%", y: "20%" },
    { icon: <Package />, color: "text-green-400", x: "85%", y: "25%" },
    { icon: <Users />, color: "text-purple-400", x: "75%", y: "65%" },
    { icon: <Truck />, color: "text-amber-400", x: "15%", y: "70%" },
    { icon: <BarChart4 />, color: "text-rose-400", x: "25%", y: "30%" },
    { icon: <Building2 />, color: "text-cyan-400", x: "65%", y: "15%" },
    { icon: <DollarSign />, color: "text-emerald-400", x: "20%", y: "55%" },
    { icon: <HeartPulse />, color: "text-pink-400", x: "70%", y: "45%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {modules.map((module, index) => (
        <ModuleItem
          key={index}
          icon={module.icon}
          color={module.color}
          delay={0.3 + index * 0.1}
          x={module.x}
          y={module.y}
        />
      ))}
    </div>
  );
}
