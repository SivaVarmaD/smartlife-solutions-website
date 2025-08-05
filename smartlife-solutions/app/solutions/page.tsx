export default function Solutions() {
  const solutions = [
    {
      title: "Smart Lighting",
      description: "Automated lighting systems that adapt to your schedule and preferences",
      features: ["Voice control", "Mobile app integration", "Energy savings", "Mood lighting"]
    },
    {
      title: "Home Security",
      description: "Comprehensive security solutions with smart cameras and sensors",
      features: ["24/7 monitoring", "Mobile alerts", "Smart locks", "Video surveillance"]
    },
    {
      title: "Climate Control",
      description: "Smart thermostats and HVAC automation for optimal comfort",
      features: ["Temperature scheduling", "Energy optimization", "Remote control", "Learning algorithms"]
    },
    {
      title: "Entertainment Systems",
      description: "Integrated audio-visual systems for the ultimate entertainment experience",
      features: ["Multi-room audio", "Smart TV integration", "Voice commands", "Streaming services"]
    },
    {
      title: "Smart Appliances",
      description: "Connect and control all your home appliances from anywhere",
      features: ["Remote monitoring", "Scheduling", "Energy tracking", "Maintenance alerts"]
    },
    {
      title: "Voice Assistants",
      description: "Complete integration with popular voice assistants",
      features: ["Alexa integration", "Google Assistant", "Custom commands", "Smart routines"]
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Smart Home Solutions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive home automation solutions designed to make your life easier, 
            more comfortable, and more secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <span className="text-blue-600 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <a 
                  href="/request-demo" 
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/request-demo"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}