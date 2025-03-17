
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold">DS.</span>
            <p className="mt-2 text-white/80 max-w-md">
              Data Scientist with expertise in machine learning, AI, and cloud computing.
              Currently seeking new opportunities.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
            
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} — All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
