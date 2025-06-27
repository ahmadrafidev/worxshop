import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Home() {
  const sideProjects = [
    {
      title: "Lumen",
      description: "Fast, accessible color checks for designers and developers",
      link: "https://luumen.vercel.app/",
      gradient: "from-cyan-50 to-blue-50"
    },
    {
      title: "Atlas",
      description: "Quick and actionable fixes for web accessibility",
      link: "https://atlassy.vercel.app/",
      gradient: "from-blue-50 to-sky-50"
    },
    {
      title: "Rim",
      description: "Fast and intuitive radius calculations for designers and developers",
      link: "https://rimm.vercel.app/",
      gradient: "from-sky-50 to-cyan-50"
    },
    {
      title: "Omni",
      description: "Responsive layout testing tool for developers and designers",
      link: "https://omnni.vercel.app/",
      gradient: "from-blue-50 to-cyan-50"
    },
    {
      title: "Boop",
      description: "Visual playground for UI components",
      link: "https://booopy.vercel.app/",
      gradient: "from-cyan-50 to-sky-50"
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50/50 to-blue-100/70 overflow-hidden">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(6 182 212)" stopOpacity="0.08" />
              <stop offset="50%" stopColor="rgb(14 165 233)" stopOpacity="0.05" />
              <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(14 165 233)" stopOpacity="0.06" />
              <stop offset="50%" stopColor="rgb(6 182 212)" stopOpacity="0.04" />
              <stop offset="100%" stopColor="rgb(34 197 94)" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(56 189 248)" stopOpacity="0.07" />
              <stop offset="50%" stopColor="rgb(6 182 212)" stopOpacity="0.04" />
              <stop offset="100%" stopColor="rgb(14 165 233)" stopOpacity="0.07" />
            </linearGradient>
          </defs>
          
          {/* First Wave - Cyan/Blue */}
          <path
            d="M0,200 C300,100 600,300 900,200 C1050,150 1150,250 1200,200 L1200,0 L0,0 Z"
            fill="url(#wave1)"
            className="animate-pulse"
            style={{ animationDuration: '8s' }}
          />
          
          {/* Second Wave - Blue/Sky */}
          <path
            d="M0,400 C200,300 400,500 600,400 C800,300 1000,500 1200,400 L1200,0 L0,0 Z"
            fill="url(#wave2)"
            className="animate-pulse"
            style={{ animationDuration: '12s', animationDelay: '2s' }}
          />
          
          {/* Third Wave - Sky/Cyan */}
          <path
            d="M0,600 C400,500 800,700 1200,600 L1200,0 L0,0 Z"
            fill="url(#wave3)"
            className="animate-pulse"
            style={{ animationDuration: '15s', animationDelay: '4s' }}
          />
          
          {/* Additional Flowing Wave */}
          <path
            d="M0,350 C350,250 650,450 950,350 C1100,300 1150,400 1200,350 L1200,0 L0,0 Z"
            fill="url(#wave1)"
            className="animate-pulse"
            style={{ animationDuration: '10s', animationDelay: '1s' }}
          />
        </svg>
        
        {/* Floating Gradient Orbs - Blue Sky Theme */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-200/25 to-sky-200/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-sky-200/15 to-blue-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-300/20 to-sky-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-to-r from-blue-300/15 to-cyan-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s', animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-cyan-100/50 text-sm text-gray-600 mb-6">
            <Sparkles size={14} className="text-cyan-500" />
            Design Tools Collection
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
            The Worxshop
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto font-light leading-relaxed">
            Essential tools to enhance your design and development workflow
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {sideProjects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-cyan-100/60 bg-white/80 backdrop-blur-sm p-8 transition-all duration-200 hover:border-cyan-200/70 hover:bg-white/85 hover:shadow-lg hover:shadow-cyan-100/50"
            >
              <div className={`absolute inset-0 opacity-40 bg-gradient-to-br ${project.gradient}`} />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    {project.title}
                  </h3>
                  <ArrowUpRight 
                    className="text-gray-400 transition-all duration-200 group-hover:text-cyan-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                    size={18} 
                  />
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                <div className="inline-flex items-center text-sm text-gray-500 group-hover:text-cyan-700 transition-colors duration-200">
                  View Project
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}