
import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowDown, FileDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl animate-pulse-slow" />
      
      {/* Web3 inspired circles */}
      <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-primary/30 rounded-full animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-2/3 left-1/3 w-6 h-6 bg-foreground/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="chip mb-3">Data Scientist</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-2 leading-tight">
              Sushant <span className="font-sans">कुमार</span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6">
            A <span className="shimmer-text">Data Scientist</span> with a diverse technical background
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
            From Excel and PowerPoint to Machine Learning, Deep Learning, and Cloud Computing — 
            my journey spans multiple domains and technologies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-xl"
            >
              Explore My Journey
            </button>
            <Button 
              onClick={() => window.open('/resume.pdf', '_blank')}
              variant="outline" 
              className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10 hover:text-primary px-6 py-3"
            >
              <FileDown className="h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
