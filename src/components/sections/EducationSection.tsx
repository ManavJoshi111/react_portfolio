import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data";

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="space-y-6 px-4 py-6 sm:px-10 md:px-20">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight pt-2">
        🎓 Education
      </h2>

      <div className="grid gap-6">
        {education.map((edu) => (
          <Card key={edu.institution} className="border-muted bg-card">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                {edu.institutionLink ? (
                  <a
                    href={edu.institutionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl font-semibold text-primary"
                  >
                    {edu.institution}
                  </a>
                ) : (
                  <span className="text-xl sm:text-2xl font-semibold text-primary">
                    {edu.institution}
                  </span>
                )}
                <Badge variant="secondary">
                  {edu.startYear} – {edu.endYear}
                </Badge>
              </div>

              <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="font-medium text-base sm:text-lg">
                  {edu.degree}
                </span>
                <span className="text-sm sm:text-base text-muted-foreground">
                  {edu.score}
                </span>
              </div>

              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                {edu.location}
              </p>

              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mt-4">
                  <span className="text-sm sm:text-base font-medium">
                    Relevant Coursework:
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="bg-secondary px-3 py-1 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
