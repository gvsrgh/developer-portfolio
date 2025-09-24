'use client';

import { motion, type Variants, type Transition } from 'framer-motion';
import Container from '../../Container';
import Button from '../../Button';
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

export default function HomeAbout() {
  return (
    <section id="home-about" className="py-12 bg-white dark:bg-gray-800">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={enter}
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

              {/* Slide-right rows with colored bullets */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...enter, delay: 0.05 }}
                className="space-y-3"
              >
                <HoverInfoRow
                  bgHover="hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  dotClass="bg-blue-500"
                  textHoverClass="group-hover:text-blue-600 dark:group-hover:text-blue-400"
                >
                  <strong>Currently:</strong> {siteConfig.author.role}
                </HoverInfoRow>

                <HoverInfoRow
                  bgHover="hover:bg-green-50 dark:hover:bg-green-900/20"
                  dotClass="bg-green-500"
                  textHoverClass="group-hover:text-green-600 dark:group-hover:text-green-400"
                >
                  <strong>Based in:</strong> {siteConfig.author.location}
                </HoverInfoRow>

                <HoverInfoRow
                  bgHover="hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  dotClass="bg-purple-500"
                  textHoverClass="group-hover:text-purple-600 dark:group-hover:text-purple-400"
                >
                  <strong>Passion:</strong> Full-Stack Development, ML/AI, Mobile Apps, Network Security
                </HoverInfoRow>
              </motion.div>

              {/* CTA (uses the refined Button below) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...enter, delay: 0.1 }}
                whileHover={{ scale: 1.02, transition: snap }}
                className="pt-4"
              >
                <Button href="/about" size="md" variant="primary">
                  Learn More About Me
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Visual Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...enter, delay: 0.05 }}
              whileHover={{ y: -4, transition: snap }}
              className="relative group"
            >
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-100"></div>

                {/* Content card */}
                <div
                  className="relative bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 transform -rotate-1 group-hover:-rotate-3 transition-all duration-100"
                  style={{ filter: 'drop-shadow(0 0 0 transparent)' }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 26px rgba(59,130,246,0.45))';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                  }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10, transition: snap }}
                    >
                      🚀
                    </motion.div>
                    <motion.h3
                      className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-100"
                      whileHover={{ scale: 1.04, transition: snap }}
                    >
                      Ready to Build
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-100">
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