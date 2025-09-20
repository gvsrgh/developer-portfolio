'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Mail } from 'lucide-react';
import Container from '../Container';
import Button from '../Button';
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
    <Container>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Download My CV
            </h2>
            
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
                href={`mailto:${siteConfig.author.email}`}
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
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="w-4 h-4 mr-2" />
                  <a 
                    href={`mailto:${siteConfig.author.email}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {siteConfig.author.email}
                  </a>
                </div>
                
                <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <span>📍 {siteConfig.author.location}</span>
                </div>
              </div>
            </div>

            {/* CV Preview Info */}
            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                What&apos;s included in my CV:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Education Details
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Work Experience
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Technical Skills
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  Project Portfolio
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}