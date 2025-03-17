
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { GraduationCap, Award, Briefcase, Map } from 'lucide-react';

const Background: React.FC = () => {
  const education = [
    {
      institution: "Your University Name",
      degree: "Bachelor/Master's in Data Science/Computer Science",
      period: "20XX - 20XX",
      description: "Focus on data science, machine learning, and computational methods."
    }
  ];

  const experience = [
    {
      company: "AI Model Trainer",
      role: "Outlier.ai and LabelBox.in",
      period: "Recent",
      description: "Trained and refined AI models to solve graduate and PhD level problems in mathematics, physics, chemistry, and biology."
    },
    {
      company: "Freelance Consultant",
      role: "Independent Platform",
      period: "Recent",
      description: "Helped over 150+ students with their final year projects, guiding them to solve real-world problems."
    }
  ];

  const certifications = [
    {
      title: "Data Science Professional",
      issuer: "Recognized Institution",
      date: "20XX"
    },
    {
      title: "Machine Learning Engineer",
      issuer: "Recognized Institution",
      date: "20XX"
    },
    {
      title: "Cloud Computing Specialist",
      issuer: "Major Cloud Provider",
      date: "20XX"
    }
  ];

  return (
    <section id="background" className="py-20 bg-gradient-to-br from-background to-muted/50 relative">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="chip mb-3">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Background & Education</span>
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Learn about my educational journey, professional experience, and the places that shaped me.
          </p>
        </AnimatedSection>

        {/* Timeline Section */}
        <div className="relative mt-16">
          {/* Central timeline pillar */}
          <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-primary/30 via-primary to-accent h-full transform -translate-x-1/2 rounded-full"></div>

          {/* Timeline items */}
          <div className="grid grid-cols-1 gap-16">
            {/* Education Timeline Item */}
            <AnimatedSection>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-0 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full -translate-x-1/2 transform z-10 shadow-lg shadow-primary/20"></div>
                
                <div className="md:text-right md:pr-12 self-center">
                  <h3 className="text-xl font-bold mb-2">Education</h3>
                  <p className="text-primary">{education[0].period}</p>
                </div>
                
                <div className="glass-card rounded-xl p-6 md:ml-12">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">{education[0].institution}</h4>
                      <p className="text-primary text-sm">{education[0].degree}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70">{education[0].description}</p>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Experience Timeline Items */}
            {experience.map((exp, index) => (
              <AnimatedSection key={index} delay={100 * (index + 1)}>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-0 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full -translate-x-1/2 transform z-10 shadow-lg shadow-primary/20"></div>
                  
                  <div className={`md:text-right md:pr-12 self-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-xl font-bold mb-2">Work Experience</h3>
                    <p className="text-primary">{exp.period}</p>
                  </div>
                  
                  <div className={`glass-card rounded-xl p-6 ${index % 2 === 1 ? 'md:mr-12 md:order-0' : 'md:ml-12'}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">{exp.company}</h4>
                        <p className="text-primary text-sm">{exp.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/70">{exp.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            
            {/* Personal Background Timeline Item */}
            <AnimatedSection delay={300}>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-0 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full -translate-x-1/2 transform z-10 shadow-lg shadow-primary/20"></div>
                
                <div className="md:text-right md:pr-12 self-center">
                  <h3 className="text-xl font-bold mb-2">Personal Background</h3>
                  <p className="text-primary">Shillong & Kohima</p>
                </div>
                
                <div className="glass-card rounded-xl p-6 md:ml-12">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <Map className="w-5 h-5" />
                    </div>
                    <h4 className="font-medium">Northeast India</h4>
                  </div>
                  <p className="text-foreground/80 mb-4">
                    Born in Shillong, Meghalaya, I've lived in various states across Northeast India due to my father's profession.
                    I completed my schooling in Kohima, Nagaland, which gave me a diverse cultural perspective and adaptability.
                  </p>
                  <p className="text-foreground/80 font-medium">
                    Currently looking for an opportunity to gain more experience in my domain,
                    while helping organizations scale and grow.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Certifications Timeline Item */}
            <AnimatedSection delay={400}>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-0 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full -translate-x-1/2 transform z-10 shadow-lg shadow-primary/20"></div>
                
                <div className="md:text-right md:pr-12 self-center md:order-1">
                  <h3 className="text-xl font-bold mb-2">Certifications</h3>
                  <p className="text-primary">Professional Development</p>
                </div>
                
                <div className="glass-card rounded-xl p-6 md:mr-12 md:order-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <Award className="w-5 h-5" />
                    </div>
                    <h4 className="font-medium">Professional Certifications</h4>
                  </div>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{cert.title}</h4>
                          <p className="text-sm text-foreground/70">{cert.issuer}</p>
                        </div>
                        <span className="text-sm text-foreground/60">{cert.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
