
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { 
  Code, Database, Cloud, Server, Terminal, 
  GitBranch, Brain, LineChart, Layers,
  BookOpen, GraduationCap, Shield
} from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills, delay = 0 }) => (
  <AnimatedSection delay={delay} className="col-span-1">
    <div className="glass-card h-full rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
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
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Programming",
      skills: ["Python", "C", "C++", "Java", "R", "HTML", "CSS"],
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data Science",
      skills: ["Data Collection", "EDA", "ETL", "Data Analysis", "Data Modeling", "Statistical Modeling"],
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Machine Learning",
      skills: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "Generative AI"],
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Analysis",
      skills: ["Data Visualization", "Statistical Analysis", "Predictive Modeling", "Regression Analysis"],
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Cloud Computing",
      skills: ["Azure", "AWS", "Google Cloud", "Cloud Architecture"],
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Big Data",
      skills: ["Hadoop", "HIVE", "PIG", "MapReduce", "Distributed Computing"],
    },
    {
      icon: <Terminal className="w-5 h-5" />,
      title: "Operating Systems",
      skills: ["Kali Linux", "ParrotOS", "Windows", "Ubuntu"],
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Web & Infrastructure",
      skills: ["Flask", "Web Development", "Computer Networking"],
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Security",
      skills: ["Cybersecurity Foundations", "Security Principles"],
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Domain Knowledge",
      skills: ["Biology", "Zoology", "Medical Background"],
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "AI Applications",
      skills: ["RLHF", "LLM Training", "Model Debugging"],
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "Development",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Software Engineering Principles"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background to-muted relative">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="chip mb-3">Technical Arsenal</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities across multiple domains and technologies.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              delay={index * 50}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
