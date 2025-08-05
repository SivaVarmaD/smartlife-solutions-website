import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">SmartLife Solutions Pvt. Ltd.</h3>
            <p className="text-gray-300 mb-4">
              Leading home automation company in Hyderabad, transforming homes with smart technology solutions.
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Address:</span> Hyderabad, Telangana, India
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Email:</span> info@smartlifesolutions.com
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Phone:</span> +91-XXX-XXX-XXXX
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/solutions" className="text-gray-300 hover:text-blue-400 transition-colors">Solutions</Link></li>
              <li><Link href="/case-studies" className="text-gray-300 hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/request-demo" className="text-gray-300 hover:text-blue-400 transition-colors">Request Demo</Link></li>
              <li><span className="text-gray-300">Support</span></li>
              <li><span className="text-gray-300">Consultation</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} SmartLife Solutions Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;