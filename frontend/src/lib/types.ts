// Core types for the portfolio
export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  year: string;
  stack: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  cover: string;
  highlights: string[];
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Platform {
  name: string;
  username: string;
  url: string;
  stats?: {
    [key: string]: string | number;
  };
  description?: string;
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