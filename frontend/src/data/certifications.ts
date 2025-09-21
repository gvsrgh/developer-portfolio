export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  date: string;
  status: 'completed' | 'in-progress' | 'planned';
  category: string;
  credentialId?: string;
  credentialUrl?: string;
  certificateUrl?: string;
  skills: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
  featured: boolean;
}

export interface CertificationCategory {
  value: string;
  label: string;
}

export const defaultCertificationCategories: CertificationCategory[] = [
  { value: 'all', label: 'All Certifications' },
  { value: 'cloud', label: 'Cloud Computing' },
  { value: 'data', label: 'Data Analytics' },
  { value: 'web-dev', label: 'Web Development' },
  { value: 'programming', label: 'Programming' },
  { value: 'competitive', label: 'Competitive Programming' },
  { value: 'ml', label: 'Machine Learning' }
];

export const certifications: Certification[] = [
  // Featured Certifications
  {
    id: 'salesforce-agentforce',
    title: 'Salesforce Certified Agentforce Specialist',
    issuer: 'Salesforce',
    description: 'Professional certification in Salesforce Agentforce specialist capabilities and AI-powered automation.',
    date: 'July 2025',
    status: 'completed',
    category: 'cloud',
    credentialId: '6328578',
    credentialUrl: 'https://www.salesforce.com/trailblazer/credentials',
    certificateUrl: '/documents/AgentforceSpecalist.pdf',
    skills: ['Salesforce', 'AI Automation', 'CRM', 'Cloud Computing'],
    level: 'advanced',
    featured: true
  },
  {
    id: 'tcs-codevita',
    title: 'TCS CodeVita Season 12',
    issuer: 'Tata Consultancy Services',
    description: 'Successfully cleared TCS CodeVita Season 12 Round 1, demonstrating strong competitive programming skills.',
    date: 'April 2025',
    status: 'completed',
    category: 'competitive',
    certificateUrl: '/documents/TCS CodeVita Season 12 Certificate - gvsr.pdf',
    skills: ['Competitive Programming', 'Problem Solving', 'C++', 'Python'],
    level: 'intermediate',
    featured: true
  },
  {
    id: 'fullstack-bootcamp',
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    description: 'Comprehensive full-stack web development course covering modern technologies and frameworks.',
    date: 'April 2025',
    status: 'completed',
    category: 'web-dev',
    credentialId: 'UC-9e07c443-c4df-4bff-b3cb-782cc5aeb5f9',
    credentialUrl: 'https://www.udemy.com/certificate/UC-9e07c443-c4df-4bff-b3cb-782cc5aeb5f9',
    certificateUrl: '/documents/The Complete Full-Stack Web Development Bootcamp.jpg',
    skills: ['Full-Stack Development', 'Node.js', 'Express.js', 'React.js', 'Bootstrap', 'Git', 'PostgreSQL'],
    level: 'intermediate',
    featured: true
  },
  {
    id: 'acm-data-structures',
    title: 'ACM School on Data Structures and Algorithms for Strings',
    issuer: 'ACM',
    description: 'Advanced course on data structures and algorithms for strings with applications to search engines and computational biology.',
    date: 'December 2024',
    status: 'completed',
    category: 'programming',
    certificateUrl: '/documents/ACM.jpeg',
    skills: ['Data Structures', 'Algorithms', 'String Processing', 'Search Engines', 'Computational Biology'],
    level: 'advanced',
    featured: true
  },
  {
    id: 'google-data-analytics',
    title: 'Data Analytics Professional Certificate',
    issuer: 'Google (Coursera)',
    description: 'Comprehensive program covering data analysis, data visualization, and business intelligence using industry-standard tools.',
    date: 'January 2024',
    status: 'completed',
    category: 'data',
    credentialId: '9VUR5VL5X2LA',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/9VUR5VL5X2LA',
    certificateUrl: '/documents/Google data analytics.pdf',
    skills: ['Data Analysis', 'R Programming', 'SQL', 'Tableau', 'Data Visualization'],
    level: 'intermediate',
    featured: true
  },

  // Other Certifications
  {
    id: 'hackerrank-java',
    title: 'Java (Basic)',
    issuer: 'HackerRank',
    description: 'Foundational Java programming certification covering core concepts and object-oriented programming.',
    date: 'December 2024',
    status: 'completed',
    category: 'programming',
    credentialId: 'b8808d3a3f74',
    credentialUrl: 'https://www.hackerrank.com/certificates/b8808d3a3f74',
    certificateUrl: '/documents/java_basic certificate.pdf',
    skills: ['Java', 'Object-Oriented Programming'],
    level: 'beginner',
    featured: false
  },
  {
    id: 'hackerrank-problem-solving',
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    description: 'Basic problem solving certification demonstrating algorithmic thinking and programming fundamentals.',
    date: 'December 2024',
    status: 'completed',
    category: 'programming',
    credentialId: '9ed3318b688e',
    credentialUrl: 'https://www.hackerrank.com/certificates/9ed3318b688e',
    certificateUrl: '/documents/problem_solving_basic certificate.pdf',
    skills: ['Problem Solving', 'C Programming', 'C++', 'Algorithms'],
    level: 'beginner',
    featured: false
  },
  {
    id: 'hackerrank-python',
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    description: 'Python programming fundamentals certification covering syntax, data structures, and basic programming concepts.',
    date: 'December 2024',
    status: 'completed',
    category: 'programming',
    credentialId: 'e2e7e257ab86',
    credentialUrl: 'https://www.hackerrank.com/certificates/e2e7e257ab86',
    certificateUrl: '/documents/python_basic certificate.pdf',
    skills: ['Python Programming'],
    level: 'beginner',
    featured: false
  },
  {
    id: 'udemy-dsa-cpp',
    title: 'Mastering Data Structures & Algorithms using C and C++',
    issuer: 'Udemy',
    description: 'Comprehensive course on data structures and algorithms implementation using C and C++.',
    date: 'April 2024',
    status: 'completed',
    category: 'programming',
    credentialId: 'UC-e26fa327-23be-4e84-bf37-2c33e1ec36a6',
    credentialUrl: 'https://www.udemy.com/certificate/UC-e26fa327-23be-4e84-bf37-2c33e1ec36a6',
    certificateUrl: '/documents/DSA using C & C++.jpg',
    skills: ['C++', 'C Programming', 'Data Structures', 'Algorithms', 'STL'],
    level: 'intermediate',
    featured: false
  },
  {
    id: 'nptel-java',
    title: 'Programming in Java',
    issuer: 'NPTEL',
    description: 'Comprehensive Java programming course covering advanced concepts and practical applications.',
    date: 'April 2024',
    status: 'completed',
    category: 'programming',
    credentialId: 'NPTEL24CS43S969900297',
    credentialUrl: 'https://nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS43S969900297',
    certificateUrl: '/documents/Programming In Java.png',
    skills: ['Java', 'Object-Oriented Programming', 'File Management'],
    level: 'intermediate',
    featured: false
  },
  {
    id: 'udemy-python-bootcamp',
    title: 'The Complete Python Bootcamp From Zero to Hero',
    issuer: 'Udemy',
    description: 'Complete Python programming course from beginner to advanced level with practical projects.',
    date: 'April 2024',
    status: 'completed',
    category: 'programming',
    credentialId: 'UC-c0832253-88cd-4652-9b55-47da0a091b37',
    credentialUrl: 'https://www.udemy.com/certificate/UC-c0832253-88cd-4652-9b55-47da0a091b37',
    certificateUrl: '/documents/Python Zero to Hero.jpg',
    skills: ['Python Programming'],
    level: 'intermediate',
    featured: false
  },
  {
    id: 'udemy-cpp-beginner',
    title: 'Beginning C++ Programming - From Beginner to Beyond',
    issuer: 'Udemy',
    description: 'Comprehensive C++ programming course covering modern C++ concepts and best practices.',
    date: 'February 2024',
    status: 'completed',
    category: 'programming',
    credentialId: 'UC-d618438e-9ee2-450d-bee2-aeed4d8ddd4f',
    credentialUrl: 'https://www.udemy.com/certificate/UC-d618438e-9ee2-450d-bee2-aeed4d8ddd4f',
    certificateUrl: '/documents/Beginning C++ Programmiing.jpg',
    skills: ['C++', 'Problem Solving', 'STL'],
    level: 'intermediate',
    featured: false
  },
  {
    id: 'hackerrank-sql',
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    description: 'Basic SQL certification covering database queries, joins, and data manipulation.',
    date: 'October 2023',
    status: 'completed',
    category: 'data',
    credentialId: '92ad590e0286',
    credentialUrl: 'https://www.hackerrank.com/certificates/92ad590e0286',
    certificateUrl: '/documents/sql_basic certificate.pdf',
    skills: ['SQL', 'Database Management', 'Data Querying'],
    level: 'beginner',
    featured: false
  },
  {
    id: 'typing-certification',
    title: 'Typing Proficiency Certificate',
    issuer: 'Typing.com',
    description: 'Typing proficiency certification with 56 WPM and 100% accuracy rating.',
    date: 'October 2023',
    status: 'completed',
    category: 'programming',
    certificateUrl: '/documents/Typing_Beginners.pdf',
    skills: ['Typing', 'Productivity'],
    level: 'beginner',
    featured: false
  },
  {
    id: 'codechef-c-problem-solving-1',
    title: 'C for Problem Solving - 1',
    issuer: 'CodeChef',
    description: 'Basic problem solving using C programming language fundamentals.',
    date: 'July 2023',
    status: 'completed',
    category: 'competitive',
    credentialId: 'cd7aef0',
    credentialUrl: 'https://www.codechef.com/certificates/public/cd7aef0',
    certificateUrl: '/documents/Problem solving 1 Chef.png',
    skills: ['C Programming', 'Problem Solving'],
    level: 'beginner',
    featured: false
  },
  {
    id: 'codechef-c-problem-solving-2',
    title: 'C for Problem Solving - 2',
    issuer: 'CodeChef',
    description: 'Intermediate problem solving using C programming with advanced algorithms.',
    date: 'July 2023',
    status: 'completed',
    category: 'competitive',
    credentialId: '25948d5',
    credentialUrl: 'https://www.codechef.com/certificates/public/25948d5',
    certificateUrl: '/documents/Problem solving 2 Chef.png',
    skills: ['C Programming', 'Problem Solving', 'Algorithms'],
    level: 'intermediate',
    featured: false
  },
  {
    id: 'udemy-c-beginner',
    title: 'C Programming For Beginners - Master the C Language',
    issuer: 'Udemy',
    description: 'Complete C programming course covering fundamentals and practical applications.',
    date: 'June 2023',
    status: 'completed',
    category: 'programming',
    credentialId: 'UC-0533cace-d78a-4359-b640-6a5f31fed2f6',
    credentialUrl: 'https://www.udemy.com/certificate/UC-0533cace-d78a-4359-b640-6a5f31fed2f6',
    certificateUrl: '/documents/C Udemy.png',
    skills: ['C Programming', 'Problem Solving', 'File Management'],
    level: 'beginner',
    featured: false
  },
  {
    id: 'codechef-c-programming',
    title: 'C Programming',
    issuer: 'CodeChef',
    description: 'Foundational C programming certification covering syntax and basic concepts.',
    date: 'May 2023',
    status: 'completed',
    category: 'programming',
    credentialId: '9a01714',
    credentialUrl: 'https://www.codechef.com/certificates/public/9a01714',
    certificateUrl: '/documents/C Chef.pdf',
    skills: ['C Programming', 'Programming Fundamentals'],
    level: 'beginner',
    featured: false
  }
];