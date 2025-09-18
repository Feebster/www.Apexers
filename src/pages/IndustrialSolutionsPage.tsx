import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cog, Settings, BarChart3, Shield, ExternalLink, TrendingUp, Clock, Wrench, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const IndustrialSolutionsPage = () => {
  const solutions = [
    {
      icon: Settings,
      title: 'Machine Beheersystemen',
      description: 'Uitgebreide platforms voor monitoring, controle en optimalisatie van industriële machines en apparatuur.',
      features: ['Real-time monitoring', 'Voorspellend onderhoud', 'Prestatie analyses', 'Afstandsbediening mogelijkheden'],
      benefits: ['Verminderde stilstand', 'Lagere onderhoudskosten', 'Verbeterde efficiëntie', 'Beter gebruik van middelen']
    },
    {
      icon: BarChart3,
      title: 'Industriële IoT Oplossingen',
      description: 'Verbonden systemen die data verzamelen van industriële apparatuur om inzichten en automatisering te bieden.',
      features: ['Sensor integratie', 'Data verzameling', 'Cloud connectiviteit', 'Real-time dashboards'],
      benefits: ['Data-gedreven beslissingen', 'Proces optimalisatie', 'Kostenreductie', 'Kwaliteitsverbetering']
    },
    {
      icon: Wrench,
      title: 'Proces Optimalisatie Tools',
      description: 'Geavanceerde analyse en automatisering tools ontworpen om industriële processen en workflows te stroomlijnen.',
      features: ['Workflow automatisering', 'Proces analyses', 'Kwaliteitscontrole', 'Resource planning'],
      benefits: ['Verhoogde productiviteit', 'Kwaliteitsborging', 'Afval reductie', 'Operationele excellentie']
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      number: '35%',
      label: 'Efficiëntie Toename',
      description: 'Gemiddelde verbetering in operationele efficiëntie'
    },
    {
      icon: Clock,
      number: '60%',
      label: 'Stilstand Reductie',
      description: 'Afname in ongeplande onderhoud stilstand'
    },
    {
      icon: Shield,
      number: '99.9%',
      label: 'Systeem Betrouwbaarheid',
      description: 'Uptime over alle uitgerold systemen'
    }
  ];

  const features = [
    {
      title: 'Voorspellend Onderhoud',
      description: 'AI-aangedreven algoritmes die apparatuur storingen voorspellen voordat ze optreden, waardoor kostbare stilstand wordt verminderd.'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Continue monitoring van industriële processen met directe waarschuwingen en meldingen.'
    },
    {
      title: 'Data Analyses',
      description: 'Geavanceerde analyses die machine data omzetten in bruikbare inzichten voor betere besluitvorming.'
    },
    {
      title: 'Afstandsbeheer',
      description: 'Veilige externe toegang en controle mogelijkheden voor het beheren van industriële systemen vanaf elke locatie.'
    },
    {
      title: 'Integratie Mogelijkheden',
      description: 'Naadloze integratie met bestaande industriële systemen en bedrijfssoftware.'
    },
    {
      title: 'Schaalbare Architectuur',
      description: 'Oplossingen die meegroeien met jouw bedrijf, van enkele machines tot complete productiefaciliteiten.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-900 via-orange-700 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/"
              className="flex items-center gap-2 text-orange-200 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Terug naar Home
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Cog className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Industriële Oplossingen
              </h1>
            </div>
            
            <p className="text-xl text-orange-100 leading-relaxed mb-8">
              Geavanceerde beheertools en systemen ontworpen voor industriële operaties, 
              machine optimalisatie en procesautomatisering die operationele excellentie en efficiëntie stimuleren.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://munova.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white hover:bg-white/20 transition-colors duration-200"
              >
                <span className="font-medium">Reference: munova.nl</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product - Munova */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Uitgelicht Product: Munova</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ons vlaggenschip machine beheerplatform dat industriële operaties transformeert
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Geavanceerd Machine Beheer Platform
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Munova biedt uitgebreide machine beheermogelijkheden, waardoor industriële 
                organisaties hun operaties kunnen optimaliseren, stilstand reduceren en algehele efficiëntie 
                verbeteren door intelligente monitoring en voorspellend onderhoud.
              </p>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Kern Mogelijkheden</h4>
                <ul className="space-y-3">
                  {[
                    'Real-time machine monitoring en controle',
                    'Voorspellend onderhoud planning',
                    'Prestatie analyses en rapportage',
                    'Integratie met bestaande industriële systemen'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl mb-8">
                <h4 className="font-semibold text-orange-800 mb-2">Industrie Impact</h4>
                <p className="text-orange-700">
                  Uitgerold over meerdere industriële faciliteiten, met significante 
                  verbeteringen in operationele efficiëntie en onderhoudskosten reductie.
                </p>
              </div>

              <a
                href="https://munova.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
              >
                Bezoek Munova.nl
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
                <div className="w-full h-64 bg-white rounded-xl flex items-center justify-center">
                  <Cog className="w-24 h-24 text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Klanten Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vertrouwd door toonaangevende organisaties in de industriële sector
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Klaasquartel</h3>
                  <p className="text-gray-600">Industriële apparatuur en machine oplossingen</p>
                </div>
                <a 
                  href="https://klaasquartel.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-orange-600 transition-colors duration-200" />
                </a>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Geleverde Diensten</h4>
                <div className="flex flex-wrap gap-2">
                  {['Machine beheersystemen', 'Proces optimalisatie', 'Industriële IoT integratie', 'Onderhoud planning'].map((service, idx) => (
                    <span key={idx} className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Project Duur</h5>
                  <p className="text-gray-600">12 maanden</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Belangrijkste Resultaten</h5>
                  <p className="text-green-600 font-medium">40% efficiëntie verbetering in machine operaties</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Project Succesvol Afgerond</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Onze Industriële Oplossingen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uitgebreide technologie oplossingen voor moderne industriële omgevingen
            </p>
          </div>

          <div className="space-y-12">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Belangrijkste Functies</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Bedrijfsvoordelen</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
                      <div className="w-full h-64 bg-white rounded-xl flex items-center justify-center">
                        <Icon className="w-24 h-24 text-orange-600" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Geavanceerde Functies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Geavanceerde mogelijkheden die onze industriële oplossingen onderscheiden
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Bewezen Resultaten</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meetbare impact van industriële implementaties
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-orange-600" />
                  </div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industriële Technologieën</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Geavanceerde technologieën die onze industriële oplossingen aandrijven
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'IoT Sensors', 'MQTT', 'InfluxDB', 'Grafana', 'Docker', 'Kubernetes',
              'Edge Computing', 'Machine Learning', 'OPC UA', 'SCADA', 'PLC Integration', 'Cloud Platforms'
            ].map((tech, index) => (
              <div key={index} className="bg-orange-50 p-4 rounded-lg text-center hover:bg-orange-100 transition-colors duration-200">
                <span className="font-medium text-orange-800">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Klaar om Jouw Industriële Operaties te Optimaliseren?
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Laten we bespreken hoe onze industriële oplossingen jouw operaties kunnen transformeren, 
            kosten reduceren en efficiëntie verbeteren in jouw organisatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300"
            >
              Bespreek Industriële Oplossingen
            </Link>
            <Link
              to="/#portfolio"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
            >
              Bekijk Industriële Projecten
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default IndustrialSolutionsPage;