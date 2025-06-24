import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <img 
              src="/WhatsApp_Image_2025-06-23_at_14.10.23_162e5718-removebg-preview.png" 
              alt="Nutritive Nest Logo" 
              className="h-16 w-16 object-contain"
            />
            <span className="text-2xl font-bold text-gray-900">Nutritive Nest</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Services</a>
            <a href="#product" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Our Tea</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</a>
          </nav>

          <button className="hidden md:block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold">
            Get Started
          </button>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Services</a>
              <a href="#product" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Our Tea</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</a>
              <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors w-fit font-semibold">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;