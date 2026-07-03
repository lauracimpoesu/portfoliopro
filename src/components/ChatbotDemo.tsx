'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { MessageCircle, Send, Bot, User, Sparkles, ArrowRight } from 'lucide-react';

const chatMessages = [
  { role: 'bot', message: "Hi! I'm Laura's AI assistant. How can I help you today?", delay: 0 },
  { role: 'user', message: "I need help building an AI chatbot for my business", delay: 1.5 },
  { role: 'bot', message: "Great choice! I can help you with that. Laura specializes in custom AI chatbots that can handle customer support, appointments, and lead generation 24/7.", delay: 3 },
  { role: 'user', message: "How quickly can it be deployed?", delay: 5 },
  { role: 'bot', message: "Most chatbot solutions can be deployed in days, not months. Would you like to schedule a free consultation to discuss your specific needs?", delay: 6.5 },
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <motion.div
        className="w-2 h-2 bg-violet-400 rounded-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="w-2 h-2 bg-violet-400 rounded-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, delay: 0.15 }}
      />
      <motion.div
        className="w-2 h-2 bg-violet-400 rounded-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }}
      />
    </div>
  );
}

export default function ChatbotDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const showMessages = () => {
      chatMessages.forEach((msg, index) => {
        // Show typing indicator before bot messages
        if (msg.role === 'bot') {
          setTimeout(() => {
            setIsTyping(true);
            setCurrentTypingIndex(index);
          }, msg.delay * 1000 - 800);
        }

        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages(prev => [...prev, index]);
        }, msg.delay * 1000);
      });
    };

    const timer = setTimeout(showMessages, 500);
    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <section className="relative py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Chatbot Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="glass-card rounded-2xl overflow-hidden max-w-md mx-auto">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-violet-500 to-cyan-500 p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">AI Assistant</div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-white/80 text-xs">Online</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-[#0a0a1a]">
                <AnimatePresence>
                  {chatMessages.map((msg, index) => (
                    visibleMessages.includes(index) && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex items-start gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                            msg.role === 'bot'
                              ? 'bg-gradient-to-br from-violet-500 to-cyan-500'
                              : 'bg-gray-600'
                          }`}>
                            {msg.role === 'bot' ? (
                              <Bot className="w-4 h-4 text-white" />
                            ) : (
                              <User className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div className={`px-4 py-2.5 rounded-2xl text-sm ${
                            msg.role === 'bot'
                              ? 'bg-violet-500/20 text-gray-200 rounded-tl-sm'
                              : 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-tr-sm'
                          }`}>
                            {msg.message}
                          </div>
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-violet-500/20 rounded-2xl rounded-tl-sm">
                      <TypingIndicator />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-violet-500/20 bg-[#0a0a1a]">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-violet-500/20 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-violet-500"
                    disabled
                  />
                  <button className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center">
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">AI Chatbot Demo</span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              24/7 Customer Support
              <br />
              <span className="gradient-text">On Autopilot</span>
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Watch the AI chatbot in action. It handles customer inquiries,
              books appointments, and qualifies leads - all without human intervention.
              Your customers get instant responses, you get more conversions.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {[
                'Instant responses 24/7',
                'Handles multiple conversations simultaneously',
                'Integrates with your existing tools',
                'Learns and improves over time',
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Custom Chatbot
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
