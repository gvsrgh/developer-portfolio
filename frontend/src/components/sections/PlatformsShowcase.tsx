'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ExternalLink, Trophy, Star, TrendingUp, Award, Target } from 'lucide-react';
import Container from '../Container';
import { platforms as platformsData } from '@/data/platforms';
import { Platform } from '@/lib/types';
import Image from 'next/image';

interface Category {
  value: string;
  label: string;
}

interface PlatformsShowcaseProps {
  categories?: Category[];
}

const defaultCategories: Category[] = [
  { value: 'all', label: 'All Platforms' },
  { value: 'competitive', label: 'Competitive Programming' },
  { value: 'practice', label: 'Practice & Skills' },
  { value: 'learning', label: 'Learning & Courses' },
  { value: 'collaboration', label: 'Collaboration & Projects' }
];

export default function PlatformsShowcase({ categories = defaultCategories }: PlatformsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const filteredPlatforms = platformsData.filter(platform => 
    selectedCategory === 'all' || platform.category === selectedCategory
  );

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedPlatform) {
        setSelectedPlatform(null);
      }
    };

    if (selectedPlatform && typeof document !== 'undefined') {
      document.addEventListener('keydown', handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('keydown', handleEscKey);
        document.body.style.overflow = 'unset';
      }
    };
  }, [selectedPlatform]);

  const getStatIcon = (key: string) => {
    switch (key) {
      case 'solved':
      case 'problems':
      case 'problemsSolved':
      case 'repositories':
      case 'score':
        return Trophy;
      case 'rating':
      case 'stars':
      case 'followers':
        return Star;
      case 'ranking':
      case 'streak':
      case 'contributions':
        return TrendingUp;
      case 'contests':
      case 'certificates':
        return Award;
      case 'institutionRank':
      case 'activeDays':
        return Target;
      default:
        return Trophy;
    }
  };

  const getStatLabel = (key: string) => {
    const labels: { [key: string]: string } = {
      solved: 'Problems Solved',
      problems: 'Problems',
      problemsSolved: 'Problems Solved',
      rating: 'Rating',
      ranking: 'Global Ranking',
      contests: 'Contests',
      institutionRank: 'Institution Rank',
      certificates: 'Certificates',
      stars: 'Stars',
      streak: 'Streak Days',
      activeDays: 'Active Days',
      score: 'Score',
      repositories: 'Repositories',
      followers: 'Followers',
      contributions: 'Contributions'
    };
    return labels[key] || key.charAt(0).toUpperCase() + key.slice(1);
  };

  const featuredPlatforms = platformsData.filter(platform => platform.featured);

  const totalStats = {
    platforms: platformsData.length,
    problemsSolved: platformsData.reduce((acc, platform) => {
      // Only count actual problem solving stats, not ratings or scores
      const problemsStat = platform.stats && (platform.stats.solved || platform.stats.problems || platform.stats.problemsSolved);
      return acc + (typeof problemsStat === 'number' ? problemsStat : 0);
    }, 0),
    certificates: platformsData.reduce((acc, platform) => {
      const certStat = platform.stats && platform.stats.certificates;
      return acc + (typeof certStat === 'number' ? certStat : 0);
    }, 0),
    languages: [...new Set(platformsData.flatMap(p => p.languages || []))].length
  };

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
            Coding Platforms
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            My journey across various coding platforms and competitive programming sites
          </p>

          {/* Overall Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-100"
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
              <div className="text-2xl font-bold text-purple-500">{totalStats.platforms}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Active Platforms</div>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-100"
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
              <div className="text-2xl font-bold text-green-500">{totalStats.problemsSolved}+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Problems Solved</div>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-100"
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
              <div className="text-2xl font-bold text-blue-500">{totalStats.certificates}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Certificates</div>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-100"
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.1 } }}
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.6))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="text-2xl font-bold text-orange-500">{totalStats.languages}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Languages Used</div>
            </motion.div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Platforms */}
        {selectedCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.05 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Featured Platforms
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredPlatforms.map((platform, index) => (
                <motion.div
                  key={platform.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: 0.1 + index * 0.02 }}
                  whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.1 } }}
                  className="bg-gradient-to-br rounded-lg p-6 text-white cursor-pointer hover:shadow-xl transition-all duration-100"
                  onClick={() => setSelectedPlatform(platform)}
                  style={{
                    filter: 'drop-shadow(0 0 0 transparent)',
                    background: platform.color ? `linear-gradient(135deg, ${platform.color}dd, ${platform.color}aa)` : 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    // Use black glow for GitHub, platform color for others
                    if (platform.id === 'github') {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 30px rgba(0, 0, 0, 0.9))';
                    } else {
                      const hexColor = platform.color || '#3b82f6';
                      // Convert hex to RGB for the glow effect
                      const r = parseInt(hexColor.slice(1, 3), 16);
                      const g = parseInt(hexColor.slice(3, 5), 16);
                      const b = parseInt(hexColor.slice(5, 7), 16);
                      e.currentTarget.style.filter = `drop-shadow(0 0 30px rgba(${r}, ${g}, ${b}, 0.9))`;
                    }
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                  }}
                >
                  <div className="flex items-center mb-4">
                    {platform.logo && platform.logo.startsWith('http') ? (
                      <div className="w-8 h-8 rounded-lg overflow-hidden mr-3 bg-white/20 flex items-center justify-center">
                        <Image
                          src={platform.logo}
                          alt={platform.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-3xl mr-3">{platform.logo || '🌐'}</span>
                    )}
                    <div>
                      <h3 className="text-lg font-bold">{platform.name}</h3>
                      <p className="text-sm opacity-90">@{platform.username}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(platform.stats || {}).slice(0, 2).map(([key, value], statIndex) => (
                      <div key={statIndex} className="flex items-center justify-between">
                        <span className="text-sm opacity-90">{getStatLabel(key)}</span>
                        <span className="font-bold">{typeof value === 'number' ? value.toLocaleString() : value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Platforms Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 0.15 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {selectedCategory === 'all' ? 'All Platforms' : `${categories.find(c => c.value === selectedCategory)?.label}`}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlatforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: index * 0.02 }}
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.1 } }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-100 cursor-pointer"
                onClick={() => setSelectedPlatform(platform)}
                style={{
                  filter: 'drop-shadow(0 0 0 transparent)',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  // Use black glow for GitHub, platform color for others
                  if (platform.id === 'github') {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 30px rgba(0, 0, 0, 0.9))';
                  } else {
                    const hexColor = platform.color || '#22c55e';
                    // Convert hex to RGB for the glow effect
                    const r = parseInt(hexColor.slice(1, 3), 16);
                    const g = parseInt(hexColor.slice(3, 5), 16);
                    const b = parseInt(hexColor.slice(5, 7), 16);
                    e.currentTarget.style.filter = `drop-shadow(0 0 30px rgba(${r}, ${g}, ${b}, 0.9))`;
                  }
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {platform.logo && platform.logo.startsWith('http') ? (
                      <div className="w-10 h-10 rounded-lg overflow-hidden mr-3 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <Image
                          src={platform.logo}
                          alt={platform.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-3xl mr-3">{platform.logo || '🌐'}</span>
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {platform.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        @{platform.username}
                      </p>
                    </div>
                  </div>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-purple-500 hover:text-purple-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
                  {platform.description}
                </p>

                {/* Stats */}
                {platform.stats && Object.keys(platform.stats).length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(platform.stats).slice(0, 3).map(([key, value], statIndex) => {
                      if (value === null || value === undefined) return null;
                      return (
                        <div key={statIndex} className="text-center">
                          <div className="text-lg font-bold text-purple-500">
                            {typeof value === 'number' ? value.toLocaleString() : value}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">{getStatLabel(key)}</div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Languages */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {(platform.languages || []).slice(0, 3).map((lang, langIndex) => (
                    <span
                      key={langIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {lang}
                    </span>
                  ))}
                  {(platform.languages || []).length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      +{(platform.languages || []).length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{platform.recentActivity}</span>
                  <span>Since {platform.joined}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

        {/* Platform Detail Modal */}
        {selectedPlatform && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={(e) => {
              // Close modal when clicking backdrop
              if (e.target === e.currentTarget) {
                setSelectedPlatform(null);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    {selectedPlatform.logo && selectedPlatform.logo.startsWith('http') ? (
                      <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 bg-gray-100 flex items-center justify-center">
                        <Image
                          src={selectedPlatform.logo}
                          alt={selectedPlatform.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-4xl mr-4">{selectedPlatform.logo || '🌐'}</span>
                    )}
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {selectedPlatform.name}
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        @{selectedPlatform.username}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPlatform(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {selectedPlatform.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Statistics
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(selectedPlatform.stats || {}).map(([key, value], index) => {
                          if (value === null || value === undefined) return null;
                          const StatIcon = getStatIcon(key);
                          return (
                            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                              <div className="flex items-center mb-2">
                                <StatIcon className="w-4 h-4 text-purple-500 mr-2" />
                                <span className="text-sm text-gray-600 dark:text-gray-300">{getStatLabel(key)}</span>
                              </div>
                              <div className="text-xl font-bold text-gray-900 dark:text-white">
                                {typeof value === 'number' ? value.toLocaleString() : value}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Recent Activity
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{selectedPlatform.recentActivity}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Member since {selectedPlatform.joined}
                      </p>
                    </div>

                    <a
                      href={selectedPlatform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Profile
                    </a>
                  </div>

                  {/* Right Column */}
                  <div>
                    {/* Programming Languages */}
                    {selectedPlatform.languages && selectedPlatform.languages.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Programming Languages
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedPlatform.languages.map((lang, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {selectedPlatform.achievements && selectedPlatform.achievements.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {selectedPlatform.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <Trophy className="w-4 h-4 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
    </Container>
  );
}