'use client';

import { motion } from 'framer-motion';
import Container from '../Container';
import Button from '../Button';
import { siteConfig } from '@/data/site';

export default function HomeAbout() {
  return (
    <section id="home-about" className="py-20 bg-white dark:bg-gray-800">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  About Me
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {siteConfig.author.bio}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Currently:</strong> {siteConfig.author.role}
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Based in:</strong> {siteConfig.author.location}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Passion:</strong> Full-Stack Development, ML/AI, Mobile Apps, Network Security
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Button href="/about">
                  Learn More About Me
                </Button>
              </div>
            </motion.div>

            {/* Image/Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl transform rotate-3"></div>
                
                {/* Content card */}
                <div className="relative bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 transform -rotate-1">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Ready to Build
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      From web applications to mobile apps, I&apos;m excited to work with any technology stack 
                      and contribute to innovative projects.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}