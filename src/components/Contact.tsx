'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Calendar, MapPin, Link2, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Get In Touch
          </span>
          <h2 className="section-heading mb-6">
            <span className="text-white">Let&apos;s Build</span>
            <br />
            <span className="gradient-text">Something Amazing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to transform your business with AI? Let&apos;s discuss your project and explore how I can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* CTA Card */}
            <div className="glass-card p-8 rounded-2xl mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-transparent rounded-bl-full" />

              <Sparkles className="w-12 h-12 text-violet-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Free AI Assessment</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Not sure where to start? Book a free 30-minute consultation where we&apos;ll:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Evaluate your current processes',
                  'Identify AI opportunities',
                  'Provide actionable recommendations',
                  'No strings attached',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="https://calendly.com/thelauraioana/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 w-full justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <motion.a
                href="mailto:thelauraioana@gmail.com"
                className="glass-card p-5 rounded-xl flex items-center gap-4 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/30 transition-colors">
                  <Mail className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-medium">thelauraioana@gmail.com</div>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/lauracimpoesu"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-xl flex items-center gap-4 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/30 transition-colors">
                  <Link2 className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">LinkedIn</div>
                  <div className="text-white font-medium">linkedin.com/in/lauracimpoesu</div>
                </div>
              </motion.a>

              <div className="glass-card p-5 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-white font-medium">Italy | Remote Worldwide</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">I&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-violet-500/20 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-violet-500/20 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-violet-500/20 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-violet-500/20 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
