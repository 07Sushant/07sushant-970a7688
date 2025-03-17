
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
    <section id="background" className="py-20 bg-gradient-to-br from-background to-muted relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              {education.map((item, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium">{item.institution}</h4>
                    <span className="text-sm text-foreground/60">{item.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-1">{item.degree}</p>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              
              {experience.map((item, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium">{item.company}</h4>
                    <span className="text-sm text-foreground/60">{item.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-1">{item.role}</p>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
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
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <Map className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Personal Background</h3>
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Background;
