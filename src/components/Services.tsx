'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Settings, Users, Check, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Product Engineering',
    subtitle: 'React / Next.js Applications Built for Scale',
    description: 'Full-cycle frontend and product development for modern web applications. From architecture to production deployment.',
    features: [
      'Complex web applications & SaaS platforms',
      'Frontend architecture & design systems',
      'Performance optimization',
      'Production-ready, maintainable code',
    ],
    popular: false,
  },
  {
    icon: Brain,
    title: 'AI Product Development',
    subtitle: 'AI-Powered Products from Prototype to Production',
    description: 'Build AI capabilities into your product with LLM integrations, intelligent interfaces, and production-ready AI features.',
    features: [
      'LLM integrations & AI interfaces',
      'RAG applications & AI workflows',
      'Streaming AI experiences',
      'AI feature integration into existing products',
    ],
    popular: true,
  },
  {
    icon: Settings,
    title: 'Technical Consulting',
    subtitle: 'Senior Engineering Expertise When You Need It',
    description: 'Architecture reviews, technical audits, and strategic guidance for teams building complex web and AI products.',
    features: [
      'Frontend architecture consulting',
      'Technical audits & code reviews',
      'Performance optimization strategy',
      'AI integration planning',
    ],
    popular: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Services
          </span>
          <h2 className="section-heading mb-6">
            <span className="text-white">What I</span>
            <br />
            <span className="gradient-text">Build</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Senior engineering expertise for startups and technology companies building serious products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`glass-card p-8 rounded-2xl relative ${service.popular ? 'border-violet-500/50' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    SPECIALTY
                  </span>
                </div>
              )}

              <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-violet-400" />
              </div>

              <div className="text-xs text-gray-500 font-mono mb-2">SERVICE 0{index + 1}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-violet-400 text-sm font-medium mb-4">{service.subtitle}</p>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
                  service.popular
                    ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:opacity-90'
                    : 'border border-violet-500/50 text-violet-400 hover:bg-violet-500/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Fractional Engineering Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-transparent rounded-bl-full" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-violet-400" />
                <span className="text-xs text-gray-500 font-mono">ONGOING PARTNERSHIP</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Fractional Senior Engineering</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Need senior engineering expertise without hiring a full-time employee? I work with selected startups
                and technology companies on ongoing product development, frontend architecture, and AI-powered features.
              </p>
              <p className="text-sm text-gray-500 italic">
                Engagements are tailored to scope, complexity, and level of involvement.
              </p>
            </div>

            <div>
              <ul className="space-y-4 mb-8">
                {[
                  'Ongoing product development',
                  'Senior frontend ownership',
                  'Architecture & technical decisions',
                  'AI feature development',
                  'Direct collaboration with founders/CTOs',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Discuss Your Product
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
