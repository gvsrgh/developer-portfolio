'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Container from '../Container';
import Button from '../Button';
import { siteConfig } from '@/data/site';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-800 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent dark:from-gray-900/50" />
      
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="mb-8 group"
          >
            <div 
              className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 p-1 transition-all duration-300"
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 25px rgba(59, 130, 246, 0.5))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
                {siteConfig.author.avatar ? (
                  <Image
                    src={siteConfig.author.avatar}
                    alt={siteConfig.author.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover object-bottom rounded-full group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      aspectRatio: '1/1', 
                      objectPosition: '0% 65%'
                    }}
                    priority
                  />
                ) : (
                  <div className="text-4xl font-bold text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {siteConfig.author.name.split(' ').map(word => word[0]).join('')}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-default"
            style={{
              filter: 'drop-shadow(0 0 0 transparent)',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLHeadingElement>) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.3))';
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
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 cursor-default"
            style={{
              filter: 'drop-shadow(0 0 0 transparent)',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLParagraphElement>) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(147, 51, 234, 0.3))';
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
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.01 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 cursor-default"
            style={{
              filter: 'drop-shadow(0 0 0 transparent)',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLParagraphElement>) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.3))';
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
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))';
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))';
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
            transition={{ duration: 0.5, delay: 0.6 }}
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 capitalize relative"
                  style={{
                    filter: 'drop-shadow(0 0 0 transparent)',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.4))';
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
            transition={{ duration: 0.5, delay: 0.8 }}
            className="animate-bounce cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById('home-about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </motion.div>
        </div>
      </Container>

      {/* Background CSS for grid pattern */}
      <style jsx>{`
        .bg-grid-gray-100 {
          background-image: url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23f3f4f6' fill-opacity='1' fill-rule='evenodd'%3e%3cpath d='m0 40v-40h40v40z'/%3e%3c/g%3e%3c/svg%3e");
        }
        .dark .bg-grid-gray-800 {
          background-image: url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%231f2937' fill-opacity='1' fill-rule='evenodd'%3e%3cpath d='m0 40v-40h40v40z'/%3e%3c/g%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
}