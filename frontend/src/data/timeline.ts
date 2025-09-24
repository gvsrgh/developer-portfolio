import { TimelineItem } from '@/lib/types';

export const timeline: TimelineItem[] = [
  {
    title: 'Bachelor of Technology in Computer Science',
    org: 'Prasad V Potluri Siddhartha Institute of Technology',
    start: '2021',
    end: '2025',
    description: 'Studying computer science fundamentals, data structures, algorithms, and software engineering principles with hands-on experience in modern web technologies.',
    type: 'education',
  },
  {
    title: 'Full Stack Developer',
    org: 'Freelance Projects',
    start: 'Jun 2024',
    description: 'Developed multiple web applications using React, Next.js, and Node.js. Built responsive user interfaces and implemented backend APIs for various client projects.',
    type: 'work',
  },
  {
    title: 'Best Innovation Award',
    org: 'College Technical Fest',
    start: 'Mar 2024',
    description: 'Won first place for developing an innovative solution that addresses real-world problems using modern web technologies and machine learning.',
    type: 'award',
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    org: 'Google Career Certificates',
    start: 'Jan 2024',
    description: 'Completed comprehensive data analytics certification covering data collection, processing, analysis, and visualization using industry-standard tools.',
    type: 'certification',
  },
];

export const getTimelineByType = (type: TimelineItem['type']) => 
  timeline.filter(item => item.type === type);

export const getEducation = () => getTimelineByType('education');
export const getWorkExperience = () => getTimelineByType('work');
export const getAwards = () => getTimelineByType('award');
export const getCertifications = () => getTimelineByType('certification');