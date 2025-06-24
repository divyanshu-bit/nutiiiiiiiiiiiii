import React from 'react';
import { Award, Users, Microscope, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Clients"
    },
    {
      icon: Award,
      number: "5",
      label: "Years Experience"
    },
    {
      icon: Microscope,
      number: "50+",
      label: "Research Studies"
    },
    {
      icon: Globe,
      number: "25",
      label: "Countries Served"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Science Meets Personalization
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Founded by certified nutritionists and wellness experts, NutriVital combines cutting-edge nutritional science with personalized care to create diet plans that actually work.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Evidence-Based Approach</h3>
                  <p className="text-gray-600">Every recommendation is backed by peer-reviewed research and clinical studies.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Certified Experts</h3>
                  <p className="text-gray-600">Our team consists of registered dietitians, nutritionists, and wellness coaches.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Continuous Innovation</h3>
                  <p className="text-gray-600">We constantly update our methods based on the latest nutritional research.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Nutrition experts" 
              className="w-full h-96 object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;