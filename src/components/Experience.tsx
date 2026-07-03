'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Frontend Engineer',
    company: 'Freelancer',
    type: 'Freelance',
    period: '2022 - Present',
    location: 'Remote',
    description: 'Design and development of websites, e-commerce platforms, web applications, mobile apps, and various software solutions for a diverse client base.',
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Firebase'],
    highlights: ['30+ projects delivered', 'International clients', 'AI integrations'],
  },
  {
    title: 'Frontend Engineer',
    company: 'Mangrovia Blockchain Solutions',
    type: 'Full-time',
    period: 'May 2023 - Aug 2024',
    location: 'Hybrid',
    description: 'Contributed to the development of Datome — a Platform-as-a-Service (PaaS) offering enhanced, fully integrated solutions for efficient and certified data flow management.',
    technologies: ['React', 'Next.js', 'Astro', 'Redux', 'TypeScript', 'Mantine UI', 'Storybook'],
    highlights: ['Built Datome platform', 'Blockchain integration', 'Agile/SCRUM processes'],
  },
  {
    title: 'Frontend Engineer',
    company: 'Accenture',
    type: 'Internship',
    period: '2021 - 2022',
    location: 'Remote',
    description: 'Maintained a user experience application by fetching, parsing, and formatting data, seamlessly integrating it into React components. Engineered software architecture and object-oriented code.',
    technologies: ['React', 'Redux-saga', 'JavaScript', 'Bootstrap', 'styled-components', 'SASS'],
    highlights: ['Fortune 500 experience', 'CRUD operations', 'Enterprise software'],
  },
];

const education = [
  {
    title: 'Front End Development',
    institution: 'EPICODE Institute of Technology',
    year: '2021',
    description: 'Intensive Coding Bootcamp: Angular, JavaScript, TypeScript, HTML, CSS, SASS, Bootstrap, Node.js',
  },
  {
    title: 'Full-Stack Engineering',
    institution: 'CodeAcademy',
    year: '2021',
    description: 'React, Redux, Next.js, JavaScript, HTTP Requests, HTML, CSS, Git, GitHub',
  },
  {
    title: 'Certified Project Manager (CPM)',
    institution: 'Google',
    year: '2025',
    description: 'Project Management and Agile Methodologies',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Experience
          </span>
          <h2 className="section-heading mb-6">
            <span className="text-white">Professional</span>
            <br />
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From Fortune 500 companies to blockchain startups, building exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="relative pl-16 pb-12 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-0 w-4 h-4 rounded-full bg-violet-500 border-4 border-[#030014] pulse-glow" />

                  <div className="glass-card p-6 rounded-xl">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase className="w-4 h-4 text-violet-400" />
                          <span className="text-violet-400 font-medium">{exp.company}</span>
                          <span className="text-gray-500">·</span>
                          <span className="text-gray-500 text-sm">{exp.type}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded bg-violet-500/10 text-gray-400 border border-violet-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-violet-400" />
                Education & Certifications
              </h3>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="glass-card p-5 rounded-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-white">{edu.title}</h4>
                        <p className="text-violet-400 text-sm">{edu.institution}</p>
                        <p className="text-gray-500 text-xs mt-2">{edu.description}</p>
                      </div>
                      <span className="text-gray-500 text-sm whitespace-nowrap">{edu.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
                <div className="glass-card p-5 rounded-xl">
                  <div className="flex flex-wrap gap-2">
                    {['English', 'Italian', 'French', 'Spanish', 'Romanian', 'Portuguese', 'German', 'Norwegian'].map((lang, index) => (
                      <span
                        key={lang}
                        className={`text-sm px-3 py-1 rounded-full ${
                          index < 2
                            ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30'
                            : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                        }`}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Native/Bilingual: English, Italian</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
