import { useState } from "react";
import { GithubIcon, Monitor, ChevronDown, ChevronUp } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data";
import { cn } from "@/lib/utils";

const ProjectSection = () => {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleExpand = (title: string) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  return (
    <section
      className="project-section space-y-6 px-4 py-6 sm:px-10 md:px-20"
      id="projects"
    >
      <h1 className="text-3xl font-bold mb-8">📂 Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => {
          const isExpanded = expandedCards.has(project.title);
          return (
            <Card
              key={project.title}
              className="flex flex-col justify-start border hover:shadow-md transition-shadow duration-200 border-muted py-2"
            >
              <CardHeader className="space-y-2 p-6 pb-0">
                <CardTitle className="text-2xl font-semibold text-primary h-16">
                  {project.title}
                </CardTitle>
                <CardDescription
                  className={cn(
                    "text-sm text-muted-foreground transition-all",
                    !isExpanded && "line-clamp-3"
                  )}
                >
                  {project.description}
                </CardDescription>
                <Button
                  variant="ghost"
                  className="px-6 self-start flex gap-1 text-xs"
                  onClick={() => toggleExpand(project.title)}
                >
                  {project.description.length > 200 &&
                    (isExpanded ? (
                      <>
                        Show less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Show more <ChevronDown className="w-4 h-4" />
                      </>
                    ))}
                </Button>
              </CardHeader>

              {project.technologies && project.technologies.length > 0 && (
                <div className="px-6 pb-2 flex flex-wrap gap-2">
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

              <div className="flex items-center justify-between px-6 pb-4">
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </Button>

                  {project.liveLink && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      <Monitor className="w-5 h-5" />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
