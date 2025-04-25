import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom'; // Added useSearchParams
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Login = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams(); // Hook to read query parameters
  const [activeTab, setActiveTab] = useState('customer'); 
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    // Set the active tab based on the query parameter 'type'
    const userType = searchParams.get('type');
    if (userType === 'producer' || userType === 'customer') {
      setActiveTab(userType);
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!loginData.email || !loginData.password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Password validation
    if (loginData.password.length < 8) {
      toast({
        title: "Password Error",
        description: "Password must be at least 8 characters long",
        variant: "destructive"
      });
      return;
    }
    
    // Show success toast
    toast({
      title: "Login Successful",
      description: `Logged in as ${activeTab}`,
    });
    
    // In a real app, you'd handle authentication here
    console.log('Login data:', { ...loginData, role: activeTab });
  };

  return (
    <div className="min-h-screen bg-revolynx-white-dark">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-md mx-auto">
          <Card className="w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <CardDescription>
                Login to access your Revolynx account
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="customer" value={activeTab} className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="customer">Customer</TabsTrigger>
                  <TabsTrigger value="producer">Producer</TabsTrigger>
                </TabsList>
                
                <TabsContent value="customer">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="customer-email">Email</Label>
                      <Input
                        id="customer-email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={loginData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="customer-password">Password</Label>
                        <Link to="/forgot-password" className="text-sm text-revolynx-green hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="customer-password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={loginData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Login as Customer
                    </Button>
                    
                    <div className="text-center text-sm mt-4">
                      Don't have an account?{' '}
                      <Link to="/role-select" className="text-revolynx-green hover:underline">
                        Sign up
                      </Link>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="producer">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="producer-email">Email</Label>
                      <Input
                        id="producer-email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={loginData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="producer-password">Password</Label>
                        <Link to="/forgot-password" className="text-sm text-revolynx-green hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="producer-password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={loginData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Login as Producer
                    </Button>
                    
                    <div className="text-center text-sm mt-4">
                      Don't have an account?{' '}
                      <Link to="/role-select" className="text-revolynx-green hover:underline">
                        Sign up
                      </Link>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;