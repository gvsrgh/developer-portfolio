'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Mail } from 'lucide-react';
import Container from '../../Container';
import Button from '../../Button';
import { siteConfig } from '@/data/site';

export default function CVDownload() {
  const handleDownloadCV = () => {
    // Using your actual resume file
    const cvUrl = '/documents/Govvala_Venkata_Sai_Ram_Resume.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Govvala_Venkata_Sai_Ram_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.1 } }}
          className="text-center"
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-100"
            style={{
              filter: 'drop-shadow(0 0 0 transparent)',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
            }}
          >
            <motion.div 
              className="flex justify-center mb-6"
              whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            >
              <div 
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center transition-all duration-100"
                style={{
                  filter: 'drop-shadow(0 0 0 transparent)',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))';
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                }}
              >
                <FileText className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-100"
              whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
            >
              Download My CV
            </motion.h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a detailed overview of my education, experience, skills, and projects. 
              Perfect for recruiters and potential collaborators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                onClick={handleDownloadCV}
                size="lg"
                className="inline-flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV (PDF)
              </Button>
              
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Quick contact info */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Quick Contact Information
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <motion.div 
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg p-2 -m-2 transition-all duration-100"
                  whileHover={{ x: 4, transition: { duration: 0.1 } }}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <a 
                    href="/contact"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {siteConfig.author.email}
                  </a>
                </motion.div>
                
                <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                
                <motion.div 
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg p-2 -m-2 transition-all duration-100"
                  whileHover={{ x: 4, transition: { duration: 0.1 } }}
                >
                  <span>📍 {siteConfig.author.location}</span>
                </motion.div>
              </div>
            </div>

            {/* CV Preview Info */}
            <motion.div 
              className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-100"
              whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.2))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                What&apos;s included in my CV:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-300">
                <motion.div 
                  className="flex items-center hover:text-green-600 dark:hover:text-green-400 transition-colors duration-100"
                  whileHover={{ x: 2, transition: { duration: 0.1 } }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 hover:scale-150 transition-transform duration-100"></div>
                  Education Details
                </motion.div>
                <motion.div 
                  className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-100"
                  whileHover={{ x: 2, transition: { duration: 0.1 } }}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 hover:scale-150 transition-transform duration-100"></div>
                  Work Experience
                </motion.div>
                <motion.div 
                  className="flex items-center hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-100"
                  whileHover={{ x: 2, transition: { duration: 0.1 } }}
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 hover:scale-150 transition-transform duration-100"></div>
                  Technical Skills
                </motion.div>
                <motion.div 
                  className="flex items-center hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-100"
                  whileHover={{ x: 2, transition: { duration: 0.1 } }}
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 hover:scale-150 transition-transform duration-100"></div>
                  Project Portfolio
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Container>
    </section>
  );
}