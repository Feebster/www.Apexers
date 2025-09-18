import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Over', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-blue-400 hover:text-blue-400 transition-colors duration-200">
              Apexers
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          {isHomePage ? (
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-blue-700 ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </nav>
          ) : (
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-blue-700 text-gray-700"
                >
                  Home
                </Link>
                <Link
                  to="/#about"
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-blue-700 text-gray-700"
                >
                  Over
                </Link>
                <Link
                  to="/#services"
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-blue-700 text-gray-700"
                >
                  Services
                </Link>
                <Link
                  to="/#contact"
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-blue-700 text-gray-700"
                >
                  Contact
                </Link>
              </div>
            </nav>
          )}
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg">
            {isHomePage ? (
              navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 w-full text-left transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))
            ) : (
              <>
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/#about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Over
                </Link>
                <Link
                  to="/#services"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/#contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
