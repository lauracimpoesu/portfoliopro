'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Blocks, Globe, Award, Users } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'LangChain, OpenAI, Claude API, RAG Systems, Fine-tuning, LlamaIndex',
    color: 'violet',
  },
  {
    icon: Code2,
    title: 'FullStack Development',
    description: 'React, Next.js, Vue, Nuxt, TypeScript, Node.js, Python, FastAPI',
    color: 'cyan',
  },
  {
    icon: Blocks,
    title: 'Blockchain & Web3',
    description: 'Solidity, Web3.js, Smart Contracts, Ethereum, NFTs, DeFi',
    color: 'emerald',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: '8 languages spoken, serving clients worldwide with cultural fluency',
    color: 'amber',
  },
];

const achievements = [
  { icon: Award, value: 'PMP', label: 'Certified' },
  { icon: Users, value: '50+', label: 'Companies' },
  { icon: Globe, value: '8', label: 'Languages' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            About Me
          </span>
          <h2 className="section-heading mb-6">
            <span className="text-white">Not Your Typical</span>
            <br />
            <span className="gradient-text">AI Consultant</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I combine deep technical expertise with business strategy to deliver AI solutions that actually work.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-transparent rounded-bl-full" />

              <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  For the past <span className="text-violet-400 font-semibold">7+ years</span>,
                  I&apos;ve been immersed in fullstack development, blockchain & AI helping
                  companies grow and thrive.
                </p>
                <p>
                  I built many software applications and websites, from local businesses to
                  <span className="text-cyan-400 font-semibold"> international brands</span> like
                  Accenture and Mangrovia Blockchain Solutions.
                </p>
                <p>
                  My unique combination of <span className="text-emerald-400 font-semibold">FullStack + AI + Web3</span> expertise
                  means I deliver complete solutions, not just pieces of the puzzle.
                </p>
                <p className="text-violet-400 font-semibold italic">
                  Let&apos;s build something exceptional together.
                </p>
              </div>

              {/* Achievement Badges */}
              <div className="flex gap-6 mt-8 pt-6 border-t border-violet-500/20">
                {achievements.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <item.icon className="w-5 h-5 text-violet-400 mx-auto mb-1" />
                    <div className="text-xl font-bold text-white">{item.value}</div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Expertise Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 rounded-xl group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-${area.color}-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <area.icon className={`w-6 h-6 text-${area.color}-400`} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{area.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 overflow-hidden"
        >
          <div className="flex gap-8 animate-marquee">
            {['React', 'Next.js', 'Vue', 'TypeScript', 'Python', 'Node.js', 'OpenAI', 'LangChain', 'Web3', 'Solidity', 'Docker', 'AWS', 'Vercel', 'TailwindCSS'].map((tech) => (
              <span key={tech} className="text-gray-500 font-mono text-sm whitespace-nowrap px-4 py-2 glass rounded-full">
                {tech}
              </span>
            ))}
            {['React', 'Next.js', 'Vue', 'TypeScript', 'Python', 'Node.js', 'OpenAI', 'LangChain', 'Web3', 'Solidity', 'Docker', 'AWS', 'Vercel', 'TailwindCSS'].map((tech) => (
              <span key={`${tech}-2`} className="text-gray-500 font-mono text-sm whitespace-nowrap px-4 py-2 glass rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
