
import React from 'react';
import { ArrowUp, FileDown } from 'lucide-react';
import { Button } from './ui/button';

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
            <span className="text-2xl font-bold">Sushant <span className="font-sans">कुमार</span></span>
            <p className="mt-2 text-white/80 max-w-md">
              Data Scientist with expertise in machine learning, AI, and cloud computing.
              Currently seeking new opportunities.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <button
                onClick={scrollToTop}
                className="bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
              <Button 
                onClick={() => window.open('/resume.pdf', '_blank')}
                variant="outline" 
                size="sm"
                className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10"
              >
                <FileDown className="h-4 w-4" />
                Resume
              </Button>
            </div>
            
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
