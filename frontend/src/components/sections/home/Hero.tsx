'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Container from '../../Container';
import Button from '../../Button';
import { siteConfig } from '@/data/site';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23e5e7eb' fill-opacity='1' fill-rule='evenodd'%3e%3cpath d='m0 40v-40h40v40z'/%3e%3c/g%3e%3c/svg%3e")`,
        }}
      />
      <div 
        className="absolute inset-0 opacity-30 dark:block hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23374151' fill-opacity='1' fill-rule='evenodd'%3e%3cpath d='m0 40v-40h40v40z'/%3e%3c/g%3e%3c/svg%3e")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-200/60 to-transparent dark:from-gray-900/60" />
      
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            className="mb-8 group"
          >
            <div 
              className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-600 dark:to-gray-700 p-1 transition-all duration-100"
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 25px rgba(107, 114, 128, 0.5))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-100">
                {siteConfig.author.avatar ? (
                  <Image
                    src={siteConfig.author.avatar}
                    alt={siteConfig.author.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover object-bottom rounded-full group-hover:scale-110 transition-transform duration-100"
                    style={{ 
                      aspectRatio: '1/1', 
                      objectPosition: '0% 65%'
                    }}
                    priority
                  />
                ) : (
                  <div className="text-4xl font-bold text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-100">
                    {siteConfig.author.name.split(' ').map((word: string) => word[0]).join('')}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.02 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
            className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 mb-4 hover:text-gray-800 dark:hover:text-gray-100 transition-all duration-100 cursor-default"
            style={{
              filter: 'drop-shadow(0 0 0 transparent)',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLHeadingElement>) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(107, 114, 128, 0.3))';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLHeadingElement>) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
            }}
          >
            {siteConfig.author.name}
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.04 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
            className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-6 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-100 cursor-default"
            style={{
              filter: 'drop-shadow(0 0 0 transparent)',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLParagraphElement>) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(107, 114, 128, 0.3))';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLParagraphElement>) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
            }}
          >
            {siteConfig.author.role}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.06 }}
            whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
            className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-100 cursor-default"
            style={{
              filter: 'drop-shadow(0 0 0 transparent)',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLParagraphElement>) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(107, 114, 128, 0.3))';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLParagraphElement>) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
            }}
          >
            {siteConfig.author.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.08 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(107, 114, 128, 0.4))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <Button href="/projects" size="lg">
                View Projects
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(107, 114, 128, 0.4))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <Button href="/contact" variant="outline" size="lg">
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.1 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {Object.entries(siteConfig.social).map(([platform, url]) => {
              // Skip email since we have "Get In Touch" button
              if (platform === 'email') {
                return null;
              }
              
              // Handle other social links normally
              return (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-100 capitalize relative"
                  style={{
                    filter: 'drop-shadow(0 0 0 transparent)',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(107, 114, 128, 0.4))';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                  }}
                >
                  {platform}
                </motion.a>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.12 }}
            className="animate-bounce cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById('home-about');
              if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 100; // Scroll to 100px above the About Me section
                window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}