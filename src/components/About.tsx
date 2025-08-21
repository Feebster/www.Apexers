import React from 'react';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '3', label: 'Expert Developers', icon: Users },
    { number: '50+', label: 'Projects Delivered', icon: Target },
    { number: '4', label: 'Core Specializations', icon: Lightbulb },
    { number: '5+', label: 'Years Experience', icon: Award },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Apexers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a dynamic team of three expert developers specializing in creating 
            innovative technology solutions that drive business growth and efficiency.
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
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We bridge the gap between cutting-edge technology and practical business solutions. 
              Our diverse expertise spans from custom client development to AI innovation, 
              educational technology, and industrial automation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a perfect balance of client projects and innovative contract work, 
              we consistently deliver exceptional results that exceed expectations and 
              drive meaningful business impact.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Apexers?</h4>
            <ul className="space-y-4">
              {[
                'Expert team with diverse technical skills',
                'Proven track record with established clients',
                'Innovation-driven approach to problem solving',
                'Full-stack development capabilities',
                'Agile and responsive project management'
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