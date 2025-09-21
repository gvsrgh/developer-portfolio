'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Trophy, Star, Users, Code, TrendingUp, Award, Target, LucideIcon } from 'lucide-react';
import Container from '../../Container';

interface Platform {
  id: string;
  name: string;
  description: string;
  url: string;
  username: string;
  logo: string;
  color: string;
  stats: {
    label: string;
    value: string | number;
    icon: LucideIcon;
  }[];
  achievements: string[];
  languages: string[];
  recentActivity: string;
  joined: string;
  featured: boolean;
  category: 'competitive' | 'practice' | 'learning' | 'collaboration';
}

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

const platforms: Platform[] = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    description: 'Practice coding problems and prepare for technical interviews with algorithmic challenges.',
    url: 'https://leetcode.com/u/gvsrgh/',
    username: 'gvsrgh',
    logo: '🟠',
    color: 'from-orange-400 to-orange-600',
    stats: [
      { label: 'Problems Solved', value: 150, icon: Trophy },
      { label: 'Contest Rating', value: 1450, icon: Star },
      { label: 'Global Rank', value: '12.5K', icon: TrendingUp }
    ],
    achievements: [
      'Solved 150+ algorithmic problems',
      'Participated in weekly contests',
      'Achieved 1450+ contest rating',
      'Top 15% in problem solving'
    ],
    languages: ['Python', 'Java', 'C++', 'JavaScript'],
    recentActivity: 'Solved 5 problems this week',
    joined: 'January 2024',
    featured: true,
    category: 'competitive'
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    description: 'Develop programming skills through challenges and earn certificates in various domains.',
    url: 'https://www.hackerrank.com/profile/gvsrgh',
    username: 'gvsrgh',
    logo: '🟢',
    color: 'from-green-400 to-green-600',
    stats: [
      { label: 'Certificates', value: 8, icon: Award },
      { label: 'Star Rating', value: '5⭐', icon: Star },
      { label: 'Domain Score', value: '850+', icon: Target }
    ],
    achievements: [
      'Python (Basic) Certificate',
      'SQL (Intermediate) Certificate', 
      'Java (Basic) Certificate',
      'Problem Solving (Basic) Certificate',
      '5-star rating in Python',
      '4-star rating in Java',
      'Active in 30 Days of Code challenge'
    ],
    languages: ['Python', 'Java', 'SQL', 'C'],
    recentActivity: 'Earned SQL certificate',
    joined: 'March 2023',
    featured: true,
    category: 'practice'
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'Collaborate on projects, contribute to open source, and showcase development work.',
    url: 'https://github.com/gvsrgh',
    username: 'gvsrgh',
    logo: '🐙',
    color: 'from-gray-600 to-gray-800',
    stats: [
      { label: 'Repositories', value: 25, icon: Code },
      { label: 'Followers', value: 15, icon: Users },
      { label: 'Contributions', value: '500+', icon: TrendingUp }
    ],
    achievements: [
      '25+ public repositories',
      '500+ contributions in the last year',
      'Multiple full-stack projects',
      'Active open source contributor',
      'Consistent coding activity'
    ],
    languages: ['JavaScript', 'Python', 'Java', 'TypeScript', 'HTML/CSS'],
    recentActivity: 'Pushed to portfolio project',
    joined: 'August 2022',
    featured: true,
    category: 'collaboration'
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    description: 'Participate in competitive programming contests and improve algorithmic thinking.',
    url: 'https://www.codechef.com/users/gvsrgh',
    username: 'gvsrgh',
    logo: '🍳',
    color: 'from-amber-400 to-amber-600',
    stats: [
      { label: 'Current Rating', value: 1380, icon: Star },
      { label: 'Contests', value: 12, icon: Trophy },
      { label: 'Problems Solved', value: 85, icon: Target }
    ],
    achievements: [
      '2-star coder (1380+ rating)',
      'Participated in 12+ contests',
      'Solved 85+ competitive problems',
      'Regular contest participation'
    ],
    languages: ['C++', 'Python', 'Java'],
    recentActivity: 'Participated in long challenge',
    joined: 'June 2023',
    featured: false,
    category: 'competitive'
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    description: 'Enhance competitive programming skills through regular contests and practice.',
    url: 'https://codeforces.com/profile/gvsrgh',
    username: 'gvsrgh',
    logo: '🔴',
    color: 'from-red-400 to-red-600',
    stats: [
      { label: 'Rating', value: 1200, icon: Star },
      { label: 'Max Rating', value: 1285, icon: TrendingUp },
      { label: 'Contests', value: 8, icon: Trophy }
    ],
    achievements: [
      'Pupil rank achieved',
      'Participated in 8+ rated contests',
      'Max rating of 1285',
      'Solved 60+ problems'
    ],
    languages: ['C++', 'Python'],
    recentActivity: 'Solved Div 2 problems',
    joined: 'September 2023',
    featured: false,
    category: 'competitive'
  },
  {
    id: 'geeksforgeeks',
    name: 'GeeksforGeeks',
    description: 'Learn computer science concepts and practice coding problems for interviews.',
    url: 'https://auth.geeksforgeeks.org/user/gvsrgh',
    username: 'gvsrgh',
    logo: '💚',
    color: 'from-emerald-400 to-emerald-600',
    stats: [
      { label: 'Score', value: 450, icon: Target },
      { label: 'Problems Solved', value: 120, icon: Trophy },
      { label: 'Articles Read', value: '200+', icon: TrendingUp }
    ],
    achievements: [
      'Solved 120+ practice problems',
      'Active in DSA practice',
      'Regular contest participation',
      'Strong in algorithms and data structures'
    ],
    languages: ['Java', 'Python', 'C++'],
    recentActivity: 'Solved tree problems',
    joined: 'February 2023',
    featured: false,
    category: 'practice'
  },
  {
    id: 'coursera',
    name: 'Coursera',
    description: 'Complete professional courses and specializations from top universities and companies.',
    url: 'https://www.coursera.org/user/gvsrgh',
    username: 'gvsrgh',
    logo: '🎓',
    color: 'from-blue-400 to-blue-600',
    stats: [
      { label: 'Courses Completed', value: 6, icon: Award },
      { label: 'Certificates', value: 4, icon: Trophy },
      { label: 'Hours Learned', value: '150+', icon: TrendingUp }
    ],
    achievements: [
      'Machine Learning Specialization (In Progress)',
      'Google Data Analytics Certificate (Planned)',
      'Python for Everybody Specialization',
      'Web Development Fundamentals',
      '150+ hours of learning'
    ],
    languages: ['Python', 'R', 'SQL', 'JavaScript'],
    recentActivity: 'Started ML specialization',
    joined: 'May 2023',
    featured: true,
    category: 'learning'
  }
];

export default function PlatformsShowcase({ categories = defaultCategories }: PlatformsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const filteredPlatforms = platforms.filter(platform => 
    selectedCategory === 'all' || platform.category === selectedCategory
  );

  const featuredPlatforms = platforms.filter(platform => platform.featured);

  const totalStats = {
    platforms: platforms.length,
    problemsSolved: platforms.reduce((acc, platform) => {
      const problemsStat = platform.stats.find(stat => 
        stat.label.toLowerCase().includes('problems') || 
        stat.label.toLowerCase().includes('score')
      );
      return acc + (typeof problemsStat?.value === 'number' ? problemsStat.value : 0);
    }, 0),
    certificates: platforms.reduce((acc, platform) => {
      const certStat = platform.stats.find(stat => 
        stat.label.toLowerCase().includes('certificate')
      );
      return acc + (typeof certStat?.value === 'number' ? certStat.value : 0);
    }, 0),
    languages: [...new Set(platforms.flatMap(p => p.languages))].length
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
            Coding Platforms
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            My journey across various coding platforms and competitive programming sites
          </p>

          {/* Overall Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.3))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="text-2xl font-bold text-purple-500">{totalStats.platforms}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Active Platforms</div>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.3))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="text-2xl font-bold text-green-500">{totalStats.problemsSolved}+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Problems Solved</div>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.3))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="text-2xl font-bold text-blue-500">{totalStats.certificates}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Certificates</div>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(249, 115, 22, 0.3))';
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
            transition={{ duration: 0.6, delay: 0.2 }}
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
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.1 } }}
                  className={`bg-gradient-to-br ${platform.color} rounded-lg p-6 text-white cursor-pointer hover:shadow-xl transition-all duration-300`}
                  onClick={() => setSelectedPlatform(platform)}
                  style={{
                    filter: 'drop-shadow(0 0 0 transparent)',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 25px rgba(168, 85, 247, 0.5))';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                  }}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{platform.logo}</span>
                    <div>
                      <h3 className="text-lg font-bold">{platform.name}</h3>
                      <p className="text-sm opacity-90">@{platform.username}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {platform.stats.slice(0, 2).map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center justify-between">
                        <span className="text-sm opacity-90">{stat.label}</span>
                        <span className="font-bold">{stat.value}</span>
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
          transition={{ duration: 0.6, delay: 0.4 }}
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.1 } }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPlatform(platform)}
                style={{
                  filter: 'drop-shadow(0 0 0 transparent)',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))';
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{platform.logo}</span>
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
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {platform.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-purple-500">{stat.value}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Languages */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {platform.languages.slice(0, 3).map((lang, langIndex) => (
                    <span
                      key={langIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {lang}
                    </span>
                  ))}
                  {platform.languages.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      +{platform.languages.length - 3}
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

        {/* Platform Detail Modal */}
        {selectedPlatform && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">{selectedPlatform.logo}</span>
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
                        {selectedPlatform.stats.map((stat, index) => (
                          <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                            <div className="flex items-center mb-2">
                              <stat.icon className="w-4 h-4 text-purple-500 mr-2" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</span>
                            </div>
                            <div className="text-xl font-bold text-gray-900 dark:text-white">
                              {stat.value}
                            </div>
                          </div>
                        ))}
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

                    {/* Achievements */}
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