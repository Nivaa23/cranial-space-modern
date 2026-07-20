import React from 'react';
import Hero from '../sections/Hero';
import ProductPreview from '../sections/ProductPreview';
import Problem from '../sections/Problem';
import WhyCranialSpace from '../sections/WhyCranialSpace';
import InteractiveShowcase from '../sections/InteractiveShowcase';
import GrowthJourney from '../sections/GrowthJourney';
import EcosystemVisual from '../sections/EcosystemVisual';
import TrustConversion from '../sections/TrustConversion';
import CinematicCTA from '../sections/CinematicCTA';

const Home = () => {
  return (
    <div style={{ width: '100%', maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Hero />
      <ProductPreview />
      <Problem />
      <WhyCranialSpace />
      <InteractiveShowcase />
      <GrowthJourney />
      <EcosystemVisual />
      <TrustConversion />
      <CinematicCTA />
    </div>
  );
};

export default Home;
