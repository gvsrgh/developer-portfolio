'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Container from '../Container';
import Button from '../Button';

const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/gvsrgh/ecommerce-platform",
    demo: "https://demo.example.com",
    image: "/projects/ecommerce.jpg"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/gvsrgh/task-manager",
    demo: "https://task-manager.example.com",
    image: "/projects/task-manager.jpg"
  },
  {
    id: 3,
    title: "Machine Learning Dashboard",
    description: "Interactive dashboard for data visualization and machine learning model deployment with Python and Flask backend.",
    technologies: ["Python", "Flask", "TensorFlow", "React"],
    github: "https://github.com/gvsrgh/ml-dashboard",
    demo: "https://ml-dashboard.example.com",
    image: "/projects/ml-dashboard.jpg"
  }
];

export default function HomeFeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in web development, 
              mobile apps, and machine learning.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/90 dark:bg-gray-800/90 text-xs font-medium rounded-full text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Links */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                        title="View Code"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button href="/projects" size="lg">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}