
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold text-gradient">DS.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["home", "journey", "skills", "projects", "background", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium text-foreground/80 hover:text-primary text-path capitalize"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="relative w-6 h-5">
            <span 
              className={cn(
                "absolute h-0.5 w-6 bg-foreground transition-all duration-300",
                mobileMenuOpen ? "top-2 rotate-45" : "top-0"
              )}
            />
            <span 
              className={cn(
                "absolute h-0.5 w-6 bg-foreground transition-all duration-300",
                mobileMenuOpen ? "opacity-0" : "top-2 opacity-100"
              )}
            />
            <span 
              className={cn(
                "absolute h-0.5 w-6 bg-foreground transition-all duration-300",
                mobileMenuOpen ? "top-2 -rotate-45" : "top-4"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute left-0 w-full bg-white/95 backdrop-blur-md transition-all duration-300 overflow-hidden shadow-md",
          mobileMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        )}
      >
        <div className="flex flex-col space-y-4 px-4">
          {["home", "journey", "skills", "projects", "background", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium text-foreground/80 hover:text-primary py-2 text-left capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
