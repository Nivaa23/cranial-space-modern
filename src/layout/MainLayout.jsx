import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlobalBackground from '../components/GlobalBackground';

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      {/* Global atmospheric background */}
      <GlobalBackground />
      
      {/* Floating navigation */}
      <Navbar />
      
      {/* Page Content area */}
      <main style={{ flex: 1, paddingTop: '108px', position: 'relative', zIndex: 10 }}>
        <Outlet />
      </main>
      
      {/* Page Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
