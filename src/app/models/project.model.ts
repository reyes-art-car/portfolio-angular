export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  repoUrl?: string;
  demoUrl?: string;
  tags: string[];
  createdAt: string;
}
