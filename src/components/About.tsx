import React from 'react';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '3', label: 'Expert Developers', icon: Users },
    { number: '50+', label: 'Projecten Delivered', icon: Target },
    { number: '4', label: 'Core Specialisaties', icon: Lightbulb },
    { number: '25+', label: 'Jaar Experience', icon: Award },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Over Apexers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Wij zijn een dynamisch team van drie ervaren developers, gespecialiseerd in het creëren van innovatieve 
            technologische oplossingen die groei en efficiëntie voor bedrijven stimuleren.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map(({ number, label, icon: Icon }) => (
            <div key={label} className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <Icon className="w-10 h-10 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
              <div className="text-gray-600 font-medium">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Onze Missie
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Wij bridgen de gap tussen cutting-edge technologie en praktische business solutions. 
              Onze diverse expertise strekt zich uit van custom client development tot AI innovation, 
              educational technology en industrial automation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Met een perfecte balans tussen client projecten en innovatief contract werk, 
              leveren wij consistent exceptional results die verwachtingen overtreffen en 
              meaningful business impact creëren.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Waarom Kiezen voor Apexers?</h4>
            <ul className="space-y-4">
              {[
                'Expert team met diverse technical skills',
                'Proven track record bij established clients',
                'Innovation-driven approach voor problem solving',
                'Full-stack development capabilities',
                'Agile en responsive project management'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
