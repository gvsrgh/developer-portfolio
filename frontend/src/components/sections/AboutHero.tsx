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
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-2 transform -rotate-1">
                {siteConfig.author.avatar ? (
                  <Image
                    src={siteConfig.author.avatar}
                    alt={siteConfig.author.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-xl"
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
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  <strong>Role:</strong> {siteConfig.author.role}
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  <strong>Location:</strong> {siteConfig.author.location}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  <strong>Focus Areas:</strong> Web Development, Machine Learning, Mobile Apps
                </span>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-lg font-medium text-gray-900 dark:text-white italic">
                &ldquo;{siteConfig.author.tagline}&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}