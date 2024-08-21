import { MetadataRoute } from 'next';
import { getBlogs } from './lib/get-blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getBlogs();

  const blogsEntries: MetadataRoute.Sitemap = blogs.map(({ slug }) => ({
    url: `${process.env.PUBLIC_BASE_URL}/blog/${slug}`,
  }));

  return [
    {
      url: `${process.env.PUBLIC_BASE_URL}/blog`,
    },
    ...blogsEntries,
  ];
}
