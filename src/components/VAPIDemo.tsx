'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mic, Phone, Sparkles, ArrowRight, Volume2, MessageCircle } from 'lucide-react';

const VAPI_DEMO_URL = 'https://vapi.ai?demo=true&shareKey=fb60470e-23e1-4acf-bdb6-56505297bfb1&assistantId=a30afdf6-499a-4ebd-aed0-7601577b6f60';

export default function VAPIDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="ai-demo" className="relative py-32 px-6 overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Live Demo
          </span>
          <h2 className="section-heading mb-6">
            <span className="text-white">Experience My</span>
            <br />
            <span className="gradient-text">AI Voice Agent</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Talk to an AI assistant I built using VAPI. Experience natural conversation flow,
            intelligent responses, and see what AI can do for your business.
          </p>
        </motion.div>

        {/* Demo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              {/* Left Side - Visual */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  {/* Animated Rings */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 w-48 h-48 rounded-full border-2 border-violet-500/30"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="absolute inset-0 w-48 h-48 rounded-full border-2 border-cyan-500/20"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0.05, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="absolute inset-0 w-48 h-48 rounded-full border-2 border-violet-500/10"
                  />

                  {/* Center Circle */}
                  <motion.div
                    className="relative w-48 h-48 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center pulse-glow"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Mic className="w-16 h-16 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-violet-400" />
                  <span className="text-violet-400 font-semibold">Powered by VAPI</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Try the AI Agent Now
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  Click below to start a conversation with my AI voice assistant.
                  It can answer questions, schedule appointments, and demonstrate
                  the power of conversational AI for your business.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-violet-400" />
                    <span className="text-sm text-gray-300">Natural Voice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-300">Real-time Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-gray-300">Smart Context</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-sm text-gray-300">24/7 Available</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href={VAPI_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  Talk to AI Agent
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <p className="text-xs text-gray-500 mt-4">
                  Free demo - No sign up required
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          Want a custom AI voice agent for your business?{' '}
          <a href="#contact" className="text-violet-400 hover:underline">
            Let&apos;s talk
          </a>
        </motion.p>
      </div>
    </section>
  );
}
