'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Award, Calendar, ExternalLink, Download, Filter, Search, Star } from 'lucide-react';
import Container from '../../Container';
import { 
  certifications, 
  defaultCertificationCategories, 
  type Certification, 
  type CertificationCategory 
} from '../../../data/certifications';

interface CertificationsShowcaseProps {
  categories?: CertificationCategory[];
}

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

export default function CertificationsShowcase({ categories = defaultCertificationCategories }: CertificationsShowcaseProps) {
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

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedCertification) {
        setSelectedCertification(null);
      }
    };

    if (selectedCertification) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCertification]);

  return (
    <Container>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
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
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-100 cursor-pointer"
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.1 } }}
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.6))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="text-2xl font-bold text-purple-500">{stats.total}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Total</div>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-100 cursor-pointer"
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.1 } }}
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="text-2xl font-bold text-green-500">{stats.completed}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Completed</div>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-100 cursor-pointer"
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.1 } }}
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(234, 179, 8, 0.6))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="text-2xl font-bold text-yellow-500">{stats.inProgress}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">In Progress</div>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-100 cursor-pointer"
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.1 } }}
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="text-2xl font-bold text-blue-500">{stats.planned}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Planned</div>
            </motion.div>
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
                suppressHydrationWarning
              />
            </div>
            
            {/* Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                suppressHydrationWarning
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
            transition={{ duration: 0.1, delay: 0.05 }}
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
                  transition={{ duration: 0.1, delay: 0.05 + index * 0.02 }}
                  whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.1 } }}
                  className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg p-6 text-white cursor-pointer hover:shadow-xl transition-all duration-100"
                  onClick={() => setSelectedCertification(cert)}
                  style={{
                    filter: 'drop-shadow(0 0 0 transparent)',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.7))';
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
          transition={{ duration: 0.1, delay: 0.15 }}
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
                transition={{ duration: 0.1, delay: index * 0.02 }}
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.1 } }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-100 cursor-pointer"
                onClick={() => setSelectedCertification(cert)}
                style={{
                  filter: 'drop-shadow(0 0 0 transparent)',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 25px rgba(147, 51, 234, 0.6))';
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
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={(e) => {
              // Close modal when clicking backdrop
              if (e.target === e.currentTarget) {
                setSelectedCertification(null);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
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