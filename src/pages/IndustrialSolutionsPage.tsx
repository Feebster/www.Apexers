import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cog, Settings, BarChart3, Shield, ExternalLink, TrendingUp, Clock, Wrench } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const IndustrialSolutionsPage = () => {
  const solutions = [
    {
      icon: Settings,
      title: 'Machine Management Systems',
      description: 'Comprehensive platforms for monitoring, controlling, and optimizing industrial machinery and equipment.',
      features: ['Real-time monitoring', 'Predictive maintenance', 'Performance analytics', 'Remote control capabilities'],
      benefits: ['Reduced downtime', 'Lower maintenance costs', 'Improved efficiency', 'Better resource utilization']
    },
    {
      icon: BarChart3,
      title: 'Industrial IoT Solutions',
      description: 'Connected systems that gather data from industrial equipment to provide insights and automation.',
      features: ['Sensor integration', 'Data collection', 'Cloud connectivity', 'Real-time dashboards'],
      benefits: ['Data-driven decisions', 'Process optimization', 'Cost reduction', 'Quality improvement']
    },
    {
      icon: Wrench,
      title: 'Process Optimization Tools',
      description: 'Advanced analytics and automation tools designed to streamline industrial processes and workflows.',
      features: ['Workflow automation', 'Process analytics', 'Quality control', 'Resource planning'],
      benefits: ['Increased productivity', 'Quality assurance', 'Waste reduction', 'Operational excellence']
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      number: '35%',
      label: 'Efficiency Increase',
      description: 'Average improvement in operational efficiency'
    },
    {
      icon: Clock,
      number: '60%',
      label: 'Downtime Reduction',
      description: 'Decrease in unplanned maintenance downtime'
    },
    {
      icon: Shield,
      number: '99.9%',
      label: 'System Reliability',
      description: 'Uptime across all deployed systems'
    }
  ];

  const features = [
    {
      title: 'Predictive Maintenance',
      description: 'AI-powered algorithms that predict equipment failures before they occur, reducing costly downtime.'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of industrial processes with instant alerts and notifications.'
    },
    {
      title: 'Data Analytics',
      description: 'Advanced analytics that turn machine data into actionable insights for better decision-making.'
    },
    {
      title: 'Remote Management',
      description: 'Secure remote access and control capabilities for managing industrial systems from anywhere.'
    },
    {
      title: 'Integration Capabilities',
      description: 'Seamless integration with existing industrial systems and enterprise software.'
    },
    {
      title: 'Scalable Architecture',
      description: 'Solutions that grow with your business, from single machines to entire production facilities.'
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
              Back to Home
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Cog className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Industrial Solutions
              </h1>
            </div>
            
            <p className="text-xl text-orange-100 leading-relaxed mb-8">
              Sophisticated management tools and systems designed for industrial operations, 
              machine optimization, and process automation that drive operational excellence and efficiency.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Product: Munova</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship machine management platform transforming industrial operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Advanced Machine Management Platform
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Munova provides comprehensive machine management capabilities, enabling industrial 
                organizations to optimize their operations, reduce downtime, and improve overall efficiency 
                through intelligent monitoring and predictive maintenance.
              </p>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Core Capabilities</h4>
                <ul className="space-y-3">
                  {[
                    'Real-time machine monitoring and control',
                    'Predictive maintenance scheduling',
                    'Performance analytics and reporting',
                    'Integration with existing industrial systems'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl mb-8">
                <h4 className="font-semibold text-orange-800 mb-2">Industry Impact</h4>
                <p className="text-orange-700">
                  Deployed across multiple industrial facilities, resulting in significant 
                  improvements in operational efficiency and maintenance cost reduction.
                </p>
              </div>

              <a
                href="https://munova.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
              >
                Visit Munova.nl
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

      {/* Industrial Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Industrial Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions for modern industrial environments
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
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
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
                        <h4 className="font-semibold text-gray-900 mb-3">Business Benefits</h4>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge capabilities that set our industrial solutions apart
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable impact across industrial implementations
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industrial Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technologies powering our industrial solutions
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
            Ready to Optimize Your Industrial Operations?
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Let's discuss how our industrial solutions can transform your operations, 
            reduce costs, and improve efficiency across your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300"
            >
              Discuss Industrial Solutions
            </Link>
            <Link
              to="/#portfolio"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
            >
              View Industrial Projects
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