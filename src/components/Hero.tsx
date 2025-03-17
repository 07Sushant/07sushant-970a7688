
import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl animate-pulse-slow" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <div className="mb-3">
            <span className="chip">Data Scientist</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Hello, I'm a <span className="shimmer-text">Data Scientist</span> with a diverse technical background
          </h1>
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
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-white/90 text-primary px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-xl border border-gray-100"
            >
              Get In Touch
            </button>
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
