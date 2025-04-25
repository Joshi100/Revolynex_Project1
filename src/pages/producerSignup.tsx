import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Facebook, Phone, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProducerSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Only frontend for now: mock success.
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Signup Successful!",
        description: "Your producer account has been created.",
        variant: "default",
      });
      // After signup, redirect to login for now
      navigate("/login");
    }, 1200);
  };

  const handleSocialClick = (provider: string) => {
    toast({
      title: `Sign up with ${provider} is coming soon`,
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen bg-revolynx-white-dark">
      <Navbar />
      
      {/* Back button container - positioned with more padding below navbar */}
      <div className="container mx-auto px-4 pt-24 pb-4">
        <Button 
          variant="outline" 
          className="flex items-center gap-2 hover:bg-gray-100 shadow-sm"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={20} /> Back
        </Button>
      </div>

      <div className="pb-16 flex justify-center">
        <div className="relative bg-white/95 shadow-md rounded-xl max-w-md w-full mx-2 p-8 md:p-10 flex flex-col gap-6">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-center mb-2">
            Producer Sign Up
          </h1>
          <p className="text-center text-revolynx-gray mb-4 text-sm">
            Join Revolynx as a Himalayan product producer.
          </p>

          {/* Social sign up buttons */}
          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              onClick={() => handleSocialClick("Google")}
              className="w-full flex items-center justify-center gap-2"
              type="button"
            >
              <User className="text-gray-600" size={18} />
              Sign up with Google
            </Button>
            <Button
              variant="outline"
              onClick={() => handleSocialClick("Facebook")}
              className="w-full flex items-center justify-center gap-2"
              type="button"
            >
              <Facebook className="text-[#1877f3]" size={18} />
              Sign up with Facebook
            </Button>
            <Button
              variant="outline"
              onClick={() => handleSocialClick("Phone")}
              className="w-full flex items-center justify-center gap-2"
              type="button"
            >
              <Phone className="text-revolynx-green" size={18} />
              Sign up with Phone Number
            </Button>
          </div>
          <div className="flex items-center gap-2 mt-3 mb-2 px-2">
            <div className="flex-1 h-px bg-revolynx-gray-light" />
            <span className="text-xs text-revolynx-gray">or</span>
            <div className="flex-1 h-px bg-revolynx-gray-light" />
          </div>
          {/* Registration Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleInput}
                placeholder="e.g. Karma Dorjee"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleInput}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleInput}
                placeholder="At least 8 characters"
                minLength={8}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full mt-2"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
          <div className="text-center mt-2 text-sm">
            Already have an account?{" "}
            <Link to="/login?type=producer" className="text-revolynx-green hover:underline font-medium">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProducerSignup;
