import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    slug: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    summary: 'Modern e-commerce platform built with Next.js and Stripe integration',
    description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and secure payment processing. Built with modern technologies for optimal performance and user experience.',
    year: '2024',
    stack: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    links: {
      live: 'https://example.com', // TODO: Add your live project URL
      github: 'https://github.com/yourusername/project', // TODO: Add your GitHub repo
    },
    cover: '/projects/ecommerce-cover.jpg', // TODO: Add project cover image
    highlights: [
      'Implemented secure payment processing with Stripe',
      'Built responsive design with Tailwind CSS',
      'Created admin dashboard for product management',
      'Integrated email notifications for orders',
    ],
    featured: true,
  },
  {
    slug: 'task-management-app',
    title: 'Task Management App',
    summary: 'Collaborative task management application with real-time updates',
    description: 'A comprehensive task management solution that allows teams to collaborate effectively with real-time updates, project tracking, and deadline management.',
    year: '2024',
    stack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'Material-UI'],
    links: {
      live: 'https://example.com', // TODO: Add your live project URL
      github: 'https://github.com/yourusername/project', // TODO: Add your GitHub repo
    },
    cover: '/projects/taskapp-cover.jpg', // TODO: Add project cover image
    highlights: [
      'Real-time collaboration with Socket.io',
      'Drag-and-drop task management',
      'Team member assignment and notifications',
      'Progress tracking and analytics',
    ],
    featured: true,
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    summary: 'Beautiful weather dashboard with location-based forecasts',
    description: 'An elegant weather application that provides detailed weather information, forecasts, and beautiful visualizations based on user location or search.',
    year: '2023',
    stack: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Sass', 'PWA'],
    links: {
      live: 'https://example.com', // TODO: Add your live project URL
      github: 'https://github.com/yourusername/project', // TODO: Add your GitHub repo
    },
    cover: '/projects/weather-cover.jpg', // TODO: Add project cover image
    highlights: [
      'Beautiful data visualizations with Chart.js',
      'Progressive Web App functionality',
      'Location-based weather detection',
      'Responsive design for all devices',
    ],
  },
  // TODO: Add more of your projects here
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getProjectBySlug = (slug: string) => projects.find(project => project.slug === slug);