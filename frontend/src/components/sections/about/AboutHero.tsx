'use client';

import { motion, type Variants, type Transition } from 'framer-motion';
import Image from 'next/image';
import Container from '../../Container';
import { siteConfig } from '@/data/site';

/* Motion timings aligned to Experience Highlights */
const enter: Transition = { duration: 0.6, ease: 'easeOut' };
const snap: Transition  = { duration: 0.1, ease: 'easeOut' };

/* Slide-right-on-hover (no double shift; only the row moves on X) */
const rowVars: Variants = {
  rest:  { x: 0 },
  hover: { x: 10, transition: snap },
};

const dotVars: Variants = {
  rest:  { scale: 1 },
  hover: { scale: 1.35, transition: snap },
};

/* Reusable row with colored bullet */
function HoverInfoRow({
  bgHover,
  dotClass,
  textHoverClass,
  children,
}: {
  bgHover: string;
  dotClass: string;
  textHoverClass: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={rowVars}
      className={`group flex items-center space-x-3 rounded-lg p-2 -m-2 transition-all duration-100 ${bgHover}`}
    >
      <motion.div variants={dotVars} className={`w-2 h-2 rounded-full ${dotClass}`} />
      <span className={`text-gray-600 dark:text-gray-300 transition-colors ${textHoverClass}`}>
        {children}
      </span>
    </motion.div>
  );
}

export default function AboutHero() {
  return (
    <section className="pt-16 pb-12 border-b border-gray-300 dark:border-gray-700 min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my journey, passion for technology, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.1 } }}
            className="relative group"
          >
            <div 
              className="relative w-full aspect-square max-w-md mx-auto"
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
                transition: 'all 0.1s ease-in-out, filter 0.1s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 25px rgba(147, 51, 234, 0.4))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-200"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-2 transform -rotate-1 group-hover:-rotate-3 transition-transform duration-200">
                {siteConfig.author.avatar ? (
                  <Image
                    src={siteConfig.author.avatar}
                    alt={siteConfig.author.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-200"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="space-y-3"
            >
              <HoverInfoRow
                bgHover="hover:bg-blue-50 dark:hover:bg-blue-900/20"
                dotClass="bg-blue-500"
                textHoverClass="group-hover:text-blue-600 dark:group-hover:text-blue-400"
              >
                <strong>Role:</strong> {siteConfig.author.role}
              </HoverInfoRow>

              <HoverInfoRow
                bgHover="hover:bg-green-50 dark:hover:bg-green-900/20"
                dotClass="bg-green-500"
                textHoverClass="group-hover:text-green-600 dark:group-hover:text-green-400"
              >
                <strong>Location:</strong> {siteConfig.author.location}
              </HoverInfoRow>

              <HoverInfoRow
                bgHover="hover:bg-purple-50 dark:hover:bg-purple-900/20"
                dotClass="bg-purple-500"
                textHoverClass="group-hover:text-purple-600 dark:group-hover:text-purple-400"
              >
                <strong>Focus Areas:</strong> Web Development, Machine Learning, Mobile Apps
              </HoverInfoRow>
            </motion.div>

            <motion.div 
              className="pt-4"
              whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
            >
              <p className="text-lg font-medium text-gray-900 dark:text-white italic hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-100">
                &ldquo;{siteConfig.author.tagline}&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Container>
    </section>
  );
}