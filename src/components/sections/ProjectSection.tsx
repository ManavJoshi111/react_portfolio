import { GithubIcon, Monitor } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data";

const ProjectSection = () => {
  return (
    <section
      className="project-section space-y-6 px-4 py-6 sm:px-10 md:px-20"
      id="projects"
    >
      <h1 className="text-3xl font-bold mb-8">📂 Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="flex flex-col justify-start border hover:shadow-md transition-shadow duration-200 border-muted py-2"
          >
            <CardHeader className="space-y-2 p-6 pb-0">
              <CardTitle className="text-2xl font-semibold text-primary h-16">
                {project.title}
              </CardTitle>
              <CardDescription>
                <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground marker:text-primary/50">
                  {project.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </CardDescription>
            </CardHeader>

            {project.technologies && project.technologies.length > 0 && (
              <div className="mt-auto px-6 pt-4 pb-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-secondary text-foreground px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {(project.githubLink || project.liveLink) && (
              <div className="flex items-center gap-3 px-6 pb-4">
                {project.githubLink && (
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={`${project.title} source on GitHub`}
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </Button>
                )}

                {project.liveLink && (
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={`${project.title} live demo`}
                    onClick={() => window.open(project.liveLink, "_blank")}
                  >
                    <Monitor className="w-5 h-5" />
                  </Button>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
