
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-10 w-10 bg-gradient-to-br from-portfolio-blue-light to-portfolio-accent rounded-lg flex items-center justify-center text-white font-bold text-xl">
        VS
      </div>
      <span className="font-bold text-xl text-portfolio-blue-dark">Vikrant Singh</span>
    </div>
  );
};

export default Logo;
