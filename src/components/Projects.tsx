'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const categories = ['Featured', 'All', 'Blockchain', 'AI', 'Enterprise', 'E-Commerce'];

// Featured projects with more detailed information
const featuredProjects = [
  {
    title: 'Datome',
    client: 'Mangrovia Blockchain Solutions',
    category: 'Blockchain',
    role: 'Software Engineer',
    description: 'Platform-as-a-Service (PaaS) for certified data flow management on blockchain. Built the frontend architecture with React and Next.js, developed the component library with Storybook, and integrated blockchain functionality.',
    image: '/projects/datome.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Redux', 'Storybook', 'Web3.js'],
    featured: true,
  },
  {
    title: 'Enel X',
    client: 'Accenture',
    category: 'Enterprise',
    role: 'Software Engineer',
    description: 'Enterprise software for global energy company Enel X. Built and maintained user experience applications handling complex data flows, API integrations, and real-time updates in a Fortune 500 environment.',
    image: '/projects/enelxx.png',
    technologies: ['React', 'Redux-Saga', 'Node.js', 'AWS', 'styled-components'],
    featured: true,
  },
  {
    title: 'EstherLeads',
    client: 'EstherLeads',
    category: 'AI',
    role: 'Full-Stack Developer',
    description: 'AI-powered lead generation platform for medspas and beauty professionals. Built intelligent automation workflows, AI-driven lead qualification, and marketing integration features.',
    image: '/projects/esther.png',
    technologies: ['React', 'Next.js', 'OpenAI API', 'Node.js', 'Automation'],
    featured: true,
  },
  {
    title: 'Mangrovia Blockchain Solutions',
    client: 'Mangrovia',
    category: 'Blockchain',
    role: 'Software Engineer',
    description: 'Web3 solutions provider website. Built the company\'s digital presence showcasing blockchain services and technology expertise.',
    image: '/projects/mbs.png',
    technologies: ['React', 'Next.js', 'Blockchain', 'TypeScript'],
    featured: true,
  },
  {
    title: 'Chainkeeper',
    client: 'Chainkeeper',
    category: 'Blockchain',
    role: 'Frontend Developer',
    description: 'Blockchain integration platform offering API-driven solutions for businesses. Built the frontend dashboard and API integration interfaces.',
    image: '/projects/chainkeeper.png',
    technologies: ['React', 'Web3.js', 'API Integration', 'TypeScript'],
    featured: true,
  },
];

const allProjects = [
  ...featuredProjects,
  {
    title: 'Vysiogen',
    client: 'Vysiogen',
    category: 'Blockchain',
    description: 'Web3 digital marketing and software services agency website.',
    image: '/projects/vy.png',
    technologies: ['React', 'Next.js', 'Web3'],
    featured: false,
  },
  {
    title: 'AiPEX Staff',
    client: 'AiPEX',
    category: 'Enterprise',
    description: 'Staffing and recruiting platform streamlining the hiring process for employers and candidates.',
    image: '/projects/aipex.png',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    featured: false,
  },
  {
    title: 'Puppy Lyfe Co',
    client: 'Puppy Lyfe Co',
    category: 'E-Commerce',
    description: 'E-commerce platform for pet products with seamless shopping experience.',
    image: '/projects/plc.png',
    technologies: ['Vue.js', 'Nuxt', 'Shopify', 'Tailwind'],
    featured: false,
  },
  {
    title: 'Prowork Traslochi',
    client: 'Prowork',
    category: 'Enterprise',
    description: 'Professional moving and construction services website with booking system.',
    image: '/projects/prowork.png',
    technologies: ['React', 'Next.js', 'Vercel', 'CMS'],
    featured: false,
  },
  {
    title: 'Vite Trasformate',
    client: 'Vite Trasformate',
    category: 'Enterprise',
    description: 'Non-profit missionary organization website with donation and community features.',
    image: '/projects/vitetrasformate-new.png',
    technologies: ['React', 'Next.js', 'Vercel', 'CMS'],
    featured: false,
  },
  {
    title: 'Scrub Gun Deluxe',
    client: 'Scrub Gun',
    category: 'E-Commerce',
    description: 'E-commerce platform for innovative home products.',
    image: '/projects/sgd.png',
    technologies: ['Shopify', 'Liquid', 'JavaScript'],
    featured: false,
  },
  {
    title: 'Crypto Oracles',
    client: 'Crypto Oracles',
    category: 'Blockchain',
    description: 'NFT collection and community hub for Web3 news and blockchain insights.',
    image: '/projects/crypto.png',
    technologies: ['React', 'Web3.js', 'Solidity', 'IPFS'],
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('Featured');

  const filteredProjects = activeCategory === 'Featured'
    ? featuredProjects
    : activeCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="section-heading mb-6">
            <span className="text-white">Selected</span>
            <br />
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Production applications built for international clients across blockchain, AI, and enterprise software.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
              layout
              className={`glass-card rounded-2xl overflow-hidden group ${project.featured ? 'border-violet-500/30' : ''}`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/20 text-violet-400 border border-violet-500/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-sm">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                {'client' in project && project.client !== project.title && (
                  <p className="text-violet-400 text-sm mb-2">{project.client}</p>
                )}
                {'role' in project && (
                  <p className="text-gray-500 text-xs mb-3">{project.role}</p>
                )}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-violet-500/20">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs text-gray-500 px-2 py-1 rounded bg-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
