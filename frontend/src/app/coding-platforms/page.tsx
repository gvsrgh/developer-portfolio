import PlatformsShowcase from '@/components/sections/PlatformsShowcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coding Platforms | Portfolio',
  description: 'My journey across various programming platforms, showcasing problem-solving skills and competitive programming achievements.',
};

export default function PlatformsPage() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <PlatformsShowcase />
    </div>
  );
}