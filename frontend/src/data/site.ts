import { SiteConfig } from '@/lib/types';

export const siteConfig: SiteConfig = {
  name: 'Portfolio',
  description: 'Full Stack Developer & UI/UX Designer passionate about creating amazing digital experiences.',
  url: 'https://yourportfolio.com', // TODO: Replace with your actual domain
  ogImage: '/og-image.jpg', // TODO: Add your Open Graph image
  author: {
    name: 'Your Name', // TODO: Replace with your name
    email: 'contact@yourname.com', // TODO: Replace with your email
    bio: 'Passionate full-stack developer with expertise in modern web technologies. I love creating user-friendly applications that solve real-world problems.', // TODO: Write your bio
    avatar: '/avatars/profile.jpg', // TODO: Add your profile image
    role: 'Full Stack Developer', // TODO: Update your role
    tagline: 'Building the future, one line of code at a time', // TODO: Create your tagline
    location: 'Your City, Country', // TODO: Add your location
  },
  social: {
    github: 'https://github.com/yourusername', // TODO: Add your GitHub URL
    linkedin: 'https://linkedin.com/in/yourusername', // TODO: Add your LinkedIn URL
    twitter: 'https://twitter.com/yourusername', // TODO: Add your Twitter URL (optional)
    email: 'contact@yourname.com', // TODO: Replace with your email
  },
};