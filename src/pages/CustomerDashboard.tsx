
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Slider
} from '@/components/ui/slider';
import { SearchIcon, Heart, ShoppingCart, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: 'Himalayan Wild Honey',
    category: 'honey',
    price: 599,
    location: 'Uttarakhand',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9uZXl8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    featured: true,
  },
  {
    id: 2,
    name: 'Organic Darjeeling Tea',
    category: 'tea',
    price: 349,
    location: 'West Bengal',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhfGVufDB8fDB8fHww',
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Premium Kashmiri Saffron',
    category: 'spices',
    price: 1299,
    location: 'Kashmir',
    image: 'https://images.unsplash.com/photo-1600704514457-fcd7f8c05f21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FmZnJvbnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.9,
    featured: true,
  },
  {
    id: 4,
    name: 'Herbal Tulsi Mix',
    category: 'herbs',
    price: 249,
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1590607199580-c2eda293fedd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVyYnN8ZW58MHx8MHx8fDA%3D',
    rating: 4.3,
  },
  {
    id: 5,
    name: 'Fresh Himalayan Apples',
    category: 'fruits',
    price: 399,
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGVzfGVufDB8fDB8fHww',
    rating: 4.5,
  },
  {
    id: 6,
    name: 'Handcrafted Wooden Artifacts',
    category: 'handicrafts',
    price: 1499,
    location: 'Uttarakhand',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvb2RlbiUyMGNyYWZ0fGVufDB8fDB8fHww',
    rating: 4.7,
  },
];

// ProductCard component
const ProductCard = ({ product }: { product: typeof sampleProducts[0] }) => {
  return (
    <Card className="revolynx-card overflow-hidden flex flex-col h-full">
      <div className="relative">
        <div 
          className="h-48 bg-cover bg-center" 
          style={{ backgroundImage: `url(${product.image})` }}
        />
        {product.featured && (
          <div className="absolute top-2 right-2 bg-revolynx-green text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-revolynx-gray text-sm">{product.location}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-revolynx-green">₹{product.price}</p>
            <div className="flex items-center text-xs text-revolynx-gray">
              {'★'.repeat(Math.floor(product.rating))}
              {product.rating % 1 !== 0 && '☆'}
              {'☆'.repeat(5 - Math.ceil(product.rating))}
              <span className="ml-1">{product.rating}</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <Heart className="h-4 w-4 mr-1" />
          Wishlist
        </Button>
        <Button size="sm" className="flex-1">
          <ShoppingCart className="h-4 w-4 mr-1" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

const CustomerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Filter products based on search and filters
  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' ? true : product.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' ? true : product.location === selectedLocation;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
  });
  
  return (
    <div className="min-h-screen bg-revolynx-white-dark">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Explore Products</h1>
            
            <div className="relative mt-4 sm:mt-0 w-full sm:w-auto">
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full sm:w-72"
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-revolynx-gray h-5 w-5" />
            </div>
            
            {/* Mobile filter toggle */}
            <Button 
              variant="outline" 
              className="md:hidden mt-4 w-full"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <div className={cn(
              "md:block",
              isMobileFilterOpen ? "block" : "hidden"
            )}>
              <Card className="sticky top-24">
                <CardContent className="p-4 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Category</h3>
                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="honey">Honey</SelectItem>
                        <SelectItem value="tea">Tea</SelectItem>
                        <SelectItem value="herbs">Herbs</SelectItem>
                        <SelectItem value="spices">Spices</SelectItem>
                        <SelectItem value="fruits">Fruits</SelectItem>
                        <SelectItem value="vegetables">Vegetables</SelectItem>
                        <SelectItem value="handicrafts">Handicrafts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">Location</h3>
                    <Select
                      value={selectedLocation}
                      onValueChange={setSelectedLocation}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
                        <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                        <SelectItem value="Kashmir">Kashmir</SelectItem>
                        <SelectItem value="West Bengal">West Bengal</SelectItem>
                        <SelectItem value="Nepal Border">Nepal Border</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">Price Range</h3>
                    <div className="space-y-4">
                      <Slider 
                        defaultValue={[0, 2000]} 
                        max={2000} 
                        step={100}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex justify-between text-sm">
                        <span>₹{priceRange[0]}</span>
                        <span>₹{priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full">Apply Filters</Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Products Grid */}
            <div className="md:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold">No products found</h3>
                  <p className="text-revolynx-gray mt-2">Try adjusting your filters or search term</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
