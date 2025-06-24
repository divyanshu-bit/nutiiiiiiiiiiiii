import React from 'react';
import { Leaf, Clock, Zap, Heart } from 'lucide-react';

const ProductShowcase = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Boosts Metabolism",
      description: "Accelerates fat burning naturally"
    },
    {
      icon: Heart,
      title: "Antioxidant Rich",
      description: "Supports overall health and immunity"
    },
    {
      icon: Clock,
      title: "All-Day Energy",
      description: "Sustained energy without crashes"
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Premium organic ingredients only"
    }
  ];

  return (
    <section id="product" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                🚀 Launching Soon
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Introducing Slimming
                <span className="text-green-600 block">Camellia Tea</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                The perfect complement to your personalized diet plan. Our specially formulated slimming camellia tea combines ancient wisdom with modern science to accelerate your wellness journey.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-green-600">₹299</span>
                <span className="text-lg text-gray-500 line-through">₹399</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Early Bird 25% OFF
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors font-semibold">
                  Pre-Order Now - Limited Time
                </button>
                <a 
                  href="tel:+919991055527" 
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-600 hover:text-white transition-colors font-semibold text-center"
                >
                  Call +91-99910 55527
                </a>
              </div>
              <p className="text-sm text-gray-500">✓ 30-day money-back guarantee</p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-6 rounded-3xl shadow-2xl">
              <img 
                src="/WhatsApp Image 2025-06-24 at 10.55.25_704c9e74.jpg" 
                alt="Slimming Camellia Tea by Nutritive Nest" 
                className="w-full h-[500px] object-contain rounded-2xl"
              />
              <div className="absolute top-8 right-8 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                100% Safe & Natural
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4.9★</div>
                <div className="text-sm text-gray-600">Pre-launch Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;