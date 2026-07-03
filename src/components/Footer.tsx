'use client';

import { motion } from 'framer-motion';
import { Sparkles, Globe, Link2, Mail, ExternalLink, ArrowUp } from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'AI Consulting', href: '#services' },
    { name: 'Voice AI Agents', href: '#services' },
    { name: 'Chatbot Systems', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'Blockchain Solutions', href: '#services' },
  ],
  social: [
    { name: 'LinkedIn', icon: Link2, href: 'https://linkedin.com/in/lauracimpoesu' },
    { name: 'Website', icon: Globe, href: 'https://lauracimpoesu.com' },
    { name: 'Portfolio', icon: ExternalLink, href: '#projects' },
    { name: 'Email', icon: Mail, href: 'mailto:lauracsbusiness@gmail.com' },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-8 px-6 border-t border-violet-500/10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 text-2xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <Sparkles className="w-8 h-8 text-violet-400" />
              <span className="gradient-text">Laura Cimpoesu</span>
            </motion.a>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Software Engineer & AI Consultant with 7+ years of experience building
              exceptional digital experiences. Let&apos;s transform your business together.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-500/50 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-violet-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-violet-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-violet-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Laura Cimpoesu. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-500/50 transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Made with */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-xs">
            Built with Next.js, Three.js, Framer Motion & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
