'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Nello P.',
    role: 'CEO',
    company: 'Traslochi Easy Nello',
    content: 'Laura transformed our online presence completely. Her technical expertise combined with a deep understanding of our business needs resulted in a website that truly represents our brand. The user experience is seamless and our customers love it.',
    rating: 5,
  },
  {
    name: 'Philip',
    role: 'Founder',
    company: 'Puppy Lyfe Co',
    content: 'Working with Laura was a game-changer for our eCommerce platform. She built a beautiful, responsive site that our customers love. Sales increased significantly after launch. Her attention to detail and commitment to quality is outstanding.',
    rating: 5,
  },
  {
    name: 'Manuel',
    role: 'Director',
    company: 'Vite Trasformate',
    content: 'Laura understood our mission from day one. She created a platform that perfectly communicates our message and engages our community. Her ability to blend technical skills with genuine care for our cause made the whole process exceptional.',
    rating: 5,
  },
  {
    name: 'Jane',
    role: 'HR Manager',
    company: 'AiPEX Staff',
    content: 'The recruiting platform Laura built for us streamlined our entire hiring process. Her expertise in both frontend and backend development delivered a solution that saves us hours of work every week. Highly recommend her services.',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="section-heading mb-6">
            <span className="text-white">What Clients</span>
            <br />
            <span className="gradient-text">Say About Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real feedback from real clients who&apos;ve experienced the impact of working together.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-12"
        >
          <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-violet-500/10" />

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[activeIndex].rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic"
              >
                &ldquo;{testimonials[activeIndex].content}&rdquo;
              </motion.p>

              {/* Author */}
              <motion.div
                key={`author-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-xl font-bold">
                  {testimonials[activeIndex].name[0]}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-violet-500/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-violet-500 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-violet-500/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`glass-card p-6 rounded-xl cursor-pointer transition-all ${
                index === activeIndex ? 'border-violet-500/50' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-violet-500/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
