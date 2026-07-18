import React from 'react';
import '../styles/GlobalBackground.css';

const GlobalBackground = () => {
  return (
    <div className="global-background">
      <div className="bg-blob blob-primary" />
      <div className="bg-blob blob-sky" />
      <div className="bg-blob blob-purple" />
      <div className="bg-grain" />
    </div>
  );
};

export default GlobalBackground;
