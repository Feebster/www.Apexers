import React from 'react';
import { ArrowRight, Code, Brain, GraduationCap, Cog } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-white/10 rounded-full"></div>
        <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-teal-300/20 rounded-full"></div>
        <div className="floating-element absolute bottom-40 left-20 w-3 h-3 bg-blue-200/20 rounded-full"></div>
        <div className="floating-element absolute bottom-20 right-10 w-5 h-5 bg-white/10 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Innovative Solutions voor
            <span className="bg-gradient-to-r from-teal-300 to-blue-200 bg-clip-text text-transparent"> Modern Business</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Wij leveren cutting-edge technologische oplossingen voor client development, AI-innovatie, educatieve tools en industriële systemen               met een toegewijd team van 3 expert-ontwikkelaars.
          </p>

          {/* Service Icons */}
          <div className="flex justify-center gap-8 mb-12 flex-wrap">
            {[
              { icon: Code, label: 'Client Projecten' },
              { icon: Brain, label: 'AI Solutions' },
              { icon: GraduationCap, label: 'EdTech Tools' },
              { icon: Cog, label: 'Industrial Systemen' }
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm text-blue-100">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToServices}
              className="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Ontdek Onze Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300"
            >
              Neem Contact Op
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;