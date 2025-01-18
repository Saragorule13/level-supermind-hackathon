import React from 'react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn">
            Meet the{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate__animated animate__fadeIn">
            Hello! We are Team Null Pointers. We are spiritual experts, astrologers, and AI engineers dedicated to helping you on your spiritual journey. 
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-neutral-800 p-8 rounded-2xl hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold">
                S
              </div>
              <div className="ml-4">
                <h4 className="font-bold">Sara Gorule</h4>
                <p className="text-gray-400">Frontend Dev</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-neutral-800 p-8 rounded-2xl hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold">
                S
              </div>
              <div className="ml-4">
                <h4 className="font-bold">Smit Barve</h4>
                <p className="text-gray-400">AI/ML</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-neutral-800 p-8 rounded-2xl hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp animate__delay-2s">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold">
                R
              </div>
              <div className="ml-4">
                <h4 className="font-bold">Ritesh Gharat</h4>
                <p className="text-gray-400">Backend Dev</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 p-8 rounded-2xl hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp animate__delay-2s">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold">
                P
              </div>
              <div className="ml-4">
                <h4 className="font-bold">Prashant Dhuri</h4>
                <p className="text-gray-400">Backend Dev</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
