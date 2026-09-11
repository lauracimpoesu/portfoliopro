'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Eye, Code, Brain, Blocks } from 'lucide-react';

const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Delivered' },
  { value: 'Global', label: 'Clients' },
];

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'AI',
  'Web3',
];

const badges = [
  { icon: Code, label: 'Product Engineer' },
  { icon: Brain, label: 'AI Builder' },
  { icon: Blocks, label: 'Web3 Expert' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">Available for new projects</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6"
          >
            <span className="block text-white">Laura Cimpoesu</span>
            <span className="gradient-text block mt-2 text-3xl md:text-5xl lg:text-6xl">Senior Software Engineer</span>
            <span className="gradient-text block text-3xl md:text-5xl lg:text-6xl">&amp; AI Product Engineer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            I build production-ready web and AI products with React, Next.js and modern AI technologies.
          </motion.p>

          {/* Tech Stack Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {techStack.map((tech, index) => (
              <span key={tech} className="text-sm text-gray-500 font-mono">
                {tech}{index < techStack.length - 1 && <span className="mx-2 text-violet-500">/</span>}
              </span>
            ))}
          </motion.div>

          {/* Expertise Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg"
              >
                <badge.icon className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#contact"
              className="btn-primary flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Work Together
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#projects"
              className="btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-4 h-4" />
              View My Work
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, type: 'spring' }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-violet-500/50 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ height: [4, 12, 4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 bg-violet-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
