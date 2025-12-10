
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'nl';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define translations
export const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.getStarted': 'Get Started',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Transform Your Customer Interactions with Vibepps',
    'hero.subtitle': 'The AI assistant that understands your business',
    'hero.button1': 'Get Started',
    'hero.button2': 'Learn More',
    
    // Virtual Assistant Section
    'va.title': 'Your 24/7 Virtual Assistant',
    'va.subtitle': 'Let your AI assistant handle customer queries while you focus on growing your business',
    'va.feature1.title': 'Knowledge Base Integration',
    'va.feature1.desc': 'Easily connect your existing documentation',
    'va.feature2.title': 'Multi-language Support',
    'va.feature2.desc': 'Communicate with customers in their preferred language',
    'va.feature3.title': 'Custom Branding',
    'va.feature3.desc': "Match your brand's look and feel",
    'va.feature4.title': 'Analytics & Insights',
    'va.feature4.desc': 'Understand customer needs and behaviors',
    
    // Case Studies
    'case.title': 'Success Stories',
    'case.subtitle': 'See how businesses like yours are succeeding with Vibepps',
    
    // Experience Section
    'exp.title': 'Experience Giselle in Action',
    'exp.subtitle': 'Try our AI assistant now and customize its behavior to match your needs',
    
    // Chat Interface
    'chat.title': 'Chat with Giselle',
    'chat.subtitle': 'Experience our AI assistant in action',
    'chat.placeholder': 'Type your message...',
    'chat.greeting': "Hi! I'm Giselle, your AI assistant. How can I help you today?",
    'chat.response': "Thank you for your message. I'm a demo version of Giselle, designed to showcase our AI capabilities. Would you like to learn more about our full-featured solution?",
    
    // Assistant Settings
    'settings.title': 'Assistant Settings',
    'settings.upload': 'Upload RAG Documents',
    'settings.uploadDesc': 'Drag & drop files here or click to browse',
    'settings.instructions': 'Instructions for Assistant',
    'settings.instructionsPlaceholder': 'Enter your instructions for the AI assistant here...',
    'settings.maxLength': 'Maximum Response Length',
    'settings.tokens': 'tokens',
    'settings.creativity': 'Response Creativity',
    'settings.creative': '(0 = Precise, 1 = Creative)',
    
    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about Vibepps and how it can help your business',
    'faq.q1': 'Who can use Vibepps?',
    'faq.a1': 'Any business looking to automate customer support and capture customer data — from restaurants and e-commerce stores to service providers.',
    'faq.q2': 'What makes Vibepps different?',
    'faq.a2': 'Vibepps offers ultra-fast setup, a private knowledge base, real-time live chat notifications, and strong data privacy — all designed to help you operate more efficiently.',
    'faq.q3': 'How does Vibepps work?',
    'faq.a3': 'Simply upload your business documents (such as FAQs, product catalogs, or menus), and Vibepps will create an AI-powered assistant that can answer customer questions and collect valuable insights for you.',
    'faq.q4': 'How can Vibepps save me time?',
    'faq.a4': "Automate your repetitive daily tasks with your virtual assistant. You'll only be notified when human intervention is truly necessary — letting you focus on what matters most.",
    'faq.q5': 'How can I set up Vibepps?',
    'faq.a5': 'Vibepps can be integrated into your website within minutes. Alternatively, you can share a dedicated link with your customers for instant access.',
    'faq.q6': 'How do customers interact with my assistant?',
    'faq.a6': 'Your customers can either chat with your assistant directly through an embedded chatbox on your website, or access it via a personalized link — whichever you prefer.',
    'faq.q7': 'How can I get support if I need help?',
    'faq.a7': "You can reach us 24/7 via live chat, email us at support@vibepps.com, or call our support line. We're always here to help.",
    'faq.q8': 'Can Vibepps be customized for my business needs?',
    'faq.a8': 'Absolutely. We offer tailored solutions and custom integrations for Enterprise clients. Please contact our sales team for more information.'
  },
  nl: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'Over Ons',
    'nav.getStarted': 'Aan de Slag',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Transformeer Uw Klantinteracties met Vibepps',
    'hero.subtitle': 'De AI-assistent die uw bedrijf begrijpt',
    'hero.button1': 'Aan de Slag',
    'hero.button2': 'Meer Informatie',
    
    // Virtual Assistant Section
    'va.title': 'Uw 24/7 Virtuele Assistent',
    'va.subtitle': 'Laat uw AI-assistent klantverzoeken afhandelen terwijl u zich concentreert op de groei van uw bedrijf',
    'va.feature1.title': 'Kennisbank Integratie',
    'va.feature1.desc': 'Verbind eenvoudig uw bestaande documentatie',
    'va.feature2.title': 'Meertalige Ondersteuning',
    'va.feature2.desc': 'Communiceer met klanten in hun voorkeurstaal',
    'va.feature3.title': 'Aangepaste Branding',
    'va.feature3.desc': 'Past bij de uitstraling van uw merk',
    'va.feature4.title': 'Analytics & Inzichten',
    'va.feature4.desc': 'Begrijp klantenbehoeften en -gedrag',
    
    // Case Studies
    'case.title': 'Succesverhalen',
    'case.subtitle': 'Bekijk hoe bedrijven zoals het uwe succesvol zijn met Vibepps',
    
    // Experience Section
    'exp.title': 'Ervaar Giselle in Actie',
    'exp.subtitle': 'Probeer onze AI-assistent nu en pas het gedrag aan naar uw wensen',
    
    // Chat Interface
    'chat.title': 'Chat met Giselle',
    'chat.subtitle': 'Ervaar onze AI-assistent in actie',
    'chat.placeholder': 'Typ uw bericht...',
    'chat.greeting': 'Hallo! Ik ben Giselle, uw AI-assistent. Hoe kan ik u vandaag helpen?',
    'chat.response': 'Bedankt voor uw bericht. Ik ben een demo-versie van Giselle, ontworpen om onze AI-mogelijkheden te laten zien. Wilt u meer weten over onze volledige oplossing?',
    
    // Assistant Settings
    'settings.title': 'Assistent Instellingen',
    'settings.upload': 'RAG Documenten Uploaden',
    'settings.uploadDesc': 'Sleep bestanden hierheen of klik om te bladeren',
    'settings.instructions': 'Instructies voor Assistent',
    'settings.instructionsPlaceholder': 'Voer hier uw instructies in voor de AI-assistent...',
    'settings.maxLength': 'Maximale Responslengte',
    'settings.tokens': 'tokens',
    'settings.creativity': 'Respons Creativiteit',
    'settings.creative': '(0 = Precies, 1 = Creatief)',
    
    // FAQ Section
    'faq.title': 'Veelgestelde Vragen',
    'faq.subtitle': 'Vind antwoorden op veelvoorkomende vragen over Vibepps en hoe het uw bedrijf kan helpen',
    'faq.q1': 'Wie kan Vibepps gebruiken?',
    'faq.a1': 'Elk bedrijf dat klantondersteuning wil automatiseren en klantgegevens wil vastleggen — van restaurants en webwinkels tot dienstverleners.',
    'faq.q2': 'Wat maakt Vibepps anders?',
    'faq.a2': 'Vibepps biedt ultrasnelle installatie, een privé kennisbank, real-time chat notificaties en sterke gegevensbescherming — allemaal ontworpen om u efficiënter te laten werken.',
    'faq.q3': 'Hoe werkt Vibepps?',
    'faq.a3': "Upload simpelweg uw bedrijfsdocumenten (zoals FAQs, productcatalogi of menu's), en Vibepps creëert een AI-gestuurde assistent die klantenvragen kan beantwoorden en waardevolle inzichten voor u kan verzamelen.",
    'faq.q4': 'Hoe kan Vibepps mij tijd besparen?',
    'faq.a4': 'Automatiseer uw dagelijkse repetitieve taken met uw virtuele assistent. U wordt alleen gewaarschuwd wanneer menselijke tussenkomst echt nodig is — zodat u zich kunt concentreren op wat het belangrijkst is.',
    'faq.q5': 'Hoe kan ik Vibepps instellen?',
    'faq.a5': 'Vibepps kan binnen enkele minuten worden geïntegreerd in uw website. Als alternatief kunt u een speciale link delen met uw klanten voor directe toegang.',
    'faq.q6': 'Hoe communiceren klanten met mijn assistent?',
    'faq.a6': 'Uw klanten kunnen direct chatten met uw assistent via een ingebedde chatbox op uw website, of deze benaderen via een gepersonaliseerde link — wat u maar prefereert.',
    'faq.q7': 'Hoe kan ik ondersteuning krijgen als ik hulp nodig heb?',
    'faq.a7': 'U kunt ons 24/7 bereiken via live chat, e-mail ons op support@vibepps.com, of bel onze supportlijn. We staan altijd voor u klaar.',
    'faq.q8': 'Kan Vibepps worden aangepast aan mijn zakelijke behoeften?',
    'faq.a8': 'Absoluut. We bieden op maat gemaakte oplossingen en aangepaste integraties voor Enterprise-klanten. Neem contact op met ons verkoopteam voor meer informatie.'
  }
};

// Language Provider Component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};