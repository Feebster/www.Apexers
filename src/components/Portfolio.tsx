import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Yollen Educational Platform',
      category: 'Educational Technology',
      description: 'Een complete tool voor collegiale consultatie die professionele ontwikkeling en samenwerkend leren tussen docenten faciliteert.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Oracle databases', 'Apex', 'Business Intelligence', 'Collaboration'],
      link: 'www.yollen.nl',
      featured: true,
      pageLink: '/services/educational-tech'
    },
    {
      title: 'Munova Industrial Platform',
      category: 'Industrial Solutions',
      description: 'Geavanceerd machinebeheerplatform, ontworpen om industriële operaties en onderhoudsplanning te optimaliseren.',
      image: 'https://images.pexels.com/photos/3785935/pexels-photo-3785935.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'IoT', 'Machine Learning', 'Industrial', 'Analytics'],
      link: 'munova.nl',
      featured: true,
      pageLink: '/services/industrial-solutions'
    },
    {
      title: 'PowerWiz AI Platform',
      category: 'AI & Automatisering',
      description: 'Geavanceerde AI agents en chatbot implementaties voor e-commerce content creatie en klantbetrokkenheid.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Machine Learning', 'E-commerce', 'Automatisering'],
      link: 'powerwiz.nl',
      featured: true,
      pageLink: '/services/ai-solutions'
    },
    {
      title: 'Zakelijke Klant Ontwikkeling',
      category: 'Maatwerk Ontwikkeling',
      description: 'Op maat gemaakte ontwikkeloplossingen voor grote zakelijke klanten inclusief moderne webapplicaties en systeemintegraties.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Zakelijk', 'Full-Stack', 'Integratie', 'Maatwerk'],
      link: 'Juva, AS Watson, Cannock, Heerema, Biblion',
      featured: true,
      pageLink: '/services/client-development'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ons Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We laten onze brede expertise zien over verschillende sectoren en technologieën, met tastbare impact en meetbare resultaten.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.filter(project => project.featured).map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-700">{project.category}</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{project.link}</span>
                  <Link 
                    to={project.pageLink}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group/btn"
                  >
                    Bekijk Project
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Other Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">+{project.tags.length - 3}</span>
                    )}
                  </div>
                  <Link to={project.pageLink}>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/#services"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Bekijk Alle Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;