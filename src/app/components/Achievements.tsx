'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

// Achievements data
const achievements = [
  {
    title: '1st Place, Infineon Hackathon',
    organization: 'Infineon Technologies',
    date: 'Feb 2025',
    description: 'Designed an efficient algorithm to protect the kingdom, optimizing defense pathfinding in C++ reducing computation time by 35%.',
    icon: <FaTrophy className="text-xl" />,
  },
  {
    title: '2nd Runner-Up, Rajasthan Police Hackathon',
    organization: 'Rajasthan Police',
    date: 'Jan 2024',
    description: 'Recognized for 1930 Helpline IVR automation project that improved response times and user experience for emergency services.',
    icon: <FaMedal className="text-xl" />,
  },
  {
    title: 'Dynamic Programming Excellence',
    organization: 'University of Colorado Boulder',
    date: 'May 2024',
    description: 'Completed advanced course in Dynamic Programming and Greedy Algorithms with distinction, demonstrating mastery in algorithm design and computational complexity analysis.',
    link: 'https://coursera.org/share/62d4dba1e463a0d21017941aabfe9717',
    icon: <FaMedal className="text-xl" />,
  },
  {
    title: 'Full Stack Development Project',
    organization: 'Personal Portfolio',
    date: '2024',
    description: 'Developed and deployed a full-stack e-commerce platform with user authentication, product management, and payment integration using React, Node.js, and MongoDB.',
    link: 'https://ecommerce-react-2024-frontendss.vercel.app/',
    icon: <FaStar className="text-xl" />,
  },
  {
    title: 'Video Conferencing Application',
    organization: 'Independent Project',
    date: '2023',
    description: 'Built a real-time video conferencing application with Next.js, TypeScript, and Tailwind CSS featuring multi-user support and screen sharing capabilities.',
    link: 'https://stream-flow-gules.vercel.app/',
    icon: <FaAward className="text-xl" />,
  },
  {
    title: 'Blockchain-based Whistleblowing Platform',
    organization: 'Open Source Project',
    date: '2023',
    description: 'Contributed to development of FearlessVoice, an anonymous whistleblowing platform built on Internet Computer (ICP) blockchain for secure and private reporting.',
    link: 'https://phlrf-ayaaa-aaaai-atgjq-cai.icp0.io/',
    icon: <FaTrophy className="text-xl" />,
  },
];

const Achievements = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedAchievements = showAll ? achievements : achievements.slice(0, 3);

  return (
    <section id="achievements" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-300 dark:bg-teal-800 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 dark:bg-indigo-800 rounded-full filter blur-3xl opacity-20" />
      </div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600 dark:from-teal-400 dark:via-indigo-400 dark:to-purple-400">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Key milestones and accomplishments in my professional journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg group hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-rose-500 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                    <span className="font-medium">{achievement.organization}</span>
                    <span>•</span>
                    <span>{achievement.date}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{achievement.description}</p>
                  {achievement.link && (
                    <Link
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                    >
                      View Project
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {achievements.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {showAll ? 'Show Less' : 'View More Achievements'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Achievements; 