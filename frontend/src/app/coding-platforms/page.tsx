import PlatformsShowcase from '@/components/sections/PlatformsShowcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coding Platforms | Portfolio',
  description: 'My journey across various programming platforms, showcasing problem-solving skills and competitive programming achievements.',
};

export default function PlatformsPage() {
  return <PlatformsShowcase />;
}