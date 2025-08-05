import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid-12">
          {/* Company Info */}
          <div className="col-12 md:col-6 lg:col-5 mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  SmartLife Solutions
                </h3>
                <div className="text-sm text-gray-400">Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading home automation company in Hyderabad, transforming homes with smart technology solutions. 
              Making your home more comfortable, secure, and energy-efficient.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-semibold text-white">Address:</span> Hyderabad, Telangana, India
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span> 
                <a href="mailto:info@smartlifesolutions.com" className="hover:text-blue-400 transition-colors ml-1">
                  info@smartlifesolutions.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span> 
                <a href="tel:+91XXXXXXXXX" className="hover:text-blue-400 transition-colors ml-1">
                  +91-XXX-XXX-XXXX
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 md:col-3 lg:col-2 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-12 md:col-3 lg:col-2 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/request-demo" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Request Demo
                </Link>
              </li>
              <li>
                <span className="text-gray-300 flex items-center">
                  <span className="mr-2">→</span>
                  Support
                </span>
              </li>
              <li>
                <span className="text-gray-300 flex items-center">
                  <span className="mr-2">→</span>
                  Consultation
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 lg:col-3">
            <h4 className="text-lg font-semibold mb-6 text-white">Stay Connected</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to our newsletter for the latest smart home tips and updates.
            </p>
            <div className="mobile-stack">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            
            {/* Social Links Placeholder */}
            <div className="flex space-x-4 mt-6">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                <span className="text-sm">📘</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                <span className="text-sm">📱</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="grid-12 items-center">
            <div className="col-12 md:col-6 text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} SmartLife Solutions Pvt. Ltd. All rights reserved.
              </p>
            </div>
            <div className="col-12 md:col-6 text-center md:text-right">
              <div className="flex justify-center md:justify-end space-x-6">
                <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;