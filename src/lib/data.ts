import type { TechItem, Skill } from '@/lib/types';
import { Server, Database, Settings, Cloud, Code, Wrench } from 'lucide-react';
import { TECH_CATEGORIES } from '@/lib/constants';

export const TECH_STACK: TechItem[] = [
  // Backend & Programming
  { name: "Python", icon: "python.svg", category: TECH_CATEGORIES.BACKEND },
  { name: "Java", icon: "java.svg", category: TECH_CATEGORIES.BACKEND },
  { name: "JavaScript", icon: "javaScript.svg", category: TECH_CATEGORIES.BACKEND },
  { name: "TypeScript", icon: "typeScript.svg", category: TECH_CATEGORIES.BACKEND },
  
  // Databases
  { name: "MySQL", icon: "mysql.svg", category: TECH_CATEGORIES.DATABASE },
  { name: "PostgreSQL", icon: "postgresql.svg", category: TECH_CATEGORIES.DATABASE },
  { name: "MongoDB", icon: "mongodb.svg", category: TECH_CATEGORIES.DATABASE },
  { name: "SQLite", icon: "sqlite.svg", category: TECH_CATEGORIES.DATABASE },
  { name: "SQL", icon: "sql.svg", category: TECH_CATEGORIES.DATABASE },
  
  // Machine Learning & Data Science
  { name: "PyTorch", icon: "pytorch.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "TensorFlow", icon: "tensorflow.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "Keras", icon: "keras.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "Scikit-learn", icon: "scikit-learn.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "JAX", icon: "jax.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "OpenCV", icon: "opencv.svg", category: TECH_CATEGORIES.TOOLS },
  
  // Cloud & DevOps
  { name: "AWS", icon: "aws.svg", category: TECH_CATEGORIES.DEVOPS },
  { name: "Azure", icon: "azure.svg", category: TECH_CATEGORIES.DEVOPS },
  { name: "Docker", icon: "docker.svg", category: TECH_CATEGORIES.DEVOPS },
  { name: "Kubernetes", icon: "kubernetes.svg", category: TECH_CATEGORIES.DEVOPS },
  
  // Frameworks & Libraries
  { name: "Flask", icon: "flask.svg", category: TECH_CATEGORIES.BACKEND },
  { name: "FastAPI", icon: "fastapi.svg", category: TECH_CATEGORIES.BACKEND },
  { name: "Streamlit", icon: "streamlit.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "Hadoop", icon: "hadoop.svg", category: TECH_CATEGORIES.TOOLS },
  
  // Data Visualization
  { name: "PowerBI", icon: "powerbi.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "Tableau", icon: "tableau.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "Matplotlib", icon: "matplotlib.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "Seaborn", icon: "seaborn.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "Plotly", icon: "plotly.svg", category: TECH_CATEGORIES.TOOLS },
  
  // Development Tools
  { name: "Git", icon: "git.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "GitHub", icon: "github.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "VSCode", icon: "vscode.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "Jupyter", icon: "jupyter.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "Colab", icon: "colab.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "Postman", icon: "postman.svg", category: TECH_CATEGORIES.TOOLS },
  
  // Productivity & Design
  { name: "Notion", icon: "notion.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "Obsidian", icon: "obsidian.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "Figma", icon: "figma.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "Canva", icon: "canva.svg", category: TECH_CATEGORIES.TOOLS },
  
  // Communication & Streaming
  { name: "Slack", icon: "slack.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "Discord", icon: "discord.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "OBS", icon: "obs.svg", category: TECH_CATEGORIES.TOOLS },
  
  // Platforms
  { name: "Kaggle", icon: "kaggle.svg", category: TECH_CATEGORIES.TOOLS },
  { name: "Vercel", icon: "vercel.svg", category: TECH_CATEGORIES.DEVOPS },
];

export const SKILLS_DATA: Skill[] = [
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    description: [
      "Building scalable and maintainable backend systems using Java & Spring Boot",
      "Designing and implementing secure RESTful APIs with Spring Security",
      "Utilizing Spring Data JPA and Hibernate for efficient data persistence"
    ],
    level: 5
  },
  {
    title: "Databases & Data Management",
    icon: <Database className="w-6 h-6" />,
    description: [
      "Proficient in MySQL and PostgreSQL for relational database management",
      "Experience with NoSQL databases like MongoDB for document storage",
      "Writing complex SQL queries and optimizing database performance"
    ],
    level: 4
  },
  {
    title: "Software Architecture",
    icon: <Settings className="w-6 h-6" />,
    description: [
      "Applying SOLID principles and design patterns for clean, maintainable code",
      "Implementing microservices architecture for scalable applications",
      "Experience with API design and documentation using OpenAPI/Swagger"
    ],
    level: 4
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    description: [
      "Deploying applications on AWS and Azure cloud platforms",
      "Containerization with Docker and orchestration with Kubernetes",
      "CI/CD pipelines for automated testing and deployment"
    ],
    level: 3
  },
  {
    title: "Data Science & ML",
    icon: <Code className="w-6 h-6" />,
    description: [
      "Machine learning model development with PyTorch and TensorFlow",
      "Data analysis and visualization using Python and related libraries",
      "Statistical analysis and predictive modeling for business insights"
    ],
    level: 4
  },
  {
    title: "Development Tools",
    icon: <Wrench className="w-6 h-6" />,
    description: [
      "Version control with Git and collaborative development on GitHub",
      "IDE proficiency with VSCode and IntelliJ for efficient coding",
      "API testing and debugging with Postman and similar tools"
    ],
    level: 5
  }
]; 