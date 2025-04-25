
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Logo from './Logo';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={cn(
      'fixed w-full z-50 py-4 px-4 md:px-8 transition-colors duration-300',
      transparent
        ? 'bg-transparent'
        : 'bg-gradient-to-r from-white via-sky-100 to-sky-200 shadow-md'
    )}>
    
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Logo colorMode={transparent ? 'light' : 'dark'} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={cn(
            'font-medium transition-colors duration-300 hover:text-revolynx-green',
            transparent ? 'text-white' : 'text-gray-800'
          )}>
            Home
          </Link>
          <Link to="/explore" className={cn(
            'font-medium transition-colors duration-300 hover:text-revolynx-green',
            transparent ? 'text-white' : 'text-gray-800'
          )}>
            Explore
          </Link>
          <Link to="/about" className={cn(
            'font-medium transition-colors duration-300 hover:text-revolynx-green',
            transparent ? 'text-white' : 'text-gray-800'
          )}>
            About
          </Link>
          <Link to="/contact" className={cn(
            'font-medium transition-colors duration-300 hover:text-revolynx-green',
            transparent ? 'text-white' : 'text-gray-800'
          )}>
            Contact
          </Link>
          <Link to="/login">
            <Button 
              variant={transparent ? "outline" : "default"} 
              className={cn(
                'transition-colors duration-300',
                transparent 
                  ? 'border-white text-white bg-white/10 hover:bg-white/20 hover:border-white/70 border-opacity-70' 
                  : 'bg-revolynx-green text-white hover:bg-revolynx-green-dark'
              )}
            >
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className={cn(
              "p-2 rounded-md focus:outline-none",
              transparent ? "text-white" : "text-gray-800"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mt-4 px-4 py-2 animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="py-2 font-medium text-gray-800 hover:text-revolynex-green"
              onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/explore" className="py-2 font-medium text-gray-800 hover:text-revolynex-green"
              onClick={() => setIsMenuOpen(false)}>
              Explore
            </Link>
            <Link to="/about" className="py-2 font-medium text-gray-800 hover:text-revolynex-green" 
              onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="py-2 font-medium text-gray-800 hover:text-revolynex-green"
              onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/login" className="py-2" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">Login</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
