'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Calendar, Filter, Search } from 'lucide-react';
import Container from '../Container';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  duration: string;
  status: 'completed' | 'in-progress';
  demoLink?: string;
  codeLink?: string;
}

const projects: Project[] = [
  {
    id: 'networking-security',
    title: 'Networking Security Projects',
    description: 'Repository of various networking projects covering networking concepts to strengthen skills in computer networking and security.',
    longDescription: 'A comprehensive collection of networking and security projects designed to explore and demonstrate various networking concepts, protocols, and security measures. This repository serves as both a learning resource and a practical demonstration of networking skills.',
    image: '/projects/networking-security.jpg',
    category: 'networking',
    technologies: ['Computer Networking', 'Network Security', 'Protocol Analysis', 'Wireshark', 'Linux'],
    features: [
      'Network topology design and implementation',
      'Security protocol analysis and testing',
      'Network monitoring and troubleshooting tools',
      'Practical networking scenarios and solutions'
    ],
    challenges: [
      'Understanding complex networking protocols',
      'Implementing security measures effectively',
      'Creating comprehensive documentation',
      'Testing in various network environments'
    ],
    duration: 'June 2025 - Present',
    status: 'in-progress',
    codeLink: 'https://github.com/gvsrgh/Networking-to-Security'
  },
  {
    id: 'pvpsit-events',
    title: 'PVPSIT Events Platform',
    description: 'Full-stack College Events Web App using React, Node.js, Express, and MongoDB for event management and discovery.',
    longDescription: 'A comprehensive event management platform built specifically for college campuses. The platform streamlines event creation, management, and discovery while providing secure role-based access control and real-time features for enhanced campus engagement.',
    image: '/projects/pvpsit-events.jpg',
    category: 'web',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer', 'Session Management'],
    features: [
      'User authentication with role-based access control',
      'Event creation and management dashboard',
      'Real-time event discovery and registration',
      'Media upload and management system',
      'Responsive design for all devices',
      'Email notifications and reminders'
    ],
    challenges: [
      'Implementing secure authentication system',
      'Managing file uploads and storage',
      'Creating responsive UI/UX design',
      'Handling real-time data synchronization'
    ],
    duration: 'January 2025 - April 2025',
    status: 'completed',
    demoLink: 'https://pvpsit-events.vercel.app/',
    codeLink: 'https://github.com/gvsrgh/PVPSIT-Events-Page'
  },
  {
    id: 'sentiment-analysis',
    title: 'Amazon Reviews Sentiment Analysis',
    description: 'Machine learning project for classifying Amazon product reviews into Positive, Neutral, and Negative sentiments.',
    longDescription: 'A comprehensive machine learning project that analyzes Amazon product reviews to determine sentiment classification. The project explores various ML algorithms and techniques to achieve optimal accuracy in sentiment prediction.',
    image: '/projects/sentiment-analysis.jpg',
    category: 'ml',
    technologies: ['Machine Learning', 'Python', 'Data Analysis', 'Data Preparation', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    features: [
      'Automated sentiment classification system',
      'Multiple ML algorithm comparison',
      'Data preprocessing and cleaning pipeline',
      'Visualization of sentiment trends',
      'Model performance evaluation metrics'
    ],
    challenges: [
      'Handling large datasets efficiently',
      'Feature engineering for text data',
      'Model selection and optimization',
      'Dealing with imbalanced datasets'
    ],
    duration: 'January 2025 - March 2025',
    status: 'completed',
    codeLink: 'https://github.com/gvsrgh/Amazon-Reviews-Sentiment-Analysis'
  },
  {
    id: 'evercare-health',
    title: 'EverCare Health Management',
    description: 'Mobile application for elderly health monitoring with medication notifications and family tracking capabilities.',
    longDescription: 'A comprehensive mobile health management application designed specifically for elderly users. The app provides health monitoring, medication reminders, and family connectivity features to ensure better healthcare management for senior citizens.',
    image: '/projects/evercare-health.jpg',
    category: 'mobile',
    technologies: ['Java', 'Android Studio', 'Object-Oriented Programming', 'Mobile Development', 'SQLite'],
    features: [
      'Health metrics tracking and monitoring',
      'Medication reminder notifications',
      'Family member connectivity and updates',
      'User-friendly interface for elderly users',
      'Emergency contact system',
      'Health report generation'
    ],
    challenges: [
      'Designing accessible UI for elderly users',
      'Implementing reliable notification system',
      'Ensuring data privacy and security',
      'Optimizing battery usage for long-term monitoring'
    ],
    duration: 'January 2025 - March 2025',
    status: 'completed',
    codeLink: 'https://github.com/gvsrgh/EverCare-App'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website Development',
    description: 'Responsive Personal Portfolio Website showcasing projects, skills, and achievements with clean UI.',
    longDescription: 'A professional portfolio website built to showcase technical projects, skills, and achievements. Features responsive design, smooth navigation, and modern UI/UX principles to create an impressive online presence.',
    image: '/projects/portfolio-website.jpg',
    category: 'web',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'GitHub Pages'],
    features: [
      'Responsive design for all devices',
      'Interactive project showcase',
      'Skills and achievements section',
      'Contact form integration',
      'Smooth animations and transitions',
      'SEO optimized structure'
    ],
    challenges: [
      'Creating responsive layouts',
      'Optimizing loading performance',
      'Implementing smooth animations',
      'Cross-browser compatibility testing'
    ],
    duration: 'June 2024 - November 2024',
    status: 'completed',
    codeLink: 'https://github.com/gvsrgh/My-Personal-Website',
    demoLink: 'https://gvsrgh.github.io/My-Personal-Website/'
  },
  {
    id: 'system-programming',
    title: 'System Programming Projects',
    description: 'Various programming projects including Advanced Attendance Calculator and interactive games using C++ and Java.',
    longDescription: 'A collection of system programming projects demonstrating proficiency in low-level programming concepts, object-oriented programming, and algorithm implementation using C++ and Java.',
    image: '/projects/system-programming.jpg',
    category: 'programming',
    technologies: ['C++', 'Java', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
    features: [
      'Advanced Attendance Calculator with OOP concepts',
      'Interactive Guess Game with multiple modes',
      'Efficient algorithm implementations',
      'Clean code architecture and documentation',
      'Error handling and input validation'
    ],
    challenges: [
      'Implementing complex OOP concepts',
      'Optimizing algorithm performance',
      'Memory management in C++',
      'Creating user-friendly console interfaces'
    ],
    duration: 'June 2024 - Present',
    status: 'in-progress',
    codeLink: 'https://github.com/gvsrgh?tab=repositories'
  },
  {
    id: 'liver-function-analysis',
    title: 'Liver Function Analysis',
    description: 'Machine Learning system for predicting liver disease based on medical attributes using Python.',
    longDescription: 'A medical data analysis project that uses machine learning to predict liver disease based on various medical attributes. The project involves comprehensive data preprocessing, model training, and visualization of medical insights.',
    image: '/projects/liver-analysis.jpg',
    category: 'ml',
    technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Data Analysis'],
    features: [
      'Predictive model for liver disease diagnosis',
      'Comprehensive data preprocessing pipeline',
      'Statistical analysis of medical data',
      'Interactive data visualizations',
      'Model accuracy evaluation and validation'
    ],
    challenges: [
      'Working with sensitive medical data',
      'Ensuring model accuracy and reliability',
      'Handling missing and noisy data',
      'Creating meaningful visualizations'
    ],
    duration: 'August 2023 - December 2023',
    status: 'completed',
    codeLink: 'https://github.com/gvsrgh/Liver-Function-Analysis-Using-Python'
  }
];

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web Development' },
  { value: 'ml', label: 'Machine Learning' },
  { value: 'mobile', label: 'Mobile Apps' },
  { value: 'networking', label: 'Networking' },
  { value: 'programming', label: 'Programming' }
];

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <Container>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            A comprehensive showcase of my development journey and technical expertise
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            {/* Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-400 to-blue-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-bold text-lg text-center px-4">
                    {project.title}
                  </h3>
                </div>
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-purple-500 hover:text-purple-600 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                        title="Source Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Duration */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <div className="relative h-64 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg mb-6">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-white font-bold text-xl text-center px-4">
                          {selectedProject.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {selectedProject.longDescription}
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                      {selectedProject.demoLink && (
                        <a
                          href={selectedProject.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      )}
                      {selectedProject.codeLink && (
                        <a
                          href={selectedProject.codeLink}
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
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
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
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Technical Challenges
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {challenge}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Duration and Status */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {selectedProject.duration}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedProject.status === 'completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {selectedProject.status === 'completed' ? 'Completed' : 'In Progress'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </Container>
  );
}