import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface CarouselItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoScrollInterval?: number;
  className?: string;
}

const Carousel = ({ items, autoScrollInterval = 5000, className = "" }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    if (!isAutoScrolling || items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [items.length, autoScrollInterval, isAutoScrolling]);

  const goToPrevious = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAutoScrolling(true), 10000); // Resume auto-scroll after 10s
  };

  const goToNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setTimeout(() => setIsAutoScrolling(true), 10000); // Resume auto-scroll after 10s
  };

  const goToSlide = (index: number) => {
    setIsAutoScrolling(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoScrolling(true), 10000); // Resume auto-scroll after 10s
  };

  if (items.length === 0) {
    return (
      <div className={`gaming-card text-center ${className}`}>
        <p className="text-muted-foreground font-inter">No images available</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main Carousel Container */}
      <div className="gaming-card relative overflow-hidden">
        {/* Images Container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="aspect-video relative group cursor-pointer">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative w-full h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Expand icon on hover */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-border">
                          <Expand className="w-4 h-4 text-foreground" />
                        </div>
                      </div>
                      
                      {/* Enhanced darker overlay with better gradient */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6">
                        <h3 className="text-xl font-burbank text-neon-blue mb-2 drop-shadow-lg">
                          {item.title}
                        </h3>
                        <p className="text-white/90 font-inter text-sm drop-shadow-md line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-background/95 backdrop-blur-lg border border-border/50">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain rounded-lg"
                      />
                      <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                        <h3 className="text-2xl font-burbank text-neon-blue mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground font-inter">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {items.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border hover:bg-background hover:border-neon-blue transition-all flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border hover:bg-background hover:border-neon-blue transition-all flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </>
        )}

        {/* Auto-scroll Indicator */}
        {isAutoScrolling && items.length > 1 && (
          <div className="absolute top-4 right-4">
            <div className="w-3 h-3 bg-neon-blue rounded-full glow-pulse"></div>
          </div>
        )}
      </div>

      {/* Dots Indicator */}
      {items.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-neon-blue shadow-[0_0_10px_hsl(var(--neon-blue))]' 
                  : 'bg-muted hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;