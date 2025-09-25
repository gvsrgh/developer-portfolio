import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    slug: 'edubot-plus',
    title: 'Edubot+',
    summary: 'An advanced NLP-powered chatbot designed to provide comprehensive student support and educational assistance.',
    description: 'Edubot+ is an intelligent chatbot system leveraging Natural Language Processing to provide personalized student support, answer academic queries, and assist with educational tasks. The bot is designed to understand context and provide relevant responses to enhance the learning experience.',
    year: '2025',
    stack: ['Python', 'Natural Language Processing', 'Machine Learning', 'TensorFlow', 'Flask', 'API Development'],
    category: 'ai', // Manual category assignment
    links: {},
    highlights: [
      'Advanced NLP algorithms for understanding student queries',
      'Contextual response generation',
      'Multi-topic academic support capabilities',
      'Integration with educational platforms',
      'Continuous learning and improvement system'
    ],
    status: 'in-progress',
  },
  {
    slug: 'developer-portfolio',
    title: 'Developer Portfolio Website',
    summary: 'Personal developer portfolio showcasing projects, skills, and achievements with a modern responsive design.',
    description: 'Built a responsive Developer Portfolio website to showcase projects, skills, and achievements. Designed with a clean UI, project highlights, and smooth navigation to provide recruiters and peers with an interactive professional profile. Implemented optimized routing, reusable React components, and SEO-friendly structure.',
    year: '2025',
    duration: 'Sep 2025',
    stack: ['React.js', 'Tailwind CSS', 'JavaScript', 'Responsive Web Design', 'GitHub Pages / Vercel Deployment'],
    category: 'web',
    links: {
      live: 'https://gvsr.dev/', // replace with your actual live link
      github: 'https://github.com/gvsrgh/developer-portfolio', // replace if different repo
    },
    cover: '/projects/developer-portfolio-cover.jpg',
    highlights: [
      'Responsive portfolio with modern UI/UX',
      'Showcased academic and personal projects',
      'Interactive project cards with live and GitHub links',
      'SEO-friendly metadata for better visibility',
      'Optimized performance with clean, reusable components',
      'Deployed on Vercel for fast, global access'
    ],
    featured: true,
    status: 'in-progress',
  },
  {
    slug: 'networking-security',
    title: 'Networking to Security',
    summary: 'Repository of various networking projects covering networking concepts to strengthen skills in computer networking.',
    description: 'This is a repository consisting of various projects related to networking. Each project covers various topics of networking concepts, to strengthen my skills in networking and explore security implementations.',
    year: '2025',
    duration: 'Jun 2025 - Present',
    stack: ['Computer Networking', 'Network Security', 'Protocol Analysis', 'Wireshark', 'Linux'],
    links: {
      github: 'https://github.com/gvsrgh/Networking-to-Security',
    },
    cover: '/projects/networking-security-cover.jpg',
    highlights: [
      'Basic network project implementations',
      'Network topology design and implementation',
      'Security protocol analysis and testing',
      'Network monitoring and troubleshooting tools',
      'Practical networking scenarios and solutions'
    ],
    status: 'in-progress',
  },
  {
    slug: 'pvpsit-events',
    title: 'PVPSIT Events Page',
    summary: 'Full-stack College Events Web App using React, Node.js, Express, and MongoDB to streamline event creation, management, and discovery.',
    description: 'Built a full-stack College Events Web App using React, Node.js, Express, and MongoDB to streamline event creation, management, and discovery. Implemented secure role-based access with JWT and media uploads using Multer to boost campus engagement.',
    year: '2025',
    duration: 'Jan 2025 - Apr 2025',
    stack: ['Full-Stack Development', 'Node.js', 'Express.js', 'Session Management', 'React.js', 'JSON Web Token (JWT)', 'MongoDB', 'Database Administration', 'Realtime Programming', 'Front-End Development', 'Back-End Web Development'],
    category: 'web', // Manual category assignment
    links: {
      live: 'https://pvpsit-events.vercel.app/',
      github: 'https://github.com/gvsrgh/PVPSIT-Events-Page',
    },
    cover: '/projects/pvpsit-events-cover.jpg',
    highlights: [
      'User authentication with role-based access control',
      'Event creation and management dashboard',
      'Real-time event discovery and registration',
      'Media upload and management system using Multer',
      'Responsive design for all devices',
      'JWT-based secure authentication'
    ],
    featured: true,
    status: 'completed',
  },
  {
    slug: 'amazon-sentiment-analysis',
    title: 'Amazon Reviews Sentiment Analysis',
    summary: 'Machine Learning project for classifying Amazon product reviews into Positive 😊, Neutral 😐, and Negative 😠 sentiments.',
    description: 'Machine Learning project for classifying Amazon product reviews into Positive 😊, Neutral 😐, and Negative 😠 sentiments. This academic project explores various ML models to achieve optimal sentiment classification accuracy.',
    year: '2025',
    duration: 'Jan 2025 - Mar 2025',
    stack: ['Machine Learning', 'Data Preparation', 'Data Analysis', 'Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Team Leadership', 'Team Management'],
    links: {
      github: 'https://github.com/gvsrgh/Amazon-Reviews-Sentiment-Analysis',
    },
    cover: '/projects/sentiment-analysis-cover.jpg',
    highlights: [
      'Automated sentiment classification into three categories',
      'Multiple ML algorithm comparison and testing',
      'Data preprocessing and cleaning pipeline',
      'Team leadership in academic project setting',
      'Model performance evaluation and optimization'
    ],
    status: 'completed',
  },
  {
    slug: 'evercare-health',
    title: 'EverCare - Elderly Health & Medication Management System',
    summary: 'Basic Mobile application for elderly people to monitor their health and get medication notifications as per given data and also can be monitored by family.',
    description: 'This is a basic Mobile application for elderly people to monitor their health and get medication notifications as per given data and also can be monitored by family members for better care coordination.',
    year: '2025',
    duration: 'Jan 2025 - Mar 2025',
    stack: ['Java', 'OOPs', 'Android Studio', 'Mobile Application Development'],
    links: {
      github: 'https://github.com/gvsrgh/EverCare-App',
    },
    cover: '/projects/evercare-cover.jpg',
    highlights: [
      'Health metrics tracking and monitoring',
      'Medication reminder notifications system',
      'Family member connectivity and monitoring',
      'User-friendly interface designed for elderly users',
      'Basic mobile app development using Java',
      'Android Studio implementation'
    ],
    featured: true,
    status: 'completed',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    summary: 'Created a responsive Personal Portfolio Website using HTML, CSS, JavaScript, and React to showcase projects, skills, and achievements.',
    description: 'Created a responsive Personal Portfolio Website using HTML, CSS, JavaScript, and React to showcase projects, skills, and achievements. Designed with a clean UI and smooth navigation to enhance personal branding and professional visibility.',
    year: '2024',
    duration: 'Jun 2024 - Nov 2024',
    stack: ['HTML', 'Cascading Style Sheets (CSS)', 'JavaScript', 'Bootstrap (Framework)', 'File Management', 'GitHub'],
    links: {
      live: 'https://gvsrgh.github.io/My-Personal-Website/',
      github: 'https://github.com/gvsrgh/My-Personal-Website',
    },
    cover: '/projects/portfolio-website-cover.jpg',
    highlights: [
      'Responsive design for all devices',
      'Clean UI with smooth navigation',
      'Interactive project showcase section',
      'Skills and achievements presentation',
      'Professional branding and visibility',
      'Bootstrap framework implementation'
    ],
    featured: true,
    status: 'completed',
  },
  {
    slug: 'food-spoilage-detection',
    title: 'Food Spoilage Detection App (SIH 2024)',
    summary: 'Frontend Flutter app prototype that assesses food freshness with sensor-driven UI, insights, and alerts—built for Smart India Hackathon 2024.',
    description: 'A mobile-first Flutter prototype to explore food freshness assessment and spoilage alerts for SIH 2024. The app focuses on the frontend UX: real-time spoilage indication UI, historical insights, and notification flows. Built using prompt-engineered iterations with ChatGPT to refine copy and flows. (Frontend only—no backend yet.)',
    year: '2024',
    duration: 'Sep 2024',
    stack: [
      'Flutter',
      'Dart',
      'Mobile Development',
      'Android',
      'Responsive UI',
      'Charts & Data Visualization',
      'Local Notifications',
      'Sensors (UX prototype)',
      'State Management'
    ],
    links: {
      live: '',
      github: 'https://github.com/gvsrgh/Food-Spoilage-Detection-app-using-Flutter',
    },
    cover: '/projects/food-spoilage-detection-cover.jpg',
    highlights: [
      'Real-time spoilage indication UI with clear visual feedback',
      'Historical freshness trends and basic analytics views',
      'Notification flow to alert users on spoilage and actions',
      'Mobile-first responsive layout with polished Material theming',
      'Prompt-engineered copy and flows refined with ChatGPT',
      'Frontend-only prototype to validate UX and interactions'
    ],
    featured: false,
    status: 'completed',
  },
  {
    slug: 'flutter-project-works',
    title: 'Flutter Mini Projects (SIH Prep)',
    summary: 'A collection of small Flutter apps: Sign In/Sign Up UI, Top Movies (API), Calculator, and Tic Tac Toe—built as prep for SIH.',
    description: 'This repository bundles multiple Flutter mini-projects used during SIH preparation: an auth UI (sign in/sign up), a Top Movies app that consumes a public API, a basic Calculator, and a Tic Tac Toe game. Each project highlights a different aspect of Flutter—network calls & JSON parsing, widget composition, layout, state handling, and simple game logic.',
    year: '2024',
    duration: 'Sep 2024',
    stack: [
      'Flutter',
      'Dart',
      'Mobile Development',
      'Android',
      'REST API',
      'HTTP/JSON',
      'UI/UX',
      'Routing',
      'State Management'
    ],
    links: {
      live: '',
      github: 'https://github.com/gvsrgh/Flutter-Project-Works',
    },
    cover: '/projects/flutter-project-works-cover.jpg',
    highlights: [
      'Sign In / Sign Up UI with form validation patterns',
      'Top Movies app using REST API consumption and JSON parsing',
      'Calculator with clean widget composition and basic operations',
      'Tic Tac Toe with win/draw detection and simple game state',
      'Reusable components and consistent theming across projects',
      'Instructions for running each mini-app locally'
    ],
    featured: false,
    status: 'completed',
  },
  {
    slug: 'guess-game',
    title: 'Guess Game',
    summary: "It's a small guess game, where you need to guess a number or a character or a word (Using Hint).",
    description: "It's a small guess game, where you need to guess a number or a character or a word (Using Hint). Features multiple game modes with an interactive menu system for enhanced user experience.",
    year: '2024',
    duration: 'Jul 2024 - Jul 2024',
    stack: ['Programming', 'Problem Solving', 'Java', 'Game Development'],
    category: 'programming',
    links: {
      github: 'https://github.com/gvsrgh/Java-Project-Works/tree/main/Guess%20me',
    },
    cover: '/projects/guess-game-cover.jpg',
    highlights: [
      'Multiple game modes (numbers, characters, words)',
      'Interactive menu system for game selection',
      'Hint system for enhanced gameplay',
      'User-friendly command-line interface',
      'Problem-solving approach to game logic'
    ],
    status: 'completed',
  },
  {
    slug: 'advanced-attendance-calculator',
    title: 'Advanced Attendance Calculator',
    summary: 'In this project, referring to some OOP\'s concepts. I upgraded the Attendance Calculator using C++.',
    description: 'In this project, referring to some OOP\'s concepts, I upgraded the Attendance Calculator using C++. The system allows users to save attendance subject-wise with improved functionality and object-oriented design.',
    year: '2024',
    duration: 'Jun 2024 - Jun 2024',
    stack: ['C++', 'Programming', 'Problem Solving', 'Object-Oriented Programming'],
    links: {
      github: 'https://github.com/gvsrgh/CPP-Project-Works/tree/main/Advanced%20Attendance%20Calculator',
    },
    cover: '/projects/advanced-attendance.png',
    highlights: [
      'Object-oriented programming implementation',
      'Subject-wise attendance tracking',
      'Data persistence and management',
      'Upgraded from basic version with enhanced features',
      'Clean code architecture using C++'
    ],
    status: 'completed',
  },
  {
    slug: 'attendance-calculator',
    title: 'Attendance Calculator',
    summary: 'Basic attendance calculator system implemented in C programming language.',
    description: 'A fundamental attendance calculator system built using C programming language. This project demonstrates basic programming concepts and provides a simple solution for tracking attendance.',
    year: '2024',
    duration: 'Jun 2024 - Jun 2024',
    stack: ['Programming', 'C (Programming Language)', 'Problem Solving'],
    links: {
      github: 'https://github.com/gvsrgh/C-Project-Works/tree/main/Attendance%20Calculator',
    },
    cover: '/projects/attendance-calculator.png',
    highlights: [
      'Basic attendance calculation functionality',
      'C programming language implementation',
      'Simple and efficient algorithm design',
      'Foundation for advanced attendance systems',
      'Core programming concept demonstration'
    ],
    status: 'completed',
  },
  {
    slug: 'liver-function-analysis',
    title: 'Liver Function Analysis',
    summary: 'Developed a Liver Function Analysis system using Python and Machine Learning to predict liver disease based on medical attributes.',
    description: 'Developed a Liver Function Analysis system using Python and Machine Learning to predict liver disease based on medical attributes. Utilized pandas, scikit-learn, and matplotlib for data preprocessing, model training, and result visualization, aiding in early diagnosis support.',
    year: '2023',
    duration: 'Aug 2023 - Dec 2023',
    stack: ['Python (Programming Language)', 'Machine Learning', 'Data Analysis', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    links: {
      github: 'https://github.com/gvsrgh/Liver-Function-Analysis-Using-Python',
    },
    cover: '/projects/liver-analysis.png',
    highlights: [
      'Predictive model for liver disease diagnosis',
      'Comprehensive data preprocessing pipeline',
      'Medical data statistical analysis',
      'Interactive data visualizations using matplotlib',
      'Early diagnosis support system',
      'Model accuracy evaluation and validation'
    ],
    status: 'completed',
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getProjectBySlug = (slug: string) => projects.find(project => project.slug === slug);