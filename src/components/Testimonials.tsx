import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "I lost 25 pounds in 3 months with NutriVital's personalized plan. The support team was incredible, and the meal plans actually fit my busy lifestyle.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "As someone who tried every diet, this was different. The personalized approach made all the difference. I finally found something sustainable.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Teacher",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The VitalSlim tea is amazing! Combined with my diet plan, I have more energy than I've had in years. Can't wait for the official launch!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from people who transformed their health with our personalized approach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="mb-6">
                <Quote className="h-8 w-8 text-green-600 mb-4" />
                <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-6 py-3 rounded-full">
            <Star className="h-5 w-5 text-green-600 fill-current" />
            <span className="font-semibold text-green-800">4.9/5 Average Rating</span>
            <span className="text-green-600">•</span>
            <span className="text-green-700">1,200+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;