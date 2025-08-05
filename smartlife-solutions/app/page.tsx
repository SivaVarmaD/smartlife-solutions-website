export default function Home() {
  return (
    <>
      {/* Hero Section - Full width, breaks out of grid container */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden -mx-6 -mt-4 border-2 border-silver">
        {/* Villa Background Placeholder */}
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          {/* Placeholder for high-resolution villa background image */}
          <div className="text-gray-500 text-center">
            <div className="text-8xl mb-4">🏡</div>
            <p className="text-lg font-semibold">Villa Background Placeholder</p>
            <p className="text-sm text-caption mt-2">Replace with high-resolution villa image</p>
          </div>
        </div>
        
        {/* #007BFF overlay at 50% opacity */}
        <div className="absolute inset-0 bg-blue-600 opacity-50" style={{ backgroundColor: '#007BFF' }}></div>
        
        {/* Placeholder for home icon pattern - will be added later */}
        <div className="absolute inset-0 opacity-10">
          {/* Pattern placeholder - add home icon pattern here */}
        </div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Home with
                <span className="block text-blue-200">Smart Technology</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-blue-100">
                SmartLife Solutions brings cutting-edge home automation to Hyderabad, 
                making your home more comfortable, secure, and energy-efficient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/request-demo"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section - Within grid system */}
      <section className="py-16 bg-gray-50">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose SmartLife Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive home automation solutions tailored to your needs
              </p>
            </div>
            
            {/* Features Grid - Responsive across different screen sizes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Smart Home Integration</h3>
                <p className="text-gray-600">Seamless integration of all your smart devices for complete home automation</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Enhanced Security</h3>
                <p className="text-gray-600">Advanced security systems with smart monitoring for complete peace of mind</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Energy Efficiency</h3>
                <p className="text-gray-600">Reduce energy costs by up to 40% with intelligent automation systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
