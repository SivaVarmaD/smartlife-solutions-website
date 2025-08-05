export default function Home() {
  return (
    <div>
      {/* Full-Width Hero Section - 100vh */}
      <section className="hero-full w-full">
        {/* Background Placeholder */}
        <div className="hero-bg-placeholder">
          {/* TODO: Add #007BFF gradient background */}
          {/* TODO: Add home icon pattern overlay */}
        </div>
        
        <div className="container relative z-10">
          <div className="grid-12">
            <div className="col-12 md:col-8 md:col-start-3 text-center text-white">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Transform Your Home with 
                <span className="block text-blue-200">Smart Technology</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
                SmartLife Solutions brings cutting-edge home automation to Hyderabad, 
                making your home more comfortable, secure, and energy-efficient.
              </p>
              <div className="mobile-stack max-w-md mx-auto">
                <a
                  href="/request-demo"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Request Demo
                </a>
                <a
                  href="/solutions"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Our Solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with 12-Column Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid-12">
            <div className="col-12 text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose SmartLife Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive home automation solutions tailored to your needs
              </p>
            </div>
          </div>
          
          <div className="grid-12">
            <div className="col-12 md:col-4">
              <div className="card text-center h-full">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🏠</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Smart Home Integration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Seamless integration of all your smart devices into one unified ecosystem
                </p>
              </div>
            </div>
            
            <div className="col-12 md:col-4">
              <div className="card text-center h-full">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🔒</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Enhanced Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced security systems with 24/7 monitoring for complete peace of mind
                </p>
              </div>
            </div>
            
            <div className="col-12 md:col-4">
              <div className="card text-center h-full">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Energy Efficiency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Reduce energy costs by up to 40% with intelligent automation systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container">
          <div className="grid-12">
            <div className="col-12 md:col-3 text-center mb-8 md:mb-0">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Homes Automated</div>
            </div>
            <div className="col-12 md:col-3 text-center mb-8 md:mb-0">
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="col-12 md:col-3 text-center mb-8 md:mb-0">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
            <div className="col-12 md:col-3 text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container">
          <div className="grid-12">
            <div className="col-12 md:col-8 md:col-start-3 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Home?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Join hundreds of satisfied customers in Hyderabad who have already made the smart choice.
              </p>
              <a
                href="/request-demo"
                className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
