import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { ArrowRight } from 'lucide-react';

const Landing = () => {
  return (
    <div className="h-screen w-full overflow-hidden relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1625823007440-4c96dd00e839?q=80&w=2070&auto=format&fit=crop")', 
          filter: 'brightness(0.8)'
        }} 
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      
      {/* Content */}
      <Navbar transparent={true} />
      
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 drop-shadow-md">
            Himalayan Produce, <br className="hidden md:block" />Direct to You
          </h1>
          <h2 className="text-2xl md:text-3xl font-display text-gray-800 mb-8 drop-shadow-md">
            Connecting Nature with Technology
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            A sustainable supply chain platform connecting Himalayan producers with urban consumers. 
            Experience freshness, support local communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/dashboard/customer" 
              className="revolynx-button-primary flex items-center justify-center gap-2"
            >
              Start Exploring <ArrowRight size={20} />
            </Link>
            <Link 
              to="/role-select" 
              to="/register/producer"
              className="revolynx-button-secondary flex items-center justify-center gap-2"
            >
              Join as Producer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
