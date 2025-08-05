export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Home with Smart Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              SmartLife Solutions brings cutting-edge home automation to Hyderabad, 
              making your home more comfortable, secure, and energy-efficient.
            </p>
            <div className="space-x-4">
              <a
                href="/request-demo"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Request Demo
              </a>
              <a
                href="/solutions"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
              >
                Our Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose SmartLife Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive home automation solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Home Integration</h3>
              <p className="text-gray-600">Seamless integration of all your smart devices</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
              <p className="text-gray-600">Advanced security systems for peace of mind</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Energy Efficiency</h3>
              <p className="text-gray-600">Reduce energy costs with smart automation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
