import Link from 'next/link'
import { Footer } from '../components/Footer/Footer';

export default function Home() {
  
  const sideProjects = [
    {
      title: "Lumen",
      description: "Lumen is a fast, accessible color checks for designers and developers",
      link: "https://luumen.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-12 flex flex-col">
      <div className="max-w-3xl mx-auto">
        <main>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Design Tools Collection</h2>
            <p className="text-gray-600">A curated collection of essential tools to enhance your design and development workflow</p>
          </div>
          <div className="space-y-8">
            {sideProjects.map((project, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link
                    target="_blank"
                    passHref
                    href={project.link} 
                    rel="noopener noreferrer"
                    className="hover:underline">
                    {project.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-700 hover:text-blue-500 font-medium"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
