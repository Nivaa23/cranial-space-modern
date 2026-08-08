import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import FeaturesPage from './pages/FeaturesPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="feature" element={<FeaturesPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="communities" element={<CommunityPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
