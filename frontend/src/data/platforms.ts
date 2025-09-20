import { Platform } from '@/lib/types';

export const platforms: Platform[] = [
  {
    name: 'GitHub',
    username: 'yourusername', // TODO: Replace with your GitHub username
    url: 'https://github.com/yourusername', // TODO: Replace with your GitHub URL
    description: 'Open source contributions and personal projects',
    stats: {
      repositories: 50, // TODO: Update with your actual stats
      stars: 150,
      followers: 25,
    },
  },
  {
    name: 'LeetCode',
    username: 'yourusername', // TODO: Replace with your LeetCode username
    url: 'https://leetcode.com/yourusername', // TODO: Replace with your LeetCode URL
    description: 'Algorithmic problem solving and coding challenges',
    stats: {
      solved: 200, // TODO: Update with your actual stats
      ranking: '15%',
      contests: 15,
    },
  },
  {
    name: 'HackerRank',
    username: 'yourusername', // TODO: Replace with your HackerRank username
    url: 'https://www.hackerrank.com/yourusername', // TODO: Replace with your HackerRank URL
    description: 'Programming skills and certification challenges',
    stats: {
      badges: 12, // TODO: Update with your actual stats
      points: 1500,
      rank: 'Gold',
    },
  },
  {
    name: 'Codeforces',
    username: 'yourusername', // TODO: Replace with your Codeforces username
    url: 'https://codeforces.com/profile/yourusername', // TODO: Replace with your Codeforces URL
    description: 'Competitive programming contests and rating',
    stats: {
      rating: 1400, // TODO: Update with your actual stats
      maxRating: 1600,
      contests: 30,
    },
  },
  // TODO: Add other platforms like CodeChef, AtCoder, etc. if you use them
];