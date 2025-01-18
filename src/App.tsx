import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Hospitals from "./pages/Hospitals";
import BloodBanks from "./pages/BloodBanks";
import LandingPage from "./components/landing page/LandingPage";
import SignInPage from "./components/auth/Sign-In";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<SignInPage/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/blood-banks" element={<BloodBanks />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;