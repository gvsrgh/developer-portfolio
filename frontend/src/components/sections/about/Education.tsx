'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import Container from '../../Container';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  gpa?: string;
  achievements?: string[];
}

const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'PVPSIT (Prasad V. Potluri Siddhartha Institute of Technology)',
    location: 'Vijayawada, India',
    duration: '2022 - 2026',
    description: 'Comprehensive program covering software engineering, algorithms, data structures, web development, and machine learning technologies.',
    gpa: '8.86/10',
    achievements: [
      'Active in web development and programming projects',
      'Built multiple full-stack applications',
      'Experience with modern frameworks and technologies'
    ]
  },
  {
    degree: 'Higher Secondary Education (12th Grade)',
    institution: 'Sri Chaitanya Junior College',
    location: 'India',
    duration: '2020 - 2022',
    description: 'Science stream with focus on Mathematics, Physics, and Chemistry.',
    gpa: '97.2%',
    achievements: [
      'Foundation in Mathematics',
      'Developed early interest in programming',
      'Explored basic web development concepts'
    ]
  },
  {
    degree: 'Secondary Education (10th Grade)',
    institution: 'Sri Chaitanya Techno School',
    location: 'India',
    duration: '2020',
    description: 'Completed secondary education with a focus on core subjects.',
    gpa: '96.16%',
    achievements: [
      'Excelled in Mathematics and Science',
      'Participated in school-level competitions',
      'Developed strong analytical and problem-solving skills'
    ]
  }
];

export default function Education() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My academic journey and continuous learning path
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              {/* Timeline line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-16 bg-blue-200 dark:bg-blue-800 group-hover:bg-blue-400 dark:group-hover:bg-blue-600 transition-colors duration-300"></div>
              )}
              
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div 
                  className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-2xl transition-all duration-500"
                  style={{
                    filter: 'drop-shadow(0 0 0 transparent)',
                    transition: 'all 0.5s ease-in-out, filter 0.5s ease-in-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h3>
                    {edu.gpa && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 group-hover:scale-105 transform transition-all duration-200">
                        {edu.gpa}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {edu.description}
                  </p>

                  {edu.achievements && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start group/item">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-blue-600 transition-colors"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}