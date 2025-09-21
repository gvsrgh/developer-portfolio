import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    slug: 'networking-security',
    title: 'Networking Security Projects',
    summary: 'Repository of various networking projects covering networking concepts to strengthen skills in computer networking and security.',
    description: 'A comprehensive collection of networking and security projects designed to explore and demonstrate various networking concepts, protocols, and security measures. This repository serves as both a learning resource and a practical demonstration of networking skills.',
    year: '2025',
    stack: ['Computer Networking', 'Network Security', 'Protocol Analysis', 'Wireshark', 'Linux'],
    links: {
      github: 'https://github.com/gvsrgh/Networking-to-Security',
    },
    highlights: [
      'Network topology design and implementation',
      'Security protocol analysis and testing',
      'Network monitoring and troubleshooting tools',
      'Practical networking scenarios and solutions'
    ],
    featured: true,
    status: 'in-progress',
  },
  {
    slug: 'pvpsit-events',
    title: 'PVPSIT Events Platform',
    summary: 'Full-stack College Events Web App using React, Node.js, Express, and MongoDB for event management and discovery.',
    description: 'A comprehensive event management platform built specifically for college campuses. The platform streamlines event creation, management, and discovery while providing secure role-based access control and real-time features for enhanced campus engagement.',
    year: '2025',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer', 'Session Management'],
    links: {
      live: 'https://pvpsit-events.vercel.app/',
      github: 'https://github.com/gvsrgh/PVPSIT-Events-Page',
    },
    highlights: [
      'User authentication with role-based access control',
      'Event creation and management dashboard',
      'Real-time event discovery and registration',
      'Media upload and management system',
      'Responsive design for all devices',
      'Email notifications and reminders'
    ],
    featured: true,
    status: 'completed',
  },
  {
    slug: 'sentiment-analysis',
    title: 'Amazon Reviews Sentiment Analysis',
    summary: 'Machine learning project for classifying Amazon product reviews into Positive, Neutral, and Negative sentiments.',
    description: 'A comprehensive machine learning project that analyzes Amazon product reviews to determine sentiment classification. The project explores various ML algorithms and techniques to achieve optimal accuracy in sentiment prediction.',
    year: '2025',
    stack: ['Machine Learning', 'Python', 'Data Analysis', 'Data Preparation', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    links: {
      github: 'https://github.com/gvsrgh/Amazon-Reviews-Sentiment-Analysis',
    },
    highlights: [
      'Automated sentiment classification system',
      'Multiple ML algorithm comparison',
      'Data preprocessing and cleaning pipeline',
      'Visualization of sentiment trends',
      'Model performance evaluation metrics'
    ],
    featured: true,
    status: 'completed',
  },
  {
    slug: 'evercare-health',
    title: 'EverCare Health Management',
    summary: 'Mobile application for elderly health monitoring with medication notifications and family tracking capabilities.',
    description: 'A comprehensive mobile health management application designed specifically for elderly users. The app provides health monitoring, medication reminders, and family connectivity features to ensure better healthcare management for senior citizens.',
    year: '2025',
    stack: ['Java', 'Android Studio', 'Object-Oriented Programming', 'Mobile Development', 'SQLite'],
    links: {
      github: 'https://github.com/gvsrgh/EverCare-App',
    },
    highlights: [
      'Health metrics tracking and monitoring',
      'Medication reminder notifications',
      'Family member connectivity and updates',
      'User-friendly interface for elderly users',
      'Emergency contact system',
      'Health report generation'
    ],
    status: 'completed',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website Development',
    summary: 'Responsive Personal Portfolio Website showcasing projects, skills, and achievements with clean UI.',
    description: 'A professional portfolio website built to showcase technical projects, skills, and achievements. Features responsive design, smooth navigation, and modern UI/UX principles to create an impressive online presence.',
    year: '2024',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'GitHub Pages'],
    links: {
      live: 'https://gvsrgh.github.io/My-Personal-Website/',
      github: 'https://github.com/gvsrgh/My-Personal-Website',
    },
    highlights: [
      'Responsive design for all devices',
      'Interactive project showcase',
      'Skills and achievements section',
      'Contact form integration',
      'Smooth animations and transitions',
      'SEO optimized structure'
    ],
    status: 'completed',
  },
  {
    slug: 'system-programming',
    title: 'System Programming Projects',
    summary: 'Various programming projects including Advanced Attendance Calculator and interactive games using C++ and Java.',
    description: 'A collection of system programming projects demonstrating proficiency in low-level programming concepts, object-oriented programming, and algorithm implementation using C++ and Java.',
    year: '2024',
    stack: ['C++', 'Java', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
    links: {
      github: 'https://github.com/gvsrgh?tab=repositories',
    },
    highlights: [
      'Advanced Attendance Calculator with OOP concepts',
      'Interactive Guess Game with multiple modes',
      'Efficient algorithm implementations',
      'Clean code architecture and documentation',
      'Error handling and input validation'
    ],
    status: 'in-progress',
  },
  {
    slug: 'liver-function-analysis',
    title: 'Liver Function Analysis',
    summary: 'Machine Learning system for predicting liver disease based on medical attributes using Python.',
    description: 'A medical data analysis project that uses machine learning to predict liver disease based on various medical attributes. The project involves comprehensive data preprocessing, model training, and visualization of medical insights.',
    year: '2023',
    stack: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Data Analysis'],
    links: {
      github: 'https://github.com/gvsrgh/Liver-Function-Analysis-Using-Python',
    },
    highlights: [
      'Predictive model for liver disease diagnosis',
      'Comprehensive data preprocessing pipeline',
      'Statistical analysis of medical data',
      'Interactive data visualizations',
      'Model accuracy evaluation and validation'
    ],
    status: 'completed',
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getProjectBySlug = (slug: string) => projects.find(project => project.slug === slug);