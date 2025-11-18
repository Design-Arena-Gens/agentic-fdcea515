'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-in-section', {
        scrollTrigger: {
          trigger: '.fade-in-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* 3D Hero Section */}
      <section className="relative h-screen w-full">
        <Hero3D />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          >
            Clever Ventures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-3xl mb-8 text-gray-300 max-w-3xl"
          >
            Strategic Innovation & Digital Transformation
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <a
              href="#services"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 inline-block"
            >
              Explore Our Work
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/50 text-sm"
          >
            ↓ Scroll to discover
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="fade-in-section relative min-h-screen py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              About Us
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Clever Ventures is a forward-thinking digital agency specializing in cutting-edge web development,
                  strategic consulting, and innovative digital solutions.
                </p>
                <p>
                  We partner with ambitious companies to create immersive digital experiences that drive growth,
                  engage audiences, and transform businesses through technology.
                </p>
                <p>
                  Our team combines creative vision with technical expertise to deliver solutions that not only
                  meet today's challenges but anticipate tomorrow's opportunities.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-purple-400 mb-4">10+</div>
                    <div className="text-xl text-gray-300">Years of Innovation</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="fade-in-section relative min-h-screen py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative group"
              >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="fade-in-section relative min-h-screen py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Projects
          </h2>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1 relative group">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                      {project.icon}
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-4xl font-bold text-white">{project.title}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 rounded-full bg-purple-600/30 border border-purple-500/50 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="fade-in-section relative min-h-screen py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className="text-sm font-semibold text-white">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="fade-in-section relative min-h-screen py-32 px-4 md:px-8 lg:px-16 flex items-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Let's Create Together
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Ready to transform your digital presence? Get in touch and let's build something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="mailto:contact@cleverventures.net"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300"
              >
                Get In Touch
              </a>
              <div className="flex gap-6">
                <a href="#" className="text-3xl hover:text-purple-400 transition-colors duration-300">
                  🐦
                </a>
                <a href="#" className="text-3xl hover:text-purple-400 transition-colors duration-300">
                  💼
                </a>
                <a href="#" className="text-3xl hover:text-purple-400 transition-colors duration-300">
                  📷
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Clever Ventures. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

const services = [
  {
    icon: '🚀',
    title: 'Web Development',
    description: 'Cutting-edge web applications built with modern frameworks and best practices for performance and scalability.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that engage users and deliver seamless experiences across all devices.',
  },
  {
    icon: '📱',
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile applications that bring your vision to life on iOS and Android.',
  },
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions and DevOps practices that ensure reliability and performance at any scale.',
  },
  {
    icon: '🔒',
    title: 'Security & Compliance',
    description: 'Enterprise-grade security measures and compliance frameworks to protect your data and users.',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'Transform data into actionable insights with custom analytics solutions and visualization tools.',
  },
];

const projects = [
  {
    icon: '🏢',
    title: 'Enterprise Platform',
    description: 'A comprehensive B2B SaaS platform serving thousands of users with real-time collaboration features and advanced analytics.',
    tags: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
  },
  {
    icon: '🛍️',
    title: 'E-Commerce Innovation',
    description: 'Next-generation shopping experience with AI-powered recommendations and seamless checkout integration.',
    tags: ['Next.js', 'Stripe', 'AI/ML', 'Redis'],
  },
  {
    icon: '🎓',
    title: 'Education Platform',
    description: 'Interactive learning platform with video streaming, real-time quizzes, and progress tracking for online education.',
    tags: ['Vue.js', 'WebRTC', 'MongoDB', 'Socket.io'],
  },
];

const technologies = [
  { icon: '⚛️', name: 'React' },
  { icon: '📘', name: 'TypeScript' },
  { icon: '🔺', name: 'Next.js' },
  { icon: '🎨', name: 'Tailwind' },
  { icon: '📦', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '🗄️', name: 'PostgreSQL' },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '☁️', name: 'AWS' },
  { icon: '🐳', name: 'Docker' },
  { icon: '🔧', name: 'GraphQL' },
  { icon: '⚡', name: 'Redis' },
];
