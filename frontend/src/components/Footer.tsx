'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';
import Container from './Container';
import { siteConfig } from '@/data/site';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const socialIcons = {
  github: Github,
  linkedin: Linkedin
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {siteConfig.author.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md">
                {siteConfig.author.bio}
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                Quick Links
              </h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <motion.div key={link.href} whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                Connect
              </h4>
              <div className="flex space-x-4">
                {Object.entries(siteConfig.social).map(([platform, url]) => {
                  const Icon = socialIcons[platform as keyof typeof socialIcons];
                  if (!Icon) return null;
                  
                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      aria-label={`Visit ${platform}`}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} {siteConfig.author.name}. All rights reserved.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}