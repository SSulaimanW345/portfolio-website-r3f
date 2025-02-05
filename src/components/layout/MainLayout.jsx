import Footer from './footer/Footer';
import { Navbar } from './navbar/Navbar';

export const MainLayout = ({ children }) => (
  <main className="w-full mx-auto relative">
    <Navbar />
    {children}
    <Footer />
  </main>
);
