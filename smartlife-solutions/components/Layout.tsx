import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* 12-column grid container with 24px padding and 16px margins */}
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;