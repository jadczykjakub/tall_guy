import React from "react";
import { getProjects } from "../lib/get-projects";
import ProjectCard from "../components/blog/ProjectCard";

export default function page() {
  const projects = getProjects()
    .filter((item) => item.metadata.published)
    .sort((a, b) => {
      const dateA = new Date(a.metadata.publishedAt!);
      const dateB = new Date(b.metadata.publishedAt!);
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <main className="grid gap-16 md:gap-32">
      <div>
        <h1>Projects</h1>
      </div>

      <div className="grid gap-8">
        {projects.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              image={item.metadata.imageSrc}
              ltr={index % 2 === 0}
              title={item.metadata.title}
              description={item.metadata.shortDescription}
              githubUrl={item.metadata.githubUrl}
              liveUrl={item.metadata.liveUrl}
            />
          );
        })}
      </div>
    </main>
  );
}
