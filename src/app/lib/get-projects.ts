import fs from 'fs';
import path from 'path';
import { cache } from 'react';
import matter from 'gray-matter';

function getProjectsFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

type Metadata = {
    title: string;
    publishedAt: string;
    author: string;
    published: boolean;
    imageSrc: string;
    shortDescription: string;
    liveUrl: string;
    githubUrl: string;

  };

export const getProjects = () => {
    const PROJECTS_FOLDER = path.join(process.cwd(), 'content', 'projects');

    const projects = getProjectsFiles(PROJECTS_FOLDER);

    return projects.map((project) => {
        const filePath = path.join(PROJECTS_FOLDER, project);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);
    
        return {
          metadata: data as Metadata,
        };
      });
}