'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Clock, CheckCircle, LucideIcon } from 'lucide-react';
import Container from '../Container';
import { siteConfig } from '@/data/site';

interface ContactMethod {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  description: string;
}

interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
  username: string;
  color: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.author.email,
    href: '#',
    description: 'Best for detailed discussions and formal inquiries'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    href: '#',
    description: 'Open to remote work and on-site opportunities'
  }
];

const socialLinks: SocialLink[] = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/gvsrgh',
    username: 'gvsrgh',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/gvsr',
    username: 'gvsr',
    color: 'hover:text-blue-600'
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Container>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let&apos;s discuss opportunities, collaborations, or just have a conversation about technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I&apos;m always excited to connect with fellow developers, potential employers, and anyone interested in technology. 
                Whether you have a project in mind, want to discuss opportunities, or just want to chat about the latest in tech, 
                I&apos;d love to hear from you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg -m-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <method.icon className="w-6 h-6 text-purple-500" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {method.label}
                    </h3>
                    <a
                      href={method.href}
                      className="text-purple-500 hover:text-purple-600 transition-colors font-medium block mb-2"
                    >
                      {method.value}
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {method.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-300 ${social.color}`}
                    title={`${social.label} - ${social.username}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
            >
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="font-semibold text-green-800 dark:text-green-200">
                  Open to All Opportunities
                </span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300">
                Ready to collaborate on any exciting project! Whether it&apos;s internships, freelance work, full-time positions, 
                side projects, or just brainstorming sessions - I&apos;m always up for new challenges and learning experiences.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg transition-all duration-300"
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 30px rgba(147, 51, 234, 0.4))';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
              }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h2>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-green-800 dark:text-green-200 font-medium">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </span>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-300 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-300 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    suppressHydrationWarning
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-300 focus:border-transparent"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    suppressHydrationWarning
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-300 focus:border-transparent resize-vertical"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  suppressHydrationWarning
                  className="w-full flex items-center justify-center px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    filter: 'drop-shadow(0 0 0 transparent)',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.6))';
                    }
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Response Time */}
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    I typically respond within 24-48 hours
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                    You&apos;ll receive a confirmation email once your message is sent
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  What type of opportunities am I looking for?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I&apos;m open to everything! Whether it&apos;s internships, full-time roles, freelance projects, 
                  startup opportunities, research collaborations, or even just interesting side projects - 
                  I&apos;m always excited to explore new possibilities and challenges.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Am I available for freelance projects?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Absolutely! I love working on diverse projects of all sizes. From quick website fixes 
                  to complex full-stack applications, I&apos;m ready to dive in and deliver quality work.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Can I work remotely?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Definitely! I&apos;m comfortable with any work arrangement - remote, hybrid, on-site, 
                  or even project-based collaborations. I adapt quickly to different team dynamics and workflows.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  What&apos;s my approach to new technologies?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I&apos;m always eager to learn! While I have experience with JavaScript, Python, Java, and more, 
                  I&apos;m excited to pick up any technology that a project requires. I believe in growing with each challenge.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}