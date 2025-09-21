'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Database, Smartphone, Shield, ArrowRight } from 'lucide-react';
import Container from '../Container';
import Button from '../Button';

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Creating robust server-side applications and APIs",
    skills: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "Express.js", "REST APIs"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Developing various mobile applications",
    skills: ["React Native", "Flutter", "Android", "Java", "Dart", "Mobile UI/UX"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Security & DevOps",
    description: "Implementing security best practices and deployment",
    skills: ["Network Security", "Docker", "AWS", "Git", "Linux", "CI/CD", "DevOps"],
    color: "from-orange-500 to-red-500"
  }
];

const stats = [
  { label: "Projects Completed", value: "5+", description: "Various web and mobile applications" },
  { label: "Technologies", value: "10+", description: "Programming languages and frameworks" },
  { label: "Certifications", value: "5+", description: "Professional certifications earned" },
  { label: "Experience", value: "2+", description: "Years of coding and development" }
];

export default function HomeSkillsOverview() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryTitle: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryTitle)) {
      newExpanded.delete(categoryTitle);
    } else {
      newExpanded.add(categoryTitle);
    }
    setExpandedCategories(newExpanded);
  };
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I specialize in full-stack development with expertise across multiple technologies 
              and platforms, always eager to learn and adapt to new challenges.
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.1 } }}
                className="group"
              >
                <div 
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 h-full hover:shadow-2xl transition-all duration-500 relative"
                  style={{
                    filter: 'drop-shadow(0 0 0 transparent)',
                    transition: 'all 0.5s ease-in-out, filter 0.5s ease-in-out',
                  }}
                  onMouseEnter={(e) => {
                    const colors = {
                      "from-blue-500 to-cyan-500": "rgba(59, 130, 246, 0.4)",
                      "from-green-500 to-emerald-500": "rgba(34, 197, 94, 0.4)",
                      "from-purple-500 to-pink-500": "rgba(147, 51, 234, 0.4)",
                      "from-orange-500 to-red-500": "rgba(249, 115, 22, 0.4)"
                    };
                    const colorKey = category.color as keyof typeof colors;
                    e.currentTarget.style.filter = `drop-shadow(0 0 20px ${colors[colorKey]})`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                  }}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {category.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {(expandedCategories.has(category.title) ? category.skills : category.skills.slice(0, 3)).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-white dark:bg-gray-600 text-xs font-medium rounded-md text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                    {category.skills.length > 3 && !expandedCategories.has(category.title) && (
                      <button
                        onClick={() => toggleCategory(category.title)}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-500 text-xs font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-400 transition-colors cursor-pointer hover:scale-105 transform duration-200"
                      >
                        +{category.skills.length - 3}
                      </button>
                    )}
                    {expandedCategories.has(category.title) && category.skills.length > 3 && (
                      <button
                        onClick={() => toggleCategory(category.title)}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-500 text-xs font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-400 transition-colors cursor-pointer hover:scale-105 transform duration-200"
                      >
                        Show less
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 mb-12 hover:shadow-xl transition-all duration-500"
            style={{
              filter: 'drop-shadow(0 0 0 transparent)',
              transition: 'all 0.5s ease-in-out, filter 0.5s ease-in-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.3))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center cursor-pointer"
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/certifications" size="lg">
              View Certifications
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button href="/coding-platforms" variant="outline" size="lg">
              Coding Profiles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}