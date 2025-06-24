import React from 'react';
import { ArrowRight, Play, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                🌱 Coming Soon: Revolutionary Slimming Camellia Tea
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Health with 
                <span className="text-green-600 block">Personalized</span>
                Diet Plans
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover the power of customized nutrition tailored specifically for your body, lifestyle, and goals. Join thousands who've transformed their lives with our science-backed approach.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 group">
                <span className="font-semibold">Start Your Journey</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:+919991055527" 
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span className="font-semibold">Book Appointment</span>
              </a>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>1000+ Success Stories</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Science-Backed Results</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-200 to-emerald-300 rounded-3xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Healthy lifestyle" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">95%</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Success Rate</p>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;