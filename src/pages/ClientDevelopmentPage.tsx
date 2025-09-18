import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Users, CheckCircle, ExternalLink, Calendar, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const ClientDevelopmentPage = () => {
  const clients = [
    {
      name: 'Juva',
      description: 'Toonaangevende zorgverlening technologie oplossingen',
      services: ['Full-stack ontwikkeling', 'API integratie', 'Mobiele applicaties'],
      duration: '18 maanden',
      results: 'Patiëntenzorg efficiëntie verbeterd met 40%'
    },
    {
      name: 'AS Watson',
      description: 'Wereldwijde gezondheid en schoonheid retailer',
      services: ['E-commerce platform', 'Voorraadbeheer', 'Klant analyses'],
      duration: '12 maanden',
      results: 'Online verkoop verhoogd met 65%'
    },
    {
      name: 'Cannock',
      description: 'Industriële apparatuur en engineering oplossingen',
      services: ['Industrieel beheersysteem', 'Proces automatisering', 'Data analyse platform'],
      duration: '10 maanden',
      results: 'Operaties gestroomlijnd over meerdere faciliteiten'
    },
    {
      name: 'Heerema',
      description: 'Maritieme contracten en offshore oplossingen',
      services: ['Projectbeheer platform', 'Resource planning systeem', 'Real-time monitoring'],
      duration: '15 maanden',
      results: 'Project efficiëntie verbeterd met 35%'
    },
    {
      name: 'Biblion',
      description: 'Bibliotheek en onderwijsdiensten',
      services: ['Digitaal bibliotheek platform', 'Gebruikersbeheer', 'Content levering'],
      duration: '15 maanden',
      results: 'Gebruikersbetrokkenheid verhoogd met 80%'
    }
  ];

  const capabilities = [
    {
      icon: Code,
      title: 'Full-Stack Ontwikkeling',
      description: 'Complete webapplicatie ontwikkeling met moderne technologieën zoals React, Node.js en cloud platforms.'
    },
    {
      icon: Users,
      title: 'Bedrijfsoplossingen',
      description: 'Schaalbare oplossingen ontworpen voor grote organisaties met complexe vereisten en hoge gebruikersvolumes.'
    },
    {
      icon: Award,
      title: 'Kwaliteitsborging',
      description: 'Strenge test- en kwaliteitscontrole processen die betrouwbare, veilige en performante applicaties garanderen.'
    },
    {
      icon: Calendar,
      title: 'Projectbeheer',
      description: 'Agile ontwikkelmethodologie met transparante communicatie en regelmatige mijlpaal leveringen.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/"
              className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Klant Project Ontwikkeling
              </h1>
            </div>
            
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Wij leveren maatwerk ontwikkeloplossingen voor gevestigde bedrijfsklanten, 
              waarbij we schaalbare applicaties bouwen die bedrijfsgroei en operationele efficiëntie stimuleren.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-white font-medium">4 Grote Klanten</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-white font-medium">50+ Projecten Opgeleverd</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-white font-medium">25+ Jaar Ervaring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Onze Ontwikkel Capaciteiten</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uitgebreide technische expertise om complexe bedrijfsvereisten aan te pakken
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Klanten Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vertrouwd door toonaangevende organisaties in verschillende sectoren
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{client.name}</h3>
                    <p className="text-gray-600">{client.description}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Services Provided</h4>
                <h4 className="font-semibold text-gray-900 mb-3">Geleverde Diensten</h4>
                  <div className="flex flex-wrap gap-2">
                    {client.services.map((service, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Project Duur</h5>
                    <p className="text-gray-600">{client.duration}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Belangrijkste Resultaten</h5>
                    <p className="text-green-600 font-medium">{client.results}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Project Succesvol Afgerond</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologie Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moderne technologieën en frameworks voor robuuste, schaalbare oplossingen
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB',
              'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs', 'Microservices'
            ].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <span className="font-medium text-gray-800">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Klaar om Jouw Project te Starten?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Laten we bespreken hoe wij je kunnen helpen de perfecte oplossing voor jouw bedrijfsbehoeften te bouwen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Neem Contact Op
            </Link>
            <Link
              to="/#portfolio"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Bekijk Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default ClientDevelopmentPage;
