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
                <motion.div 
                  className="flex items-center space-x-3 group hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg p-2 -m-2 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <strong>Currently:</strong> {siteConfig.author.role}
                  </span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-3 group hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg p-2 -m-2 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    <strong>Based in:</strong> {siteConfig.author.location}
                  </span>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-3 group hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg p-2 -m-2 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    <strong>Passion:</strong> Full-Stack Development, ML/AI, Mobile Apps, Network Security
                  </span>
                </motion.div>
              </div>

              <motion.div 
                className="pt-4"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  style={{
                    filter: 'drop-shadow(0 0 0 transparent)',
                    transition: 'filter 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                  }}
                >
                  <Button href="/about">
                    Learn More About Me
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            {/* Image/Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                
                {/* Content card */}
                <div 
                  className="relative bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 transform -rotate-1 group-hover:-rotate-3 transition-all duration-300"
                  style={{
                    filter: 'drop-shadow(0 0 0 transparent)',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 25px rgba(59, 130, 246, 0.4))';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                  }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      🚀
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Ready to Build
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
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