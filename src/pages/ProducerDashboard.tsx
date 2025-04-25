import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Package, 
  Truck, 
  BarChart, 
  FileText, 
  Upload,
  Plus,
  ArrowLeft
} from 'lucide-react';

const ProducerDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    benefits: '',
    price: '',
    quantity: '',
    transportMethod: '',
  });
  
  const [productImage, setProductImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setProductData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProductImage(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Product Added",
        description: `${productData.name} has been successfully added.`,
      });
      
      setIsSubmitting(false);
      // Reset form after submission
      setProductData({
        name: '',
        description: '',
        category: '',
        benefits: '',
        price: '',
        quantity: '',
        transportMethod: '',
      });
      setProductImage(null);
    }, 1500);
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back to previous page
  };
  
  return (
    <div className="min-h-screen bg-revolynx-white-dark">
      <Navbar />
      
      <div className="container mx-auto pt-24 pb-16 px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={handleGoBack}
            className="flex items-center text-revolynx-gray-dark hover:text-revolynx-green"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Back to Selection</span>
          </Button>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-revolynx-green-dark">Producer Dashboard — Add Your Products</h1>
          <p className="text-revolynx-gray mt-2">Showcase your Himalayan products to urban customers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Producer Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start px-4 py-2 text-left">
                    <Package className="mr-2 h-5 w-5" />
                    <span>Products</span>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start px-4 py-2 text-left">
                    <Truck className="mr-2 h-5 w-5" />
                    <span>Transportation</span>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start px-4 py-2 text-left">
                    <BarChart className="mr-2 h-5 w-5" />
                    <span>Analytics</span>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start px-4 py-2 text-left">
                    <FileText className="mr-2 h-5 w-5" />
                    <span>Orders</span>
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Add New Product</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Product Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={productData.name}
                        onChange={handleInputChange}
                        placeholder="Himalayan Honey"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={productData.category}
                        onValueChange={(value) => handleSelectChange('category', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="select_category">Select category</SelectItem>
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
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={productData.description}
                        onChange={handleInputChange}
                        placeholder="Describe your product"
                        rows={3}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="benefits">Benefits</Label>
                      <Textarea
                        id="benefits"
                        name="benefits"
                        value={productData.benefits}
                        onChange={handleInputChange}
                        placeholder="Health benefits and unique qualities"
                        rows={2}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="price">Price (₹)</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        min="0"
                        step="0.01"
                        value={productData.price}
                        onChange={handleInputChange}
                        placeholder="299.99"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Available Quantity</Label>
                      <Input
                        id="quantity"
                        name="quantity"
                        type="number"
                        min="1"
                        value={productData.quantity}
                        onChange={handleInputChange}
                        placeholder="100"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="transportMethod">Transport Method</Label>
                      <Select
                        value={productData.transportMethod}
                        onValueChange={(value) => handleSelectChange('transportMethod', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select transport" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="select_transport">Select transport</SelectItem>
                          <SelectItem value="local-truck">Local Truck</SelectItem>
                          <SelectItem value="return-shipment">Return Shipment</SelectItem>
                          <SelectItem value="third-party">Third Party Logistics</SelectItem>
                          <SelectItem value="air-freight">Air Freight</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="productImage">Product Image</Label>
                      <div className="flex items-center gap-4">
                        <div className="w-full relative">
                          <Input
                            id="productImage"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                          <Label
                            htmlFor="productImage"
                            className="flex items-center justify-center w-full h-10 px-4 cursor-pointer bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            {productImage ? productImage.name : "Choose file"}
                          </Label>
                        </div>
                        
                        {productImage && (
                          <div className="h-10 w-10 bg-cover bg-center rounded-md border border-gray-300" 
                            style={{ backgroundImage: `url(${URL.createObjectURL(productImage)})` }} 
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Adding Product..." : "Add Product"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Products List Placeholder */}
            <Card className="mt-6">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Your Products</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-revolynx-gray">
                  <Package className="h-12 w-12 mx-auto mb-4 opacity-40" />
                  <p>No products added yet</p>
                  <p className="text-sm">Add your first product to get started</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProducerDashboard;
