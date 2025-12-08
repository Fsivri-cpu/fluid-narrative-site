
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import AIAssistantApp from "./pages/AIAssistantApp";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import GLP1TrackerPrivacy from "./pages/privacy/GLP1Tracker";
import GLP1TrackerTerms from "./pages/terms/GLP1Tracker";
import FAQ from "./pages/FAQ";
import Cookies from "./pages/Cookies";
import Jabsy from "./pages/apps/Jabsy";
import Sunny from "./pages/apps/Sunny";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="about" element={<About />} />
                <Route path="apps" element={<Products />} />
                <Route path="ai_assistant_app" element={<AIAssistantApp />} />
                <Route path="contact" element={<Contact />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="privacy-policy/:appSlug" element={<GLP1TrackerPrivacy />} />
                <Route path="terms-conditions" element={<TermsConditions />} />
                <Route path="terms-conditions/:appSlug" element={<GLP1TrackerTerms />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="cookies" element={<Cookies />} />
                <Route path="apps/jabsy" element={<Jabsy />} />
                <Route path="apps/sunny" element={<Sunny />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
