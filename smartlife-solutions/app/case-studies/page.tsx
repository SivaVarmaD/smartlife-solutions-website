export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Modern Villa in Banjara Hills",
      client: "The Sharma Family",
      challenge: "Complete home automation for a 4-bedroom villa with energy efficiency focus",
      solution: "Integrated smart lighting, climate control, security systems, and energy monitoring",
      results: ["40% reduction in energy costs", "Enhanced security with 24/7 monitoring", "Seamless voice control integration"],
      image: "🏡"
    },
    {
      title: "Luxury Apartment in Gachibowli",
      client: "Tech Executive",
      challenge: "Smart home setup for a busy professional with focus on convenience and security",
      solution: "Automated lighting, smart locks, entertainment system, and mobile app control",
      results: ["Complete remote home management", "Improved lifestyle convenience", "Enhanced property value"],
      image: "🏢"
    },
    {
      title: "Family Home in Jubilee Hills",
      client: "The Reddy Family",
      challenge: "Child-safe smart home with parental controls and educational features",
      solution: "Smart lighting with scheduling, secure access controls, and educational entertainment system",
      results: ["Safe and secure environment for children", "Educational smart features", "Peace of mind for parents"],
      image: "👨‍👩‍👧‍👦"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from our satisfied customers across Hyderabad. 
            See how SmartLife Solutions has transformed homes and lives.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-600 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">{study.image}</div>
                    <h3 className="text-xl font-bold">{study.client}</h3>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-600">
                            <span className="text-green-600 mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your home like our satisfied customers?
          </p>
          <a
            href="/request-demo"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Start Your Smart Home Journey
          </a>
        </div>
      </div>
    </div>
  );
}