import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Users, BookOpen, Target, ExternalLink, Award, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const EducationalTechPage = () => {
  const products = [
    {
      name: 'Yollen',
      description: 'Teacher collegial consultation tool that facilitates professional development and collaborative learning among educators.',
      website: 'www.yollen.nl',
      partnership: 'https://www.cps.nl/yollen',
      features: [
        'Peer consultation platform',
        'Professional development tracking',
        'Collaborative learning tools',
        'Assessment and feedback systems'
      ],
      impact: 'Used by 500+ educators across the Netherlands',
      color: 'green'
    }
  ];

  const solutions = [
    {
      icon: Users,
      title: 'Collaborative Consultation Tools',
      description: 'Platforms that enable educators to share knowledge, seek advice, and collaborate on teaching strategies.',
      benefits: ['Peer learning', 'Knowledge sharing', 'Professional growth', 'Community building']
    },
    {
      icon: BookOpen,
      title: 'Assessment & Evaluation Systems',
      description: 'Comprehensive tools for educational assessment, student evaluation, and learning progress tracking.',
      benefits: ['Data-driven insights', 'Progress tracking', 'Personalized learning', 'Performance analytics']
    },
    {
      icon: Target,
      title: 'Learning Management Solutions',
      description: 'Complete educational platforms that manage courses, content delivery, and student engagement.',
      benefits: ['Content management', 'Student engagement', 'Course delivery', 'Learning analytics']
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Active Educators',
      description: 'Teachers using our platforms daily'
    },
    {
      icon: Award,
      number: '95%',
      label: 'Satisfaction Rate',
      description: 'User satisfaction across all platforms'
    },
    {
      icon: TrendingUp,
      number: '40%',
      label: 'Efficiency Improvement',
      description: 'Average time saved in educational processes'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-900 via-green-700 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/"
              className="flex items-center gap-2 text-green-200 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Educational Tech
              </h1>
            </div>
            
            <p className="text-xl text-green-100 leading-relaxed mb-8">
              Innovative tools en platforms designed om educational experiences te verbeteren, 
              professional development te faciliteren en learning outcomes voor educators en students te optimaliseren.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.yollen.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white hover:bg-white/20 transition-colors duration-200"
              >
                <span className="font-medium">Yollen Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.cps.nl/yollen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white hover:bg-white/20 transition-colors duration-200"
              >
                <span className="font-medium">CPS Partnership</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product - Yollen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Product: Yollen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ons flagship educational platform dat teacher collaboration en professional development transformeert
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                <div className="w-full h-64 bg-white rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-24 h-24 text-green-600" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Teacher Collegial Consultation Tool
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Yollen faciliteert professional development en collaborative learning tussen educators, 
                met een comprehensive platform voor peer consultation en knowledge sharing.
              </p>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {products[0].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-xl mb-8">
                <h4 className="font-semibold text-green-800 mb-2">Impact</h4>
                <p className="text-green-700">Gebruikt door 500+ educators across Nederland</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.yollen.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  Visit Yollen.nl
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.cps.nl/yollen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-300"
                >
                  CPS Partnership
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Onze Educational Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed voor moderne educational environments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meetbare resultaten across onze educational technology implementations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-green-600" />
                  </div>
                  <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Educational Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moderne technologies die onze educational platforms poweren
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Node.js', 'PostgreSQL', 'WebRTC', 'Socket.io', 'Redis',
              'Learning Analytics', 'SCORM', 'LTI', 'xAPI', 'Responsive Design', 'PWA'
            ].map((tech, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition-colors duration-200">
                <span className="font-medium text-green-800">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Strategic Partnership met CPS
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Onze collaboration met CPS heeft ons enabled om meer educators te bereiken en 
            de impact van onze educational technology solutions across Nederland te expanderen.
          </p>
          <a
            href="https://www.cps.nl/yollen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            Meer Over Onze Partnership
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready om Education te Transformeren?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Laten we bespreken hoe onze educational technology solutions learning 
            experiences kunnen verbeteren en educational outcomes in jouw organisatie kunnen optimaliseren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300"
            >
              Bespreek Educational Solutions
            </Link>
            <Link
              to="/#portfolio"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300"
            >
              Bekijk Educational Projecten
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default EducationalTechPage;