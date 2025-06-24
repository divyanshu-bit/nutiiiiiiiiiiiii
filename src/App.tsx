import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductShowcase from './components/ProductShowcase';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <ProductShowcase />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;