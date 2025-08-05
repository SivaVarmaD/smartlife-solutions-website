import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-grow relative">
        {/* Background Pattern (Optional) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 pointer-events-none"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-150"
          style={{ width: '0%' }}
          id="scroll-progress"
        ></div>
      </div>
    </div>
  );
};

export default Layout;