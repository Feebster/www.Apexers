import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Bot, Zap, Target, ExternalLink, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const AISolutionsPage = () => {
  const solutions = [
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational agents that provide 24/7 customer support and engagement.',
      features: ['Natural language processing', 'Multi-language support', 'Integration with existing systems', 'Analytics and insights'],
      useCases: ['Customer service', 'Lead generation', 'FAQ automation', 'Appointment booking']
    },
    {
      icon: Zap,
      title: 'AI Agents',
      description: 'Autonomous AI systems that can perform complex tasks and decision-making processes.',
      features: ['Task automation', 'Decision making', 'Learning capabilities', 'API integrations'],
      useCases: ['Process automation', 'Data analysis', 'Content moderation', 'Quality control']
    },
    {
      icon: Target,
      title: 'E-commerce Content Creators',
      description: 'AI-powered tools that generate product descriptions, marketing content, and SEO-optimized text.',
      features: ['Product description generation', 'SEO optimization', 'Multi-platform content', 'Brand voice consistency'],
      useCases: ['Product catalogs', 'Marketing campaigns', 'Social media content', 'Email marketing']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '40% Efficiency Increase',
      description: 'Average productivity improvement across client implementations'
    },
    {
      icon: Bot,
      title: '24/7 Availability',
      description: 'AI solutions work around the clock without breaks or downtime'
    },
    {
      icon: Target,
      title: '95% Accuracy Rate',
      description: 'High precision in automated tasks and decision-making processes'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/"
              className="flex items-center gap-2 text-teal-200 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Solutions
              </h1>
            </div>
            
            <p className="text-xl text-teal-100 leading-relaxed mb-8">
              Cutting-edge artificial intelligence implementations die processes automatiseren, 
              customer experiences verbeteren en business innovation driven door intelligent automation.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://powerwiz.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white hover:bg-white/20 transition-colors duration-200"
              >
                <span className="font-medium">Reference: powerwiz.nl</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Onze AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI implementations tailored naar jouw business needs
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
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Use Cases</h4>
                        <ul className="space-y-2">
                          {solution.useCases.map((useCase, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                              <span className="text-gray-700">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl">
                      <div className="w-full h-64 bg-white rounded-xl flex items-center justify-center">
                        <Icon className="w-24 h-24 text-teal-600" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meetbare impact across alle onze AI implementations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging de latest in artificial intelligence en machine learning
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'OpenAI GPT', 'TensorFlow', 'PyTorch', 'Hugging Face', 'LangChain', 'Vector DBs',
              'RAG Systems', 'Fine-tuning', 'Embeddings', 'NLP', 'Computer Vision', 'MLOps'
            ].map((tech, index) => (
              <div key={index} className="bg-teal-50 p-4 rounded-lg text-center hover:bg-teal-100 transition-colors duration-200">
                <span className="font-medium text-teal-800">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PowerWiz Reference */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Zie Onze AI Solutions in Action
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Bezoek PowerWiz om onze AI-powered e-commerce content creation tools firsthand te ervaren.
          </p>
          <a
            href="https://powerwiz.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300"
          >
            Bezoek PowerWiz.nl
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready om AI Solutions te Implementeren?
          </h2>
          <p className="text-xl text-teal-100 mb-8 leading-relaxed">
            Laten we exploreren hoe artificial intelligence jouw business operations en customer experience kan transformeren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors duration-300"
            >
              Bespreek AI Solutions
            </Link>
            <Link
              to="/#portfolio"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-300"
            >
              Bekijk AI Projecten
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default AISolutionsPage;