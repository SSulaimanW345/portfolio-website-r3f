import Footer from './footer/Footer';
import { Navbar } from './navbar/Navbar';
import React, { useState, useEffect } from 'react';
import { SiteLoader } from '../ui/other/SiteLoader';
import { Background } from '../home/hero/Background';
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
        <Background fixed={true} />
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  );
};
