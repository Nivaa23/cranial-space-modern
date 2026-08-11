import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import FeaturesPage from './pages/FeaturesPage';
import CommunityPage from './pages/CommunityPage';
import MentorshipPage from './pages/MentorshipPage';
import ResourcesPage from './pages/ResourcesPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import OnboardingPage from './pages/onboarding/OnboardingPage';
import DashboardPage from './pages/dashboard/DashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Standalone Authentication Experience */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/join" element={<SignUpPage />} />

        {/* Authenticated Onboarding & Product Workspace */}
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Public Marketing Website */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="feature" element={<FeaturesPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="communities" element={<CommunityPage />} />
          <Route path="mentorship" element={<MentorshipPage />} />
          <Route path="mentors" element={<MentorshipPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="resource" element={<ResourcesPage />} />
          <Route path="blog" element={<ResourcesPage />} />
          <Route path="blogs" element={<ResourcesPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="prices" element={<PricingPage />} />
          <Route path="plans" element={<PricingPage />} />
          <Route path="plan" element={<PricingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
