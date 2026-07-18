import React from 'react';
import Hero from '../sections/Hero';
import ProductPreview from '../sections/ProductPreview';

const Home = () => {
  return (
    <div style={{ width: '100%', maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px' }}>
      <Hero />
      <ProductPreview />
    </div>
  );
};

export default Home;
