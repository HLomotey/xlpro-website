
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ 
  slides, 
  autoPlayInterval = 5000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [currentSlide, autoPlayInterval]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/60 to-black/80"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
        disabled={isTransitioning}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </Button>
      
      <Button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
        disabled={isTransitioning}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Current Slide Content */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <div className="text-center max-w-5xl mx-auto px-6">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 ${
            isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}>
            <span className="gradient-text">{slides[currentSlide]?.title}</span>
          </h1>
          <p className={`text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
            isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}>
            {slides[currentSlide]?.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
