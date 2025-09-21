'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, ArrowRight, Coffee, Users, Lightbulb } from 'lucide-react';
import Container from '../../Container';
import Button from '../../Button';
import { siteConfig } from '@/data/site';

const opportunityTypes = [
  {
    icon: Coffee,
    title: "Internships",
    description: "Ready to learn and contribute to real-world projects"
  },
  {
    icon: Users,
    title: "Full-time Roles",
    description: "Excited to join a team and make a long-term impact"
  },
  {
    icon: Lightbulb,
    title: "Freelance Projects",
    description: "Available for independent projects and collaborations"
  }
];

export default function HomeCallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50" />
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white
                          leading-tight md:leading-[1.15] lg:leading-[1.1] mb-8">
              Let&apos;s Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r
                              from-yellow-400 to-orange-400 leading-tight pb-1">
                Amazing Together
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              I&apos;m actively seeking opportunities to grow, learn, and contribute. 
              Whether you&apos;re looking for a dedicated developer or have an exciting project in mind, 
              I&apos;d love to connect and explore possibilities.
            </p>
          </motion.div>

          {/* Opportunity Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {opportunityTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {type.title}
                </h3>
                <p className="text-blue-100 text-sm">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-white mb-2">🚀</div>
                <div className="text-white font-semibold mb-1">Fast Learner</div>
                <div className="text-blue-100 text-sm">Quick to adapt to new technologies and methodologies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">💡</div>
                <div className="text-white font-semibold mb-1">Problem Solver</div>
                <div className="text-blue-100 text-sm">Creative approach to finding efficient solutions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">🤝</div>
                <div className="text-white font-semibold mb-1">Team Player</div>
                <div className="text-blue-100 text-sm">Collaborative mindset with excellent communication</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button 
              href="/contact" 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4"
            >
              <Mail className="mr-2 w-5 h-5" />
              Get In Touch
            </Button>
            <Button 
              href="/projects" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-blue-100"
          >
            <p className="mb-2">Ready to connect? I typically respond within 24-48 hours.</p>
            <p className="text-sm">
              <Link 
                href="/contact" 
                className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium hover:underline"
              >
                {siteConfig.author.email}
              </Link>
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}