import React from 'react';
import Link from 'next/link';
import { Footer } from '../components/Footer/Footer';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Home() {
  const sideProjects = [
    {
      title: "Lumen",
      description: "Lumen is a fast, accessible color checks for designers and developers",
      link: "https://luumen.vercel.app/",
      gradient: "from-violet-400 to-purple-800"
    },
    {
      title: "Atlas",
      description: "Atlas is a quick and actionable fixes for web accessibility.",
      link: "https://atlassy.vercel.app/",
      gradient: "from-blue-400 to-cyan-800"
    },
    {
      title: "Rim",
      description: "Rim is a fast and intuitive radius calculations for designers and developers.",
      link: "https://rimm.vercel.app/",
      gradient: "from-blue-400 to-violet-800"
    },
    {
      title: "Omni",
      description: "Omni is a responsive layout testing tool that helps developers and designers create, test, and validate responsive layouts across different device sizes.",
      link: "https://omnni.vercel.app/",
      gradient: "from-zinc-400 to-violet-800"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <main>
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-800 mb-4">
              <Sparkles size={16} className="text-yellow-500" />
              Design Tools Collection
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              The Worxshop
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of essential tools to enhance your design and development workflow
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {sideProjects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div className={`absolute inset-0 opacity-5 bg-gradient-to-r ${project.gradient}`} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <ArrowUpRight 
                      className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                      size={20} 
                    />
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="mt-4 inline-flex items-center text-sm font-medium text-gray-900">
                    View Project
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>

        <footer className="mt-16">
          <Footer />
        </footer>
      </div>
    </div>
  );
}