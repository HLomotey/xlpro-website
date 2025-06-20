"use client";

import { motion, useMotionValue, useTransform, animate, easeOut } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}) {
  // ... ElegantShape component remains the same ...
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "Enterprise Solutions",
  descriptions = [
    "Comprehensive enterprise modules for accounting, inventory, CRM, fleet management, and more in one integrated platform.",
    "Streamline operations with our intelligent business solutions designed for scalability, compliance, and maximum efficiency.",
    "Advanced analytics and reporting tools that provide actionable insights to drive strategic business decisions.",
    "Enterprise-grade security and performance across all modules with seamless integration capabilities.",
  ],
}) {
  const titlePairs = [
    { title1: "Transform Your", title2: "Business Operations" },
    { title1: "Streamline Your", title2: "Enterprise Workflow" },
    { title1: "Elevate Your", title2: "Business Efficiency" },
    { title1: "Modernize Your", title2: "Digital Infrastructure" },
    { title1: "Optimize Your", title2: "Business Processes" },
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);
  const [displayedTitle1, setDisplayedTitle1] = useState("");
  const [displayedTitle2, setDisplayedTitle2] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  // Handle title typing animation
  useEffect(() => {
    const currentTitle = titlePairs[currentTitleIndex];
    
    if (isDeleting) {
      // Deleting text
      if (displayedTitle2.length > 0) {
        // Delete second line first
        const timeoutId = setTimeout(() => {
          setDisplayedTitle2(displayedTitle2.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeoutId);
      } else if (displayedTitle1.length > 0) {
        // Then delete first line
        const timeoutId = setTimeout(() => {
          setDisplayedTitle1(displayedTitle1.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeoutId);
      } else {
        // When both lines are deleted, move to next title and start typing
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titlePairs.length);
      }
    } else if (isTyping) {
      // Typing text
      if (displayedTitle1.length < currentTitle.title1.length) {
        // Type first line
        const timeoutId = setTimeout(() => {
          setDisplayedTitle1(currentTitle.title1.slice(0, displayedTitle1.length + 1));
        }, 100);
        return () => clearTimeout(timeoutId);
      } else if (displayedTitle2.length < currentTitle.title2.length) {
        // Then type second line
        const timeoutId = setTimeout(() => {
          setDisplayedTitle2(currentTitle.title2.slice(0, displayedTitle2.length + 1));
        }, 100);
        return () => clearTimeout(timeoutId);
      } else {
        // When both lines are typed, pause before deleting
        setIsTyping(false);
        const timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 3000); // Wait 3 seconds before starting to delete
        return () => clearTimeout(timeoutId);
      }
    } else {
      // If neither typing nor deleting, start typing again after a pause
      const timeoutId = setTimeout(() => {
        setIsTyping(true);
      }, 500); // Short pause before starting to type again
      return () => clearTimeout(timeoutId);
    }
  }, [currentTitleIndex, displayedTitle1, displayedTitle2, isDeleting, isTyping, titlePairs]);

  // Handle description changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescriptionIndex((prev) => (prev + 1) % descriptions.length);
    }, 7000); // Change description every 7 seconds

    return () => clearInterval(interval);
  }, [descriptions.length]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };
  
  const getTransition = (index: number) => ({
    duration: 1,
    delay: 0.5 + index * 0.2,
    ease: easeOut
  });

  const textFadeVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={getTransition(0)}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
            <span className="text-sm text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={getTransition(1)}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {displayedTitle1}
                <span className="animate-pulse">|</span>
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                )}
              >
                {displayedTitle2}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            key={currentDescriptionIndex}
            variants={textFadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="min-h-[120px] flex items-center justify-center"
          >
            <p className="text-white sm:text-lg md:text-xl mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {descriptions[currentDescriptionIndex]}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
