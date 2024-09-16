import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getCertificateList(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
  }
  
  type Metadata = {
    title: string;
    githubUrl: boolean;
    certificateUrl: string;
    shortDescription: string;
    issueDate: string;
    imageSrc: string;
  };
  
  export const getCertificates = () => {
    const CERTIFICATES_FOLDER = path.join(process.cwd(), 'content', 'certificates');
  
    const posts = getCertificateList(CERTIFICATES_FOLDER);
  
    return posts.map((post) => {
      const filePath = path.join(CERTIFICATES_FOLDER, post);

      
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
  
      return {
        metadata: data as Metadata,
      };
    });
  };