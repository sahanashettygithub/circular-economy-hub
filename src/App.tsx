
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Donate from "./pages/Donate";
import Sell from "./pages/Sell";
import Receive from "./pages/Receive";
import Buy from "./pages/Buy";
import EcoStore from "./pages/EcoStore";
import About from "./pages/About";
import LearnMore from "./pages/LearnMore";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/receive" element={<Receive />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/eco-store" element={<EcoStore />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
