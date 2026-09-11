'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Compass, Code, RefreshCw } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand',
    description: 'I learn the product, users, and technical constraints before writing code.',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Architect',
    description: 'I define the right technical approach and architecture before implementation.',
  },
  {
    number: '03',
    icon: Code,
    title: 'Build',
    description: 'I ship production-ready software with a focus on quality, performance, and maintainability.',
  },
  {
    number: '04',
    icon: RefreshCw,
    title: 'Iterate',
    description: 'I work closely with the team to continuously improve and evolve the product.',
  },
];

export default function HowIWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Process
          </span>
          <h2 className="section-heading mb-6">
            <span className="text-white">How I</span>
            <br />
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I take ownership of meaningful parts of a product and work autonomously to deliver results.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative group"
            >
              {/* Step Number */}
              <div className="text-6xl font-black text-violet-500/10 absolute top-4 right-4">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-7 h-7 text-violet-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
