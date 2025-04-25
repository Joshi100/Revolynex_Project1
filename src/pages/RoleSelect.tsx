import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { ArrowRight, ShoppingBasket, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

const RoleSelect = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 pb-16 min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Join Revolynx</h1>
          <p className="text-revolynx-gray mt-2">Choose how you want to participate</p>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row">
          {/* Center divider for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-revolynx-gray-light -translate-x-1/2" />
          
          {/* Producer Card */}
          <div className="flex-1 p-4 md:p-8 md:pr-16">
            <div className="revolynx-card h-full flex flex-col p-4 md:p-8 animate-fade-in hover:scale-[1.02]">
              <div className="h-48 md:h-64 bg-revolynx-green/10 rounded-lg mb-6 flex items-center justify-center">
                <Truck size={80} className="text-revolynx-green opacity-80" />
              </div>
              
              <h2 className="text-2xl font-bold mb-3">Join as Producer</h2>
              
              <p className="text-revolynx-gray mb-6 flex-grow">
                Connect your Himalayan produce directly with urban markets. 
                Upload your products, manage inventory, and optimize your supply chain.
              </p>
              
              <ul className="text-sm text-revolynx-gray-dark mb-8">
                <li className="mb-2 flex items-center">
                  <ArrowRight size={16} className="mr-2 text-revolynx-green" />
                  Upload and manage product listings
                </li>
                <li className="mb-2 flex items-center">
                  <ArrowRight size={16} className="mr-2 text-revolynx-green" />
                  Track transportation options
                </li>
                <li className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-revolynx-green" />
                  Connect with urban consumers
                </li>
              </ul>
              
              <Link 
                to="/register/producer" 
                className={cn(
                  "revolynx-button-primary text-center"
                )}
              >
                Register as Producer
              </Link>
            </div>
          </div>
          
          {/* Customer Card */}
          <div className="flex-1 p-4 md:p-8 md:pl-16 mt-8 md:mt-0">
            <div className="revolynx-card h-full flex flex-col p-4 md:p-8 animate-fade-in hover:scale-[1.02]">
              <div className="h-48 md:h-64 bg-revolynx-green/10 rounded-lg mb-6 flex items-center justify-center">
                <ShoppingBasket size={80} className="text-revolynx-green opacity-80" />
              </div>
              
              <h2 className="text-2xl font-bold mb-3">Join as Customer</h2>
              
              <p className="text-revolynx-gray mb-6 flex-grow">
                Discover and purchase authentic Himalayan products directly from producers.
                Enjoy fresh, organic goods while supporting local communities.
              </p>
              
              <ul className="text-sm text-revolynx-gray-dark mb-8">
                <li className="mb-2 flex items-center">
                  <ArrowRight size={16} className="mr-2 text-revolynx-green" />
                  Browse diverse Himalayan products
                </li>
                <li className="mb-2 flex items-center">
                  <ArrowRight size={16} className="mr-2 text-revolynx-green" />
                  Filter by product type and benefits
                </li>
                <li className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-revolynx-green" />
                  Connect directly with producers
                </li>
              </ul>
              
              <Link 
                to="/register/customer"
                className={cn(
                  "revolynx-button-primary text-center"
                )}
              >
                Register as Customer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelect;
