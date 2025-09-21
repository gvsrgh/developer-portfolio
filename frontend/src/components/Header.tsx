'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/data/site';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/coding-platforms', label: 'Platforms' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left End */}
          <div className="flex-shrink-0 ml-4">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xl font-bold text-gray-900 dark:text-white transition-all duration-300 px-3 py-2 rounded-lg"
                style={{
                  filter: 'drop-shadow(0 0 0 transparent)',
                  background: 'linear-gradient(135deg, transparent, transparent)',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, transparent, transparent)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {siteConfig.author.name.split(' ').map(word => word[0]).join('')}
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation - Right End */}
          <nav className="hidden md:flex space-x-8 mr-4">
            {navigation.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 font-medium px-3 py-2 rounded-lg relative overflow-hidden"
                  style={{
                    filter: 'drop-shadow(0 0 0 transparent)',
                    background: 'linear-gradient(135deg, transparent, transparent)',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(147, 51, 234, 0.5))';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, transparent, transparent)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button - Right End */}
          <div className="md:hidden mr-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none p-2 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.4))';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-800 mt-4 pt-4 mx-4"
          >
            <nav className="space-y-2">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 font-medium px-3 rounded-lg"
                    onClick={() => setIsOpen(false)}
                    style={{
                      filter: 'drop-shadow(0 0 0 transparent)',
                      background: 'linear-gradient(135deg, transparent, transparent)',
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.4))';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))';
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, transparent, transparent)';
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}