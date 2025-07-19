import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <h1 className="text-xl font-roboto font-bold text-white">
              WILLIAM'S MOD SHOWCASE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-neon-blue transition-colors font-inter">
              Home
            </a>
            <a href="#plushie-mod" className="text-foreground hover:text-neon-blue transition-colors font-inter">
              Plushie Mod
            </a>
            <a href="#baseball-mod" className="text-foreground hover:text-neon-red transition-colors font-inter">
              Baseball Mod
            </a>
            <a href="#coming-soon" className="text-foreground hover:text-gaming-green transition-colors font-inter">
              Coming Soon
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-neon-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-foreground hover:text-neon-blue transition-colors font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#plushie-mod" 
                className="text-foreground hover:text-neon-blue transition-colors font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Plushie Mod
              </a>
              <a 
                href="#baseball-mod" 
                className="text-foreground hover:text-neon-red transition-colors font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Baseball Mod
              </a>
              <a 
                href="#coming-soon" 
                className="text-foreground hover:text-gaming-green transition-colors font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Coming Soon
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;