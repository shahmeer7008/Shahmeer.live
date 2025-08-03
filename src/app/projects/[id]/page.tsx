import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

type ProjectData = {
  title: string;
  date: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  demo: string;
  images: string[];
};

const projectsData: Record<string, ProjectData> = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    date: "March 2024",
    description: "A comprehensive e-commerce solution built with modern web technologies...",
    longDescription: `This e-commerce platform represents a full-stack solution...`,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "Express", "JWT"],
    github: "https://github.com/shahmeer/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
  },
  "task-management": {
    title: "Task Management App",
    date: "January 2024",
    description: "A collaborative task management application with real-time updates...",
    longDescription: `This task management application was designed to solve...`,
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/shahmeer/taskapp",
    demo: "https://taskapp-demo.vercel.app",
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
  },
};

// Dynamic import for client component
const ProjectClientPage = dynamic(() => import("./project-client"), { ssr: false });

export default function Page({ params }: { params: { id: string } }) {
  const project = projectsData[params.id];

  if (!project) {
    notFound();
  }

  return <ProjectClientPage project={project} />;
}
