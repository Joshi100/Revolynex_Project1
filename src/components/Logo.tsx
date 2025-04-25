
import React from 'react';
import { Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  textClass?: string;
  iconClass?: string;
  size?: 'sm' | 'md' | 'lg';
  colorMode?: 'light' | 'dark';
}

const Logo = ({ 
  className, 
  textClass, 
  iconClass,
  size = 'md', 
  colorMode = 'dark' 
}: LogoProps) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 32,
  };

  return (
    <div className={cn("flex items-center", className)}>
      <Leaf 
        size={iconSizes[size]} 
        className={cn(
          "mr-2", 
          colorMode === 'light' ? "text-white" : "text-revolynx-green", 
          iconClass
        )} 
      />
      <span className={cn(
        "font-display font-semibold tracking-tight", 
        sizeClasses[size],
        colorMode === 'light' ? "text-white" : "text-gray-800", 
        textClass
      )}>
        Revolynex
      </span>
    </div>
  );
};

export default Logo;
