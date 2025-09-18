import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '3', label: 'Expert Developers', icon: Users },
    { number: '50+', label: 'Projecten Delivered', icon: Target },
    { number: '8', label: 'In-house Solutions', icon: Lightbulb },
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
              Wij overbruggen de kloof tussen geavanceerde technologie en praktische businessoplossingen. Onze brede expertise 
              strekt zich uit van maatwerk client development tot AI-innovatie, onderwijstechnologie en industriële automatisering.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Met de juiste balans tussen klantprojecten en innovatief contractwerk leveren wij consistent uitstekende 
              resultaten die verwachtingen overtreffen en echte meerwaarde voor bedrijven creëren.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Waarom Kiezen voor Apexers?</h4>
            <ul className="space-y-4">
              {[
                'Expertteam met diverse technische skills',
                'Bewezen track record bij toonaangevende klanten',
                'Innovatiegedreven aanpak voor probleemoplossing',
                'Full-stack developmentcapaciteiten',
                'Agile en flexibel projectmanagement'
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
        <div className="text-center mt-12">
          <Link 
            to="/team"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Ontmoet Ons Team
          </Link>
        </div>
    </section>
  );
};

export default About;
