export default function About() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About SmartLife Solutions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leading the home automation revolution in Hyderabad with innovative smart technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in Hyderabad, SmartLife Solutions Pvt. Ltd. has been at the forefront of home automation 
              technology, helping families transform their living spaces into intelligent, connected homes.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of experienced engineers and designers work tirelessly to bring you the latest in 
              smart home technology, ensuring your home is not just automated, but truly intelligent.
            </p>
            <p className="text-gray-600">
              We believe that technology should enhance your lifestyle, not complicate it. That&apos;s why we 
              focus on user-friendly solutions that integrate seamlessly into your daily routine.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To make smart home technology accessible and affordable for every family in Hyderabad, 
              creating homes that are more comfortable, secure, and energy-efficient.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Customer-first approach</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Cutting-edge technology</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Professional installation</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}