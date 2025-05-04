import { techStack } from "@/data";

const TechnologySection = () => {
  return (
    <section className="space-y-6 px-4 py-6 sm:px-10 md:px-20" id="tech">
      <h2 className="text-3xl font-bold mb-8">🛠 Technologies I Use</h2>
      <div className="space-y-8">
        {techStack.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              {category.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary px-3 py-1 rounded-full transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;
