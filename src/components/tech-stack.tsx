const techStack = [
    { name: "Python" }, { name: "SQL" }, { name: "Jax" }, { name: "Pytorch" }, { name: "Tensorflow" }, { name: "Keras" }, { name: "Scikit-learn" }, { name: "Opencv" }, { name: "Kaggle" }, { name: "Hadoop" }, { name: "AWS" }, { name: "Azure" }, { name: "Docker" }, { name: "Kubernetes" }, { name: "MySQL" }, { name: "PowerBI" }, { name: "Tableau" }, { name: "Matplotlib" }, { name: "Seaborn" }, { name: "Plotly" }, { name: "Flask" }, { name: "Git" }, { name: "Github" }, { name: "Vscode" }, { name: "Jupyter" }, { name: "Colab" }, { name: "Notion" }, { name: "Obsidian" }, { name: "Figma" }, { name: "Canva" }, { name: "OBS" }, { name: "Slack" }, { name: "Discord" },
  ];
  
export function TechStack() {
  const extendedTechStack = [...techStack, ...techStack]; // Duplicate for seamless scroll

  return (
    <div className="relative overflow-x-hidden py-8">
      <h2 className="text-center text-3xl font-bold text-foreground mb-8">
        My Full Tech Stack
      </h2>
      <div className="flex animate-scroll hover:[animation-play-state:paused] gap-12 md:gap-20 w-max">
        {extendedTechStack.map((tech, index) => (
          <div key={index} className="flex items-center gap-2 group transition-all duration-300">
            {/* As I cannot add new image files, I'm using text placeholders for the logos. */}
            <span className="text-lg font-medium text-muted-foreground transition-colors group-hover:text-foreground">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
