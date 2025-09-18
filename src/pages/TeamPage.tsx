import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Code, Brain, Cog, Github, Linkedin, Mail, Award, Calendar, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Dimitri',
      role: 'Lead Developer & Co-Founder',
      image: 'https://apexers.nl/wp-content/uploads/2024/01/dimitri-apexers-400x400.jpg',
      bio: 'Dimitri is een ervaren full-stack developer met een passie voor innovative solutions en clean code. Hij leidt onze development teams en zorgt voor de technical excellence van alle projecten.',
      specialties: ['Full-Stack Development', 'System Architecture', 'Team Leadership', 'Code Review'],
      experience: '8+ jaar',
      location: 'Leiden, Nederland',
      color: 'blue',
      achievements: [
        'Lead developer bij 15+ enterprise projecten',
        'Expert in React, Node.js en cloud architectures',
        'Mentor voor junior developers',
        'Speaker op tech conferences'
      ]
    },
    {
      name: 'Kosse',
      role: 'AI Specialist & Innovation Lead',
      image: 'https://apexers.nl/wp-content/uploads/2024/01/kosse-apexers-400x400.jpg',
      bio: 'Kosse is onze AI expert die cutting-edge artificial intelligence solutions ontwikkelt. Hij transformeert complexe business challenges naar intelligente, geautomatiseerde oplossingen.',
      specialties: ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Automation'],
      experience: '6+ jaar',
      location: 'Amsterdam, Nederland',
      color: 'teal',
      achievements: [
        'AI solutions voor 10+ bedrijven geïmplementeerd',
        'Expert in OpenAI, TensorFlow en PyTorch',
        'Ontwikkelaar van PowerWiz AI platform',
        'Research in advanced ML algorithms'
      ]
    },
    {
      name: 'Michel',
      role: 'Senior Developer & Product Strategist',
      image: 'https://apexers.nl/wp-content/uploads/2024/01/michel-apexers-400x400.jpg',
      bio: 'Michel combineert technical expertise met strategic thinking. Hij zorgt ervoor dat onze solutions niet alleen technisch excellent zijn, maar ook perfect aansluiten bij business objectives.',
      specialties: ['Product Strategy', 'Backend Development', 'Database Design', 'API Architecture'],
      experience: '7+ jaar',
      location: 'Den Haag, Nederland',
      color: 'green',
      achievements: [
        'Product strategist voor Yollen en Munova',
        'Expert in database optimization en API design',
        'Architect van scalable backend systems',
        'Specialist in educational technology'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        accent: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        border: 'border-blue-200'
      },
      teal: {
        bg: 'bg-teal-50',
        accent: 'text-teal-600',
        button: 'bg-teal-600 hover:bg-teal-700',
        border: 'border-teal-200'
      },
      green: {
        bg: 'bg-green-50',
        accent: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        border: 'border-green-200'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/"
              className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Terug naar Home
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Wie Wij Zijn
              </h1>
            </div>
            
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Ontmoet het team achter Apexers - drie passionate developers die innovative technology solutions 
              creëren en businesses helpen groeien door cutting-edge development.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-white font-medium">3 Expert Developers</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-white font-medium">20+ Jaar Combined Experience</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-white font-medium">50+ Projecten Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ons Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drie gepassioneerde developers met complementaire skills en een shared vision 
              voor innovative technology solutions.
            </p>
          </div>

          <div className="space-y-16">
            {teamMembers.map((member, index) => {
              const colors = getColorClasses(member.color);
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className={`${colors.bg} p-8 rounded-2xl ${colors.border} border-2`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-64 h-64 rounded-xl object-cover shadow-lg"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="text-4xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className={`text-xl font-semibold ${colors.accent} mb-4`}>{member.role}</p>
                      <p className="text-lg text-gray-600 leading-relaxed">{member.bio}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Code className="w-5 h-5" />
                          Specialties
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span key={idx} className={`px-3 py-1 ${colors.bg} ${colors.accent} rounded-full text-sm font-medium`}>
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {member.achievements.slice(0, 2).map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${colors.accent.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {member.experience} experience
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {member.location}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Team Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Samen hebben we een impressive track record opgebouwd in diverse technology domains.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Code, number: '50+', label: 'Projecten Delivered', desc: 'Successful implementations' },
              { icon: Users, number: '25+', label: 'Happy Clients', desc: 'Across verschillende industries' },
              { icon: Brain, number: '8', label: 'AI Solutions', desc: 'Deployed en running' },
              { icon: Award, number: '20+', label: 'Jaar Experience', desc: 'Combined team expertise' }
            ].map(({ icon: Icon, number, label, desc }, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{label}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Onze Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hoe wij samenwerken om exceptional results te leveren voor onze clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Collaborative Development',
                description: 'Wij werken als één team, waarbij elke developer zijn unique expertise inbrengt voor optimal results.',
                icon: Users
              },
              {
                title: 'Innovation First',
                description: 'Wij blijven altijd up-to-date met de latest technologies en best practices in de industry.',
                icon: Brain
              },
              {
                title: 'Quality Focused',
                description: 'Elke line of code wordt reviewed en getest om de highest standards van quality te garanderen.',
                icon: Award
              }
            ].map((approach, index) => {
              const Icon = approach.icon;
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready om Met Ons Team te Werken?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Laten we bespreken hoe onze combined expertise jouw project naar het next level kan brengen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Start Een Project
            </Link>
            <Link
              to="/#services"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Bekijk Onze Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default TeamPage;