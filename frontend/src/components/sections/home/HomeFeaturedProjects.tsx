'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, X, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Container from '../../Container';
import Button from '../../Button';
import { getFeaturedProjects } from '@/data/projects';
import { Project } from '@/lib/types';

export default function HomeFeaturedProjects() {
  const featuredProjects = getFeaturedProjects();
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Handle ESC key to close modals
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (zoomedImage) {
          setZoomedImage(null);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [zoomedImage, selectedProject]);

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
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group relative hover:shadow-blue-500/20 hover:ring-1 hover:ring-blue-500/20 cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{
                  filter: 'drop-shadow(0 0 0 transparent)',
                  transition: 'all 0.5s ease-in-out, filter 0.5s ease-in-out',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.filter =
                    'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.filter = 'drop-shadow(0 0 0 transparent)';
                }}
              >
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden">
                  {project.cover ? (
                    <>
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover z-0 transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Soft bottom gradient for readability */}
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300" />
                      {/* View Details Overlay */}
                      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/50 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
                          Click for details
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="h-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300">
                      <h3 className="text-white font-bold text-lg text-center px-4">{project.title}</h3>
                    </div>
                  )}

                  {/* Tech badges */}
                  <div className="absolute bottom-4 left-4 right-4 z-30">
                    <div className="flex space-x-2">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/90 dark:bg-gray-800/90 text-xs font-medium rounded-full text-gray-700 dark:text-gray-300 backdrop-blur-sm"
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
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{project.summary}</p>

                  {/* Project Links */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
                          title="View Code"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
                          title="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 id="modal-title" className="text-3xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div
                    className="relative h-64 rounded-lg mb-6 cursor-pointer group overflow-hidden"
                    onClick={() => setZoomedImage(selectedProject.cover || null)}
                  >
                    {selectedProject.cover ? (
                      <>
                        <Image
                          src={selectedProject.cover}
                          alt={selectedProject.title}
                          fill
                          className="object-cover z-0 group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 z-10
                                     bg-black/0 group-hover:bg-black/20
                                     transition-opacity duration-300 flex items-center justify-center"
                        >
                          <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Click to Zoom
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300">
                        <h3 className="text-white font-bold text-xl text-center px-4">{selectedProject.title}</h3>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedProject.description}</p>

                  <div className="flex items-center gap-4 mb-6">
                    {selectedProject.links?.live && (
                      <a
                        href={selectedProject.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.links?.github && (
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Year and Status */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {selectedProject.duration || selectedProject.year}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedProject.status === 'completed'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}
                    >
                      {selectedProject.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                </div>
                
                {/* ESC hint */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Press <kbd className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded">ESC</kbd> or click outside to close
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-8 z-50"
          onClick={() => setZoomedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Zoomed project image"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative w-[80vw] h-[80vh]"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            {/* Close button positioned at top-right of image */}
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute -top-4 -right-4 z-10 text-white bg-black/70 hover:bg-black/90 rounded-full p-3 transition-all duration-200 shadow-lg border-2 border-white/20"
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Image container */}
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
              <Image 
                src={zoomedImage} 
                alt="Zoomed project image" 
                fill 
                className="object-contain" 
                sizes="80vw"
                priority
              />
            </div>
            
            {/* ESC hint */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <span className="text-white/70 text-sm bg-black/50 px-3 py-1 rounded-full">
                Press ESC or click outside to close
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}