
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-revolynx-white-dark">
      <Navbar />
      
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-9xl font-bold text-revolynx-green">404</h1>
        <h2 className="text-3xl font-bold mt-4 mb-6">Page Not Found</h2>
        <p className="text-revolynx-gray max-w-md mb-8">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
