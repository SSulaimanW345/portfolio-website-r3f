import Footer from './footer/Footer';
import { Navbar } from './navbar/Navbar';
import React, { useState, useEffect } from 'react';
import { SiteLoader } from '../ui/other/SiteLoader';
export const MainLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 500); // Small delay for smooth transition
    };

    if (document.readyState === 'complete') {
      handleLoad(); // If already loaded
    } else {
      window.addEventListener('load', handleLoad); // Wait for full page load
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);
  return (
    <div>
      {isLoading && <SiteLoader />}
      <main className={`w-full mx-auto relative  ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#0c0c0c_1px)] bg-[size:20px_20px]" />
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  );
};
