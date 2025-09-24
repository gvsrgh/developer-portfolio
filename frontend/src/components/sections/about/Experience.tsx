'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Users, Target, Lightbulb, LucideIcon } from 'lucide-react';
import Container from '../../Container';
import Button from '../../Button';

interface ExperienceHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

const experienceHighlights: ExperienceHighlight[] = [
  {
    icon: GraduationCap,
    title: 'Academic Foundation',
    description: 'Strong educational background in Computer Science with hands-on project experience across multiple domains including web development, machine learning, and mobile applications.'
  },
  {
    icon: Code,
    title: 'Technical Proficiency',
    description: 'Demonstrated expertise in full-stack development, data science, and system programming through 7+ comprehensive projects spanning 2+ years of active development.'
  },
  {
    icon: Users,
    title: 'Collaborative Mindset',
    description: 'Experience working in team environments, leading project development, and contributing to open-source initiatives with a focus on clean, maintainable code.'
  },
  {
    icon: Target,
    title: 'Problem-Solving Skills',
    description: 'Proven ability to analyze complex problems, design efficient solutions, and implement robust applications across various technology stacks and domains.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Learning',
    description: 'Passionate about emerging technologies, continuously expanding skill set, and staying current with industry trends and best practices.'
  }
];

export default function Experience() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Ready to bring my skills and passion to real-world challenges
          </p>
        </motion.div>

        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -4, transition: { duration: 0.1 } }}
          className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-8 text-white mb-12 hover:shadow-2xl transition-all duration-100"
          style={{
            filter: 'drop-shadow(0 0 0 transparent)',
            transition: 'all 0.1s ease-in-out, filter 0.1s ease-in-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'drop-shadow(0 0 25px rgba(147, 51, 234, 0.5))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
          }}
        >
          <div className="flex items-center mb-4">
            <Briefcase className="w-8 h-8 mr-3" />
            <h3 className="text-2xl font-bold">Ready for Professional Growth</h3>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            As a passionate Computer Science student graduating in 2026, I&apos;m excited to transition from academic projects to real-world professional challenges. 
            With extensive hands-on experience in full-stack development, machine learning, and software engineering, I&apos;m ready to contribute meaningfully to 
            innovative teams and continue growing as a developer.
          </p>
          <p className="text-lg leading-relaxed">
            I bring fresh perspectives, modern technical skills, and an eagerness to learn from experienced professionals while contributing to 
            impactful projects. My project portfolio demonstrates my ability to deliver complete solutions from concept to deployment.
          </p>
        </motion.div>

        {/* Experience Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {experienceHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.1 } }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-2xl transition-all duration-100 group"
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
                transition: 'all 0.1s ease-in-out, filter 0.1s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.4))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-all duration-100">
                  <highlight.icon className="w-6 h-6 text-purple-500 group-hover:text-purple-600 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {highlight.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Build Something Amazing Together
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I&apos;m actively seeking internship and entry-level opportunities where I can apply my skills, 
            learn from experienced teams, and contribute to meaningful projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/projects" size="lg">
              View My Projects
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}