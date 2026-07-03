'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const categories = ['All', 'Blockchain', 'AI', 'E-Commerce', 'Enterprise', 'Apps'];

const projects = [
  {
    title: 'Mangrovia Blockchain Solutions',
    category: 'Blockchain',
    description: 'WEB3 solutions provider transforming data management for modern businesses.',
    image: '/projects/mbs.png',
    technologies: ['React', 'Next.js', 'Blockchain', 'TypeScript'],
  },
  {
    title: 'Datome',
    category: 'Blockchain',
    description: 'Platform as a Service (PaaS) for data modeling and governance, powered by blockchain technology.',
    image: '/projects/datome.png',
    technologies: ['React', 'TypeScript', 'Web3.js', 'Storybook'],
  },
  {
    title: 'Enel X Accenture',
    category: 'Enterprise',
    description: 'Collaborative software platform delivering global sustainable energy solutions.',
    image: '/projects/enelxx.png',
    technologies: ['React', 'Redux-saga', 'Node.js', 'AWS'],
  },
  {
    title: 'Vysiogen',
    category: 'Blockchain',
    description: 'WEB3 Digital marketing and software services agency driving business growth and innovation.',
    image: '/projects/vy.png',
    technologies: ['React', 'AI', 'Marketing', 'SEO'],
  },
  {
    title: 'Chainkeeper',
    category: 'Blockchain',
    description: 'Blockchain integration platform offering API-driven solutions for diverse business needs.',
    image: '/projects/chainkeeper.png',
    technologies: ['Web3.js', 'API', 'Blockchain', 'React'],
  },
  {
    title: 'AiPEX Staff',
    category: 'Enterprise',
    description: 'Staffing and recruiting agency streamlining the hiring process for employers and candidates.',
    image: '/projects/aipex.png',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Puppy Lyfe Co',
    category: 'E-Commerce',
    description: 'eCommerce platform dedicated to providing quality products for pets and their owners.',
    image: '/projects/plc.png',
    technologies: ['Vue.js', 'Nuxt', 'Shopify', 'Tailwind'],
  },
  {
    title: 'Traslochi Easy Nello',
    category: 'Enterprise',
    description: 'Home improvement services company specializing in hassle-free relocations.',
    image: '/projects/ten.png',
    technologies: ['React', 'Next.js', 'Vercel', 'CMS'],
  },
  {
    title: 'Vite Trasformate',
    category: 'Enterprise',
    description: 'Non-profit Christian organization spreading the gospel and aiding those in need.',
    image: '/projects/vite.png',
    technologies: ['React', 'Next.js', 'Vercel', 'CMS'],
  },
  {
    title: 'Scrub Gun Deluxe',
    category: 'E-Commerce',
    description: 'eCommerce platform offering a range of innovative home products.',
    image: '/projects/sgd.png',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  },
  {
    title: 'EstherLeads',
    category: 'AI',
    description: 'Lead generation agency specializing in digital marketing for medspas and beauty professionals.',
    image: '/projects/esther.png',
    technologies: ['React', 'AI', 'Marketing', 'Automation'],
  },
  {
    title: 'Crypto Oracles',
    category: 'Blockchain',
    description: 'NFT collection and community hub for WEB3 news, events, and blockchain insights.',
    image: '/projects/crypto.png',
    technologies: ['Web3.js', 'Solidity', 'React', 'IPFS'],
  },
  {
    title: 'NFT Collection',
    category: 'Blockchain',
    description: 'Blockchain platform enabling the creation, trading, and collection of digital art NFTs.',
    image: '/projects/fox.png',
    technologies: ['Solidity', 'Web3', 'React', 'IPFS'],
  },
  {
    title: 'To Do List App',
    category: 'Apps',
    description: 'Vibrant task management app designed to boost productivity and organization.',
    image: '/projects/todo.png',
    technologies: ['React', 'JavaScript', 'CSS', 'LocalStorage'],
  },
  {
    title: 'Movie App',
    category: 'Apps',
    description: 'Streamlined platform offering comprehensive information on top films for movie enthusiasts.',
    image: '/projects/mov.png',
    technologies: ['React', 'API', 'JavaScript', 'CSS'],
  },
  {
    title: 'eCommerce',
    category: 'E-Commerce',
    description: 'Intuitive online shopping platform with seamless browsing and user experience.',
    image: '/projects/ecomm.png',
    technologies: ['React', 'Redux', 'Node.js', 'Stripe'],
  },
  {
    title: 'Amazon Clone',
    category: 'E-Commerce',
    description: 'eCommerce clone mirroring Amazon\'s functionalities and user interface.',
    image: '/projects/am.png',
    technologies: ['React', 'Firebase', 'Stripe', 'Redux'],
  },
  {
    title: 'Pinterest Clone',
    category: 'Apps',
    description: 'Creative social media app for discovering, saving, and sharing ideas through pins.',
    image: '/projects/pin.png',
    technologies: ['React', 'Firebase', 'CSS', 'API'],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
            <span className="text-white">Featured</span>
            <br />
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From blockchain platforms to AI solutions, showcasing work that delivers real results.
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
              className="glass-card rounded-2xl overflow-hidden group"
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
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/20 text-violet-400 border border-violet-500/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
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
