import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Brain, GraduationCap, Cog, ExternalLink } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Client Project Development',
      description: 'Custom development solutions for established enterprise clients with proven track records.',
      features: [
        'Full-stack web development',
        'Mobile application development',
        'API integration and development',
        'Legacy system modernization'
      ],
      clients: ['Juva', 'AS Watson', 'Hans Anders', 'Biblion'],
      color: 'blue'
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence implementations to automate and enhance business processes.',
      features: [
        'AI agent development',
        'Chatbot implementation',
        'E-commerce content creators',
        'Machine learning integration'
      ],
      reference: 'powerwiz.nl',
      color: 'teal'
    },
    {
      icon: GraduationCap,
      title: 'Educational Technology',
      description: 'Innovative tools and platforms designed to enhance educational experiences and outcomes.',
      features: [
        'Collaborative consultation tools',
        'Assessment and evaluation systems',
        'Learning management solutions',
        'Educational analytics'
      ],
      products: [
        { name: 'Yollen', url: 'www.yollen.nl', desc: 'Teacher collegial consultation tool' },
        { name: 'Partnership', url: 'https://www.cps.nl/yollen', desc: 'CPS Partnership' }
      ],
      color: 'green'
    },
    {
      icon: Cog,
      title: 'Industrial Solutions',
      description: 'Sophisticated management tools for industrial operations and machine optimization.',
      features: [
        'Machine management systems',
        'Industrial IoT solutions',
        'Process optimization tools',
        'Maintenance scheduling systems'
      ],
      products: [
        { name: 'Munova', url: 'munova.nl', desc: 'Machine management platform' }
      ],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'bg-blue-100 text-blue-600',
        accent: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      teal: {
        bg: 'bg-teal-50',
        icon: 'bg-teal-100 text-teal-600',
        accent: 'text-teal-600',
        button: 'bg-teal-600 hover:bg-teal-700'
      },
      green: {
        bg: 'bg-green-50',
        icon: 'bg-green-100 text-green-600',
        accent: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700'
      },
      orange: {
        bg: 'bg-orange-50',
        icon: 'bg-orange-100 text-orange-600',
        accent: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four core specializations that drive innovation and deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div key={index} className={`${colors.bg} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <div className="flex items-start gap-6 mb-6">
                  <div className={`${colors.icon} w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Capabilities</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${colors.accent.replace('text-', 'bg-')}`}></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.clients && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Client Portfolio</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.clients.map((client, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border">
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.products && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Featured Products</h4>
                    <div className="space-y-2">
                      {service.products.map((product, idx) => (
                        <a 
                          key={idx} 
                          href={product.url.startsWith('http') ? product.url : `https://${product.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div>
                            <span className="font-medium text-gray-900">{product.name}</span>
                            <p className="text-sm text-gray-600">{product.desc}</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {service.reference && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Reference</h4>
                    <a 
                      href={`https://${service.reference}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-lg flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="text-gray-700">{service.reference}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>
                  </div>
                )}

                <Link 
                  to={
                    index === 0 ? "/services/client-development" :
                    index === 1 ? "/services/ai-solutions" :
                    index === 2 ? "/services/educational-tech" :
                    "/services/industrial-solutions"
                  }
                  className={`block w-full ${colors.button} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-center`}
                >
                  Learn More
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;