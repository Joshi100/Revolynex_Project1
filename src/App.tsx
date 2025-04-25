import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import About from "./pages/About";
import RoleSelect from "./pages/RoleSelect";
import ProducerDashboard from "./pages/ProducerDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import ProducerSignup from "./pages/producerSignup";
import CustomerSignup from "./pages/customerSignup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/role-select" element={<RoleSelect />} />
          <Route path="/register/producer" element={<ProducerSignup />} />
          <Route path="/register/customer" element={<CustomerSignup />} />
          <Route path="/dashboard/producer" element={<ProducerDashboard />} />
          <Route path="/dashboard/customer" element={<CustomerDashboard />} />
          <Route path="/explore" element={<CustomerDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
