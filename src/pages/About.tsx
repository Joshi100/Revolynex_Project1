import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Leaf, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Navbar />
      
      <div className="w-full container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Mission Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Revolynx</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Bridging the gap between Himalayan producers and urban consumers through sustainable supply chain solutions.
            </p>
          </section>

          {/* Company Overview */}
          <Card className="mb-8 overflow-hidden border-0 shadow-lg w-full">
            <div className="bg-gradient-to-r from-emerald-600 to-green-700 h-2" />
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Globe className="text-emerald-600 h-8 w-8 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We envision a world where Himalayan farmers and artisans can directly connect with urban markets, 
                    ensuring fair compensation while preserving traditional farming practices and local ecosystems.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission and Values */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="bg-gradient-to-r from-emerald-600 to-green-700 h-2" />
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Leaf className="text-emerald-600 h-8 w-8 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                        Empower local producers with direct market access
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                        Ensure fair pricing and sustainable practices
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                        Preserve traditional farming methods
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                        Reduce supply chain inefficiencies
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                        Promote organic and natural products
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="bg-gradient-to-r from-emerald-600 to-green-700 h-2" />
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Heart className="text-emerald-600 h-8 w-8 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                        Sustainability and Environmental Stewardship
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                        Fair Trade and Ethical Business Practices
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                        Community Development
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                        Quality and Authenticity
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                        Transparency in Operations
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Section */}
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="bg-gradient-to-r from-emerald-600 to-green-700 h-2" />
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Award className="text-emerald-600 h-8 w-8 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">Our Impact</h2>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center mt-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-3xl font-bold text-emerald-600 mb-2">500+</h3>
                  <p className="text-gray-700">Farmers Empowered</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-3xl font-bold text-emerald-600 mb-2">20+</h3>
                  <p className="text-gray-700">Communities Supported</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-3xl font-bold text-emerald-600 mb-2">100%</h3>
                  <p className="text-gray-700">Organic Products</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Section */}
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="bg-gradient-to-r from-emerald-600 to-green-700 h-2" />
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Users className="text-emerald-600 h-8 w-8 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">Our Team</h2>
                  <p className="text-gray-700 mt-2">
                    Our dedicated team is passionate about creating sustainable solutions for Himalayan communities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
