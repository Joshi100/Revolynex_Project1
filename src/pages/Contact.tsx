
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    try {
      contactFormSchema.parse(formData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form Validation Failed",
        description: "Please check the form for errors",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send data to backend API
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Success case
        toast({
          title: "Message Sent!",
          description: "We've received your message and will get back to you soon.",
        });
        
        // Reset the form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        // API returned an error
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send your message';
      
      toast({
        title: "Failed to Send",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber.replace(/\s+/g, '')}`;
  };

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Navbar />
      
      <div className="w-full container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We'd love to hear from you. Reach out to us with any questions or inquiries.
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="bg-gradient-to-r from-emerald-600 to-green-700 h-2" />
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-emerald-100 p-4 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-700 mb-3">
                  <button 
                    onClick={() => handleEmail('info@revolynx.com')}
                    className="hover:text-emerald-600 transition-colors"
                  >
                    info@revolynx.com
                  </button>
                </p>
                <p className="text-gray-700">
                  <button 
                    onClick={() => handleEmail('support@revolynx.com')}
                    className="hover:text-emerald-600 transition-colors"
                  >
                    support@revolynx.com
                  </button>
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="bg-gradient-to-r from-emerald-600 to-green-700 h-2" />
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-emerald-100 p-4 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-700 mb-3">
                  <button 
                    onClick={() => handleCall('+91 9876543210')}
                    className="hover:text-emerald-600 transition-colors"
                  >
                    +91 9876543210
                  </button>
                </p>
                <p className="text-gray-700">Mon-Fri, 9AM-6PM</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="bg-gradient-to-r from-emerald-600 to-green-700 h-2" />
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-emerald-100 p-4 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-700 mb-3">123 Himalayan Way</p>
                <p className="text-gray-700">Dehradun, Uttarakhand</p>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden border-0 shadow-lg mb-8 w-full">
            <div className="bg-gradient-to-r from-emerald-600 to-green-700 h-2" />
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full ${errors.name ? 'border-red-500' : ''}`} 
                      placeholder="Your Name" 
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full ${errors.email ? 'border-red-500' : ''}`} 
                      placeholder="your.email@example.com" 
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full ${errors.subject ? 'border-red-500' : ''}`} 
                    placeholder="Subject of your message" 
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full h-32 ${errors.message ? 'border-red-500' : ''}`} 
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                <Button 
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
