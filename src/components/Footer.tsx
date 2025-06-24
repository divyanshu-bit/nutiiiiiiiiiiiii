import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img 
                src="/WhatsApp_Image_2025-06-23_at_14.10.23_162e5718-removebg-preview.png" 
                alt="Nutritive Nest Logo" 
                className="h-12 w-12 object-contain bg-white rounded-full p-1"
              />
              <span className="text-2xl font-bold">Nutritive Nest</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming lives through personalized nutrition and wellness solutions backed by science.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Personalized Diet Plans</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Nutrition Consultation</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Progress Tracking</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Wellness Coaching</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Products</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Slimming Camellia Tea</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Meal Plans</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Supplements</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Recipe Books</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Nutritive Nest. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;