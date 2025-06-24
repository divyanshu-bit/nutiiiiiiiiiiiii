import React from 'react';
import { User, Target, TrendingUp, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Personalized Assessment",
      description: "Comprehensive health and lifestyle analysis to create your unique nutritional profile."
    },
    {
      icon: Target,
      title: "Custom Meal Plans",
      description: "Tailored weekly meal plans designed specifically for your goals, preferences, and dietary restrictions."
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Real-time monitoring of your health metrics and continuous plan optimization."
    },
    {
      icon: Shield,
      title: "Expert Support",
      description: "24/7 access to certified nutritionists and wellness coaches for guidance and motivation."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Path to Wellness
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach combines cutting-edge nutrition science with personalized care to deliver results that last.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:bg-green-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <service.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Health?
          </h3>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Join our personalized nutrition program and discover how the right diet plan can change your life forever.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;