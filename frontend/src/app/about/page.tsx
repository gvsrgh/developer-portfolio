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
    <div>
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        <AboutHero />
      </div>
      <div className="bg-white dark:bg-gray-800">
        <Education />
      </div>
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        <Experience />
      </div>
      <div className="bg-white dark:bg-gray-800 min-h-screen">
        <CVDownload />
      </div>
    </div>
  );
}