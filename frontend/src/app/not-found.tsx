'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Mail, MessageCircle } from 'lucide-react';
import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="text-8xl md:text-9xl font-bold text-gray-200 dark:text-gray-700 mb-4">
              404
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Oops! Page Not Found
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                The page you&apos;re looking for doesn&apos;t exist yet, but that doesn&apos;t mean it can&apos;t!
              </p>
            </motion.div>
          </motion.div>

          {/* Feature Request Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Missing Something?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If you were looking for a specific feature, section, or page that should exist, 
              I&apos;d love to hear about it! Your suggestions help me improve this portfolio continuously.
            </p>
            
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Found a bug or issue?</strong> Let me know and I&apos;ll fix it
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Want a new feature?</strong> Suggest it and I might add it
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>General feedback?</strong> I&apos;m always open to improvements
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me About This
            </Link>
          </motion.div>

          {/* Update Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-sm text-gray-500 dark:text-gray-400"
          >
            <p>
              💡 This portfolio is updated weekly with new features and content
            </p>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}