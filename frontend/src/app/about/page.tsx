import { Metadata } from 'next';
import AboutHero from '@/components/sections/about/AboutHero';
import Education from '@/components/sections/about/Education';
import Experience from '@/components/sections/about/Experience';
import CVDownload from '@/components/sections/about/CVDownload';

export const metadata: Metadata = {
  title: 'About - Govvala Venkata Sai Ram',
  description: 'Learn more about my journey, education, and experience in computer science and software development.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <AboutHero />
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Education />
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <Experience />
      </section>

      {/* CV Download Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <CVDownload />
      </section>
    </div>
  );
}