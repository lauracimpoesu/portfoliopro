'use client';

import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import VAPIDemo from '@/components/VAPIDemo';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#030014]" />,
});

export default function Home() {
  return (
    <main className="relative min-h-screen noise-bg">
      {/* Aurora Background */}
      <div className="aurora" />

      {/* Grid Background */}
      <div className="fixed inset-0 grid-bg opacity-50 pointer-events-none" />

      {/* 3D Scene */}
      <Scene3D />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <VAPIDemo />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
