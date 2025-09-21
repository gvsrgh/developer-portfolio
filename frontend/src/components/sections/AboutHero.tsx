'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '../Container';
import { siteConfig } from '@/data/site';

export default function AboutHero() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my journey, passion for technology, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="relative group"
          >
            <div 
              className="relative w-full aspect-square max-w-md mx-auto"
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
                transition: 'all 0.5s ease-in-out, filter 0.5s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 25px rgba(147, 51, 234, 0.4))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-2 transform -rotate-1 group-hover:-rotate-3 transition-transform duration-300">
                {siteConfig.author.avatar ? (
                  <Image
                    src={siteConfig.author.avatar}
                    alt={siteConfig.author.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-6xl font-bold text-gray-400">
                      {siteConfig.author.name.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I&apos;m {siteConfig.author.name.split(' ')[2]}! 👋
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {siteConfig.author.bio}
              </p>
            </div>

            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3 group hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg p-2 -m-2 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <strong>Role:</strong> {siteConfig.author.role}
                </span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3 group hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg p-2 -m-2 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  <strong>Location:</strong> {siteConfig.author.location}
                </span>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-3 group hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg p-2 -m-2 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  <strong>Focus Areas:</strong> 
                  <span className="ml-2 inline-flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-md text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors cursor-default">
                      Web Development
                    </span>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-md text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors cursor-default">
                      Machine Learning
                    </span>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-md text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors cursor-default">
                      Mobile Apps
                    </span>
                  </span>
                </span>
              </motion.div>
            </div>

            <motion.div 
              className="pt-4"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-lg font-medium text-gray-900 dark:text-white italic hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                &ldquo;{siteConfig.author.tagline}&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}