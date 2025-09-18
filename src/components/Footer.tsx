import React from 'react';
import { Code, Brain, GraduationCap, Cog, ExternalLink, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Client Development', icon: Code },
    { name: 'AI Solutions', icon: Brain },
    { name: 'Educational Tech', icon: GraduationCap },
    { name: 'Industrial Systems', icon: Cog }
  ];

  const quickLinks = [
    { name: 'Over', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const projects = [
    { name: 'Yollen', url: 'https://www.yollen.nl' },
    { name: 'Munova', url: 'https://munova.nl' },
    { name: 'PowerWiz', url: 'https://powerwiz.nl' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold text-blue-400">Apexers</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Een dynamisch team van drie expert developers gespecialiseerd in innovative technology solutions 
              voor client development, AI, education en industrial systemen.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {services.map(({ name, icon: Icon }) => (
                <div key={name} className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
                  <Icon className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">{name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:support@apexers.nl"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                support@apexers.nl
              </a>
              <a
                href="tel:+31123456789"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                +31 (0) 172 748 618
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Featured Projecten</h3>
            <ul className="space-y-3">
              {projects.map((project) => (
                <li key={project.name}>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center justify-between group">
                    <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                      {project.name}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  </a>
                  <div className="text-xs text-gray-500 mt-1">{project.url.replace('https://', '').replace('www.', '')}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Apexers. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                Privacy Beleid
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                Algemene Voorwaarden
              </a>
              <div className="text-gray-400 text-sm">
                Gemaakt met ❤️ in Nederland
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
