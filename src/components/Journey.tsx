
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Check } from 'lucide-react';

const Journey: React.FC = () => {
  const journeyItems = [
    {
      year: "Early Years",
      title: "Foundations in Technology",
      description: "Started with QuickBASIC and mastered Excel and PowerPoint during high school, laying the groundwork for my technical journey.",
      skills: ["QuickBASIC", "Excel", "PowerPoint"],
    },
    {
      year: "Education",
      title: "Building Technical Knowledge",
      description: "Developed skills in programming languages and began exploring data science fundamentals.",
      skills: ["Python", "C/C++", "Java", "R"],
    },
    {
      year: "Skills Expansion",
      title: "Broadening Technical Expertise",
      description: "Expanded knowledge into various operating systems and computational infrastructures.",
      skills: ["Kali Linux", "ParrotOS", "Windows", "Ubuntu", "Computer Networking", "Computer Organization"],
    },
    {
      year: "Data Science Focus",
      title: "Specializing in Data",
      description: "Developed core competencies in data science methodologies and machine learning.",
      skills: ["Data Collection", "EDA", "ETL", "Data Analysis", "Statistical Modeling", "Supervised Learning", "Unsupervised Learning"],
    },
    {
      year: "Cloud & Big Data",
      title: "Scaling Computation Skills",
      description: "Mastered cloud platforms and big data technologies to handle large-scale data processing.",
      skills: ["Azure", "AWS", "Google Cloud", "Hadoop", "HIVE", "PIG", "MapReduce"],
    },
    {
      year: "Professional Experience",
      title: "AI Model Training & Freelancing",
      description: "Gained hands-on experience training AI models and helping students with their projects.",
      skills: ["RLHF", "LLM Training", "Problem Solving", "Project Management", "Mentoring"],
    },
  ];

  return (
    <section id="journey" className="py-20 bg-white relative">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="chip mb-3">My Path</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            My Journey From <span className="text-gradient">BASIC to Advanced</span>
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Tracing my evolution from early programming to becoming a versatile data scientist with expertise across multiple domains.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="timeline-connector"></div>

          {journeyItems.map((item, index) => (
            <AnimatedSection 
              key={index} 
              className="ml-12 mb-16 relative" 
              delay={index * 100}
            >
              <div className="timeline-dot">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div className="glass-card rounded-xl p-6 ml-4">
                <span className="chip">{item.year}</span>
                <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
                <p className="text-foreground/70 my-3">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="bg-secondary/5 text-secondary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
