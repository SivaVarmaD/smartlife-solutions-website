import ProductMockup3D from '@/components/ProductMockup3D';

export default function Solutions() {
  const solutions = [
    {
      title: "Smart Lighting",
      description: "Automated lighting systems that adapt to your schedule and preferences",
      features: ["Voice control", "Mobile app integration", "Energy savings", "Mood lighting"],
      size: "large" // Featured card
    },
    {
      title: "Home Security",
      description: "Comprehensive security solutions with smart cameras and sensors",
      features: ["24/7 monitoring", "Mobile alerts", "Smart locks", "Video surveillance"],
      size: "medium"
    },
    {
      title: "Climate Control",
      description: "Smart thermostats and HVAC automation for optimal comfort",
      features: ["Temperature scheduling", "Energy optimization", "Remote control", "Learning algorithms"],
      size: "small"
    },
    {
      title: "Entertainment Systems",
      description: "Integrated audio-visual systems for the ultimate entertainment experience",
      features: ["Multi-room audio", "Smart TV integration", "Voice commands", "Streaming services"],
      size: "medium"
    },
    {
      title: "Smart Appliances",
      description: "Connect and control all your home appliances from anywhere",
      features: ["Remote monitoring", "Scheduling", "Energy tracking", "Maintenance alerts"],
      size: "small"
    },
    {
      title: "Voice Assistants",
      description: "Complete integration with popular voice assistants",
      features: ["Alexa integration", "Google Assistant", "Custom commands", "Smart routines"],
      size: "large"
    }
  ];

  const getCardClasses = (size: string, index: number) => {
    const baseClasses = "bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6";
    
    switch (size) {
      case "large":
        return `${baseClasses} col-span-12 md:col-span-8 lg:col-span-6 row-span-2`;
      case "medium":
        return `${baseClasses} col-span-12 md:col-span-6 lg:col-span-4`;
      case "small":
        return `${baseClasses} col-span-12 md:col-span-4 lg:col-span-3`;
      default:
        return `${baseClasses} col-span-12 md:col-span-6`;
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Smart Home Solutions</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive home automation solutions designed to make your life easier, 
              more comfortable, and more secure.
            </p>
          </div>

          {/* Featured Product Mockups Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductMockup3D
                productName="Indoor Monitor"
                productModel="E216"
                icon="📺"
                description="High-resolution indoor monitoring with smart connectivity"
                className="h-64"
              />
              <ProductMockup3D
                productName="Indoor Monitor"
                productModel="E217"
                icon="🖥️"
                description="Advanced indoor monitor with enhanced features"
                className="h-64"
              />
              <ProductMockup3D
                productName="Video Door Phone"
                productModel="C112"
                icon="📞"
                description="Smart video doorbell with two-way communication"
                className="h-64"
              />
            </div>
          </div>

          {/* Asymmetrical Grid Layout */}
          <div className="grid grid-cols-12 gap-6 auto-rows-max">
            {solutions.map((solution) => {
              const isLarge = solution.size === "large";
              return (
                <div key={solution.title} className={getCardClasses(solution.size, 0)}>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className={`font-bold text-gray-900 mb-3 product-name-shadow ${isLarge ? 'text-2xl' : 'text-xl'}`}>
                        {solution.title}
                      </h3>
                      <p className={`text-gray-600 ${isLarge ? 'text-base mb-6' : 'text-sm mb-4'}`}>
                        {solution.description}
                      </p>
                    </div>
                    {/* Placeholder for product icon/image */}
                    <div className="card bg-blue-50 p-3 rounded-lg ml-4 flex-shrink-0">
                      <span className="text-blue-600 font-semibold text-sm">Product</span>
                    </div>
                  </div>
                  
                  {/* Features List */}
                  <ul className={`space-y-2 mb-6 ${isLarge ? 'grid grid-cols-2 gap-2' : ''}`}>
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="text-blue-600 mr-2 font-bold">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <div className="mt-auto">
                    <a 
                      href="/request-demo" 
                      className={`text-blue-600 hover:text-blue-800 font-semibold transition-colors ${
                        isLarge ? 'text-base' : 'text-sm'
                      } hover:underline`}
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional asymmetrical placeholder cards */}
          <div className="grid grid-cols-12 gap-6 mt-8">
            <div className="card col-span-12 md:col-span-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 product-name-shadow">Custom Solutions</h3>
              <p className="text-blue-100">Tailored automation packages for unique requirements</p>
            </div>
            
            <div className="card col-span-12 md:col-span-3 bg-green-50 border border-green-200 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-green-800 mb-2 product-name-shadow">Eco-Friendly</h3>
              <p className="text-green-600 text-sm">Sustainable smart home solutions</p>
            </div>
            
            <div className="card col-span-12 md:col-span-4 bg-purple-50 border border-purple-200 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-purple-800 mb-2 product-name-shadow">24/7 Support</h3>
              <p className="text-purple-600 text-sm">Round-the-clock technical assistance</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <a
              href="/request-demo"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}