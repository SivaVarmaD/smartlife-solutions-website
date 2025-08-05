export default function Solutions() {
  const solutions = [
    {
      title: "Smart Lighting",
      description: "Automated lighting systems that adapt to your schedule and preferences",
      features: ["Voice control", "Mobile app integration", "Energy savings", "Mood lighting"],
      size: "large" // Takes more space
    },
    {
      title: "Home Security",
      description: "Comprehensive security solutions with smart cameras and sensors",
      features: ["24/7 monitoring", "Mobile alerts", "Smart locks", "Video surveillance"],
      size: "tall" // Takes more height
    },
    {
      title: "Climate Control",
      description: "Smart thermostats and HVAC automation for optimal comfort",
      features: ["Temperature scheduling", "Energy optimization", "Remote control", "Learning algorithms"],
      size: "regular"
    },
    {
      title: "Entertainment Systems",
      description: "Integrated audio-visual systems for the ultimate entertainment experience",
      features: ["Multi-room audio", "Smart TV integration", "Voice commands", "Streaming services"],
      size: "wide" // Takes more width
    },
    {
      title: "Smart Appliances",
      description: "Connect and control all your home appliances from anywhere",
      features: ["Remote monitoring", "Scheduling", "Energy tracking", "Maintenance alerts"],
      size: "regular"
    },
    {
      title: "Voice Assistants",
      description: "Complete integration with popular voice assistants",
      features: ["Alexa integration", "Google Assistant", "Custom commands", "Smart routines"],
      size: "regular"
    }
  ];

  const getCardClasses = (size: string) => {
    const baseClasses = "card hover:shadow-2xl transition-all duration-500";
    switch (size) {
      case "large":
        return `${baseClasses} col-12 md:col-8 card-wide`;
      case "tall":
        return `${baseClasses} col-12 md:col-4 card-tall`;
      case "wide":
        return `${baseClasses} col-12 md:col-6 card-wide`;
      default:
        return `${baseClasses} col-12 md:col-4`;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container">
          <div className="grid-12">
            <div className="col-12 md:col-10 md:col-start-2 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Smart Home Solutions
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
                Comprehensive home automation solutions designed to make your life easier, 
                more comfortable, and more secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid - Asymmetrical Layout */}
      <section className="py-20">
        <div className="container">
          <div className="grid-12 auto-rows-fr" style={{ gridAutoRows: 'minmax(300px, auto)' }}>
            {solutions.map((solution, index) => (
              <div key={index} className={getCardClasses(solution.size)}>
                <div className="h-full flex flex-col">
                  {/* Icon based on solution type */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-2xl">
                        {index === 0 && "💡"}
                        {index === 1 && "🔒"}
                        {index === 2 && "🌡️"}
                        {index === 3 && "🎵"}
                        {index === 4 && "📱"}
                        {index === 5 && "🎤"}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 flex-grow text-lg leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mt-auto">
                    <ul className="space-y-3 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <span className="text-blue-600 mr-3 font-bold">•</span>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href="/request-demo" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg group transition-all duration-300"
                    >
                      Learn More 
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder Cards Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid-12">
            <div className="col-12 text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                More Solutions Coming Soon
              </h2>
              <p className="text-xl text-gray-600">
                We&apos;re constantly expanding our range of smart home solutions
              </p>
            </div>
          </div>
          
          {/* Placeholder Cards with Asymmetrical Layout */}
          <div className="grid-12">
            <div className="card col-12 md:col-6 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">Product</h3>
                <p className="text-gray-500">New smart solution in development</p>
              </div>
            </div>
            
            <div className="card col-12 md:col-3 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-dashed border-blue-200">
              <div className="text-center py-8">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Product</h3>
                <p className="text-blue-500 text-sm">Premium feature</p>
              </div>
            </div>
            
            <div className="card col-12 md:col-3 bg-gradient-to-br from-green-50 to-green-100 border-2 border-dashed border-green-200">
              <div className="text-center py-8">
                <div className="text-4xl mb-3">🌱</div>
                <h3 className="text-xl font-semibold text-green-600 mb-2">Product</h3>
                <p className="text-green-500 text-sm">Eco-friendly option</p>
              </div>
            </div>
            
            <div className="card col-12 md:col-4 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-dashed border-purple-200">
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Product</h3>
                <p className="text-purple-500">Targeted solution</p>
              </div>
            </div>
            
            <div className="card col-12 md:col-8 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-dashed border-orange-200">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-3xl font-semibold text-orange-600 mb-2">Product</h3>
                <p className="text-orange-500 text-lg">Award-winning innovation coming soon</p>
              </div>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Transform your home with our comprehensive smart solutions
              </p>
              <a
                href="/request-demo"
                className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Schedule Your Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}