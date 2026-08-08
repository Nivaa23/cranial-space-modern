import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import FeaturesPage from './pages/FeaturesPage';

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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
