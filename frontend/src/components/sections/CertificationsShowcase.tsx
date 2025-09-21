'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Award, Calendar, ExternalLink, Download, Filter, Search, CheckCircle, Star } from 'lucide-react';
import Container from '../Container';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  date: string;
  status: 'completed' | 'in-progress' | 'planned';
  category: string;
  credentialId?: string;
  credentialUrl?: string;
  certificateUrl?: string;
  skills: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
  featured: boolean;
}

const certifications: Certification[] = [
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    description: 'Foundational level certification that validates cloud fluency and foundational AWS knowledge.',
    date: 'Planned for Q2 2025',
    status: 'planned',
    category: 'cloud',
    skills: ['Cloud Computing', 'AWS Services', 'Cloud Architecture', 'Cloud Security'],
    level: 'beginner',
    featured: true
  },
  {
    id: 'google-data-analytics',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google Career Certificates',
    description: 'Comprehensive program covering data analysis, data visualization, and business intelligence using industry-standard tools.',
    date: 'Planned for Q3 2025',
    status: 'planned',
    category: 'data',
    skills: ['Data Analysis', 'Data Visualization', 'SQL', 'Tableau', 'R Programming'],
    level: 'intermediate',
    featured: true
  },
  {
    id: 'cisco-networking',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    description: 'Fundamental networking concepts including network protocols, network security, and network troubleshooting.',
    date: 'In Progress - Expected Dec 2025',
    status: 'in-progress',
    category: 'networking',
    skills: ['Network Fundamentals', 'TCP/IP', 'Network Security', 'Routing & Switching'],
    level: 'intermediate',
    featured: true
  },
  {
    id: 'microsoft-azure-fundamentals',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    description: 'Entry-level certification for Microsoft Azure cloud services and solutions.',
    date: 'Planned for Q4 2025',
    status: 'planned',
    category: 'cloud',
    skills: ['Azure Services', 'Cloud Concepts', 'Azure Pricing', 'Azure Security'],
    level: 'beginner',
    featured: false
  },
  {
    id: 'python-institute-pcap',
    title: 'PCAP – Certified Associate in Python Programming',
    issuer: 'Python Institute',
    description: 'Professional certification validating Python programming skills and knowledge.',
    date: 'Planned for Q1 2026',
    status: 'planned',
    category: 'programming',
    skills: ['Python Programming', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
    level: 'intermediate',
    featured: false
  },
  {
    id: 'oracle-java',
    title: 'Oracle Certified Associate Java SE 8 Programmer',
    issuer: 'Oracle',
    description: 'Validates foundational knowledge of Java programming and object-oriented programming concepts.',
    date: 'Planned for Q2 2026',
    status: 'planned',
    category: 'programming',
    skills: ['Java Programming', 'Object-Oriented Programming', 'Java APIs', 'Exception Handling'],
    level: 'intermediate',
    featured: false
  },
  {
    id: 'coursera-ml',
    title: 'Machine Learning Specialization',
    issuer: 'Coursera (Stanford University)',
    description: 'Comprehensive machine learning specialization covering supervised learning, unsupervised learning, and neural networks.',
    date: 'In Progress - Expected Q1 2026',
    status: 'in-progress',
    category: 'ml',
    skills: ['Machine Learning', 'Neural Networks', 'Deep Learning', 'TensorFlow', 'Python'],
    level: 'advanced',
    featured: true
  },
  {
    id: 'google-it-support',
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google Career Certificates',
    description: 'Hands-on skills in IT support including troubleshooting, customer service, networking, and system administration.',
    date: 'Planned for Q3 2026',
    status: 'planned',
    category: 'it',
    skills: ['IT Support', 'System Administration', 'Network Troubleshooting', 'Customer Service'],
    level: 'beginner',
    featured: false
  }
];

const categories = [
  { value: 'all', label: 'All Certifications' },
  { value: 'cloud', label: 'Cloud Computing' },
  { value: 'data', label: 'Data Analytics' },
  { value: 'networking', label: 'Networking' },
  { value: 'programming', label: 'Programming' },
  { value: 'ml', label: 'Machine Learning' },
  { value: 'it', label: 'IT Support' }
];

const statusColors = {
  completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  planned: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
};

const levelColors = {
  beginner: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  intermediate: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
};

export default function CertificationsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);

  const filteredCertifications = certifications.filter(cert => {
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredCertifications = certifications.filter(cert => cert.featured);
  const stats = {
    total: certifications.length,
    completed: certifications.filter(cert => cert.status === 'completed').length,
    inProgress: certifications.filter(cert => cert.status === 'in-progress').length,
    planned: certifications.filter(cert => cert.status === 'planned').length
  };

  return (
    <Container>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Certifications
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Continuous learning and professional development through industry-recognized certifications
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md transition-all duration-300"
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
              <div className="text-2xl font-bold text-purple-500">{stats.total}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Total</div>
            </div>
            <div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md transition-all duration-300"
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.5))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="text-2xl font-bold text-green-500">{stats.completed}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Completed</div>
            </div>
            <div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md transition-all duration-300"
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(234, 179, 8, 0.5))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="text-2xl font-bold text-yellow-500">{stats.inProgress}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">In Progress</div>
            </div>
            <div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md transition-all duration-300"
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="text-2xl font-bold text-blue-500">{stats.planned}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Planned</div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            {/* Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Featured Certifications */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Featured Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCertifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.1 } }}
                  className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg p-6 text-white cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedCertification(cert)}
                  style={{
                    filter: 'drop-shadow(0 0 0 transparent)',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 30px rgba(147, 51, 234, 0.7))';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                  }}
                >
                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 mr-2" />
                    <span className="font-semibold">Featured</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      cert.status === 'completed' ? 'bg-green-500 bg-opacity-20' :
                      cert.status === 'in-progress' ? 'bg-yellow-500 bg-opacity-20' :
                      'bg-blue-500 bg-opacity-20'
                    }`}>
                      {cert.status === 'completed' ? 'Completed' :
                       cert.status === 'in-progress' ? 'In Progress' : 'Planned'}
                    </span>
                    <span className="text-xs opacity-75 capitalize">{cert.level}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {selectedCategory === 'all' ? 'All Certifications' : `${categories.find(c => c.value === selectedCategory)?.label} Certifications`}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.1 } }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCertification(cert)}
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
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Award className="w-8 h-8 text-purple-500 mr-3" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  {cert.featured && (
                    <Star className="w-5 h-5 text-yellow-500" />
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[cert.status]}`}>
                    {cert.status === 'completed' ? 'Completed' :
                     cert.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[cert.level]}`}>
                    {cert.level.charAt(0).toUpperCase() + cert.level.slice(1)}
                  </span>
                </div>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {cert.date}
                </div>

                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* No results message */}
        {filteredCertifications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No certifications found matching your criteria.
            </p>
          </div>
        )}

        {/* Certification Detail Modal */}
        {selectedCertification && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Award className="w-8 h-8 text-purple-500 mr-3" />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedCertification.title}
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        {selectedCertification.issuer}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCertification(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {selectedCertification.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900 dark:text-white">Status:</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[selectedCertification.status]}`}>
                          {selectedCertification.status === 'completed' ? 'Completed' :
                           selectedCertification.status === 'in-progress' ? 'In Progress' : 'Planned'}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900 dark:text-white">Level:</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[selectedCertification.level]}`}>
                          {selectedCertification.level.charAt(0).toUpperCase() + selectedCertification.level.slice(1)}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900 dark:text-white">Date:</span>
                        <span className="text-gray-600 dark:text-gray-300">{selectedCertification.date}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                      {selectedCertification.credentialUrl && (
                        <a
                          href={selectedCertification.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Credential
                        </a>
                      )}
                      {selectedCertification.certificateUrl && (
                        <a
                          href={selectedCertification.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Certificate
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Skills Covered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertification.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Credential Info */}
                    {selectedCertification.credentialId && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Credential Information
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <span className="font-medium">Credential ID:</span> {selectedCertification.credentialId}
                        </p>
                      </div>
                    )}

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Career Benefits
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Industry-recognized validation of skills
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Enhanced professional credibility
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Improved career advancement opportunities
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Access to exclusive professional networks
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </Container>
  );
}