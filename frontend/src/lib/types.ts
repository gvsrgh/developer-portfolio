// Core types for the portfolio
export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  year: string;
  duration?: string;
  stack: string[];
  category?: string; // Optional manual category override - if not provided, auto-categorizes based on stack
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  cover?: string;
  highlights: string[];
  featured?: boolean;
  status?: 'completed' | 'in-progress' | 'planning';
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Platform {
  id: string;
  name: string;
  username: string;
  url: string;
  description: string;
  logo?: string;
  color?: string;
  stats?: {
    [key: string]: string | number | null;
  };
  achievements?: string[];
  languages?: string[];
  recentActivity?: string;
  joined?: string;
  featured?: boolean;
  category: 'competitive' | 'practice' | 'learning' | 'collaboration';
}

export interface TimelineItem {
  title: string;
  org: string;
  start: string;
  end?: string;
  description: string;
  type: 'education' | 'work' | 'award' | 'certification';
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: {
    name: string;
    email: string;
    bio: string;
    avatar: string;
    role: string;
    tagline: string;
    location: string;
  };
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email: string;
  };
}

export interface NavigationItem {
  href: string;
  label: string;
  external?: boolean;
}