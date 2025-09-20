import { TimelineItem } from '@/lib/types';

export const timeline: TimelineItem[] = [
  {
    title: 'Bachelor of Technology in Computer Science', // TODO: Update with your degree
    org: 'Your University', // TODO: Replace with your university name
    start: '2021',
    end: '2025', // TODO: Update with your graduation year
    description: 'Studying computer science fundamentals, data structures, algorithms, and software engineering principles.',
    type: 'education',
  },
  {
    title: 'Full Stack Developer Intern', // TODO: Update with your role
    org: 'Tech Company', // TODO: Replace with company name
    start: 'Jun 2024',
    end: 'Aug 2024', // TODO: Update dates or remove 'end' if ongoing
    description: 'Developed web applications using React and Node.js, collaborated with cross-functional teams, and gained experience in agile development methodologies.',
    type: 'work',
  },
  {
    title: 'Best Project Award', // TODO: Update with your achievement
    org: 'University Hackathon', // TODO: Replace with event name
    start: 'Mar 2024',
    description: 'Won first place for developing an innovative solution that addresses real-world problems using modern web technologies.',
    type: 'award',
  },
  {
    title: 'AWS Cloud Practitioner', // TODO: Update with your certification
    org: 'Amazon Web Services', // TODO: Replace with certifying organization
    start: 'Jan 2024',
    description: 'Validated foundational knowledge of AWS cloud concepts, services, and basic architectural principles.',
    type: 'certification',
  },
  // TODO: Add more timeline items based on your actual experience
  // Remove or modify these sample entries to match your background
];

export const getTimelineByType = (type: TimelineItem['type']) => 
  timeline.filter(item => item.type === type);

export const getEducation = () => getTimelineByType('education');
export const getWorkExperience = () => getTimelineByType('work');
export const getAwards = () => getTimelineByType('award');
export const getCertifications = () => getTimelineByType('certification');