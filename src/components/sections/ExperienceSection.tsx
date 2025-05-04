import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="space-y-6 px-4 py-6 sm:px-10 md:px-20">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight pt-2">
        💼 Experience
      </h2>

      <div className="grid gap-6">
        {experience.map((exp) => (
          <Card key={exp.company} className="border-muted bg-card">
            <CardContent className="p-4 sm:p-6">
              {exp.companyLink ? (
                <a
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl font-semibold text-primary"
                >
                  {exp.company}
                </a>
              ) : (
                <span className="text-xl sm:text-2xl font-semibold text-primary">
                  {exp.company}
                </span>
              )}

              <div className="mt-4 space-y-6">
                {exp.roles.map((role, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <span className="font-medium text-base sm:text-lg">
                        {role.title}
                      </span>
                      <Badge variant="secondary">
                        {role.startTime} – {role.endTime}
                      </Badge>
                    </div>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-sm sm:text-base text-muted-foreground">
                      {role.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
