
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Background from '@/components/Background';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Web3Background from '@/components/Web3Background';

const Index: React.FC = () => {
  // Add a subtle scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
          section.classList.add('opacity-100');
          section.classList.remove('opacity-80');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Web3Background />
      <Navbar />
      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <Background />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
