
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  category,
  delay = 0 
}) => (
  <AnimatedSection delay={delay} className="col-span-1">
    <div className="glass-card h-full rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] flex flex-col">
      <div className="p-6 flex-grow">
        <div className="mb-3">
          <span className="chip">{category}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="bg-secondary/5 text-secondary px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-border p-4">
        <button className="flex items-center text-sm font-medium text-primary">
          View Project <ExternalLink className="ml-1 w-3 h-3" />
        </button>
      </div>
    </div>
  </AnimatedSection>
);

const Projects: React.FC = () => {
  // Sample projects - replace with your actual projects
  const projects = [
    {
      title: "Predictive Analytics for Healthcare",
      description: "Leveraged machine learning models to predict patient outcomes based on medical data and improve treatment recommendations.",
      technologies: ["Python", "Scikit-learn", "Pandas", "TensorFlow", "Healthcare APIs"],
      category: "Machine Learning",
    },
    {
      title: "Cloud-Based Data Processing Pipeline",
      description: "Built a scalable data processing system on cloud infrastructure to handle large datasets for business intelligence.",
      technologies: ["AWS", "Python", "Hadoop", "Spark", "Data Visualization"],
      category: "Big Data",
    },
    {
      title: "AI-Powered Content Recommendation Engine",
      description: "Designed and implemented a content recommendation system using deep learning techniques to enhance user engagement.",
      technologies: ["Python", "Deep Learning", "Natural Language Processing", "Recommendation Systems"],
      category: "AI",
    },
    {
      title: "Fraud Detection System",
      description: "Developed a real-time fraud detection system for financial transactions using anomaly detection algorithms.",
      technologies: ["Python", "Machine Learning", "Statistical Analysis", "Data Mining"],
      category: "Data Science",
    },
    {
      title: "Biological Data Analysis Platform",
      description: "Created a specialized platform for analyzing biological datasets, leveraging domain knowledge in zoology.",
      technologies: ["R", "Bioinformatics", "Statistical Analysis", "Data Visualization"],
      category: "Bioinformatics",
    },
    {
      title: "Cybersecurity Risk Assessment Tool",
      description: "Built a tool to evaluate security risks in software systems by analyzing code patterns and vulnerabilities.",
      technologies: ["Python", "Security Analysis", "Pattern Recognition", "Risk Assessment"],
      category: "Cybersecurity",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="chip mb-3">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my technical skills and problem-solving abilities.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              category={project.category}
              delay={index * 50}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
