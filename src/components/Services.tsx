'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mic2, MessageSquare, Cpu, Rocket, Shield, Zap, Check, ArrowRight, Star } from 'lucide-react';

const services = [
  {
    icon: Mic2,
    title: 'Voice AI Solutions',
    subtitle: 'Appointment Setting & Customer Support',
    description: 'Deploy intelligent voice AI agents that handle calls 24/7, schedule appointments, and provide instant customer support.',
    features: [
      'AI-powered phone answering & scheduling',
      'Natural conversation flow with context awareness',
      'Seamless calendar integration',
      'Real-time call analytics & insights',
    ],
    price: 'Custom',
    popular: true,
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbot Systems',
    subtitle: 'Text & Multi-Platform Support',
    description: 'Intelligent chatbots across SMS, WhatsApp, and web that handle customer inquiries and book appointments automatically.',
    features: [
      'Multi-platform support (SMS, WhatsApp, Web)',
      'Automated appointment booking via text',
      'Sentiment analysis & smart escalation',
      'Integration with your existing systems',
    ],
    price: 'Custom',
    popular: false,
  },
  {
    icon: Cpu,
    title: 'AI Implementation',
    subtitle: 'Custom Development & Integration',
    description: 'End-to-end AI solution development including RAG systems, process automation, and team training.',
    features: [
      'Custom AI chatbot development',
      'RAG system implementation',
      'Process automation with AI',
      'Team training included',
    ],
    price: '$5K-$30K',
    popular: false,
  },
];

const benefits = [
  { icon: Rocket, title: 'Rapid Implementation', description: 'Deploy in days, not months' },
  { icon: Zap, title: 'ROI-Focused', description: 'Measurable returns from day one' },
  { icon: Shield, title: 'Custom Solutions', description: 'Tailored to your specific needs' },
  { icon: Star, title: 'Scalable Architecture', description: 'Grows with your business' },
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
            <span className="text-white">Transform Your Business</span>
            <br />
            <span className="gradient-text">With AI Automation</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Reduce costs by up to 70%, automate workflows, and unlock unprecedented growth with cutting-edge AI solutions.
          </p>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto"
        >
          {[
            { value: '70%', label: 'Cost Reduction' },
            { value: '10x', label: 'Faster Processing' },
            { value: '24/7', label: 'Automation' },
          ].map((stat, index) => (
            <div key={stat.label} className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`glass-card p-8 rounded-2xl relative ${service.popular ? 'border-violet-500/50' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-violet-400" />
              </div>

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

              <div className="pt-6 border-t border-violet-500/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-sm">Starting at</span>
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                </div>
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
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-white mb-12">Why Choose Me?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
