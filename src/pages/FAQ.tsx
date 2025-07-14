import { motion } from 'framer-motion';
import { MessageCircleQuestion, CreditCard, Shield, Stethoscope, HeadphonesIcon, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Account & Setup",
      icon: MessageCircleQuestion,
      items: [
        {
          question: "Do I need to create an account?",
          answer: "No account is required for basic tracking. If you want cloud backup and multi-device sync, simply sign in with your Apple ID or Google Account."
        }
      ]
    },
    {
      title: "Subscription & Billing",
      icon: CreditCard,
      items: [
        {
          question: "What subscription plans are available?",
          answer: "We offer two paid tiers in addition to the free core experience: Weekly (billed every 7 days) and Lifetime (one-time payment, all future updates included). Pricing is shown in your local currency at checkout."
        },
        {
          question: "What does the Lifetime plan include?",
          answer: "Lifetime unlocks every premium feature—multi-device sync, advanced analytics, custom themes and priority support—forever, with no recurring fees."
        },
        {
          question: "Can I switch from Weekly to Lifetime?",
          answer: "Yes. Cancel your Weekly plan in the store's subscription settings, then purchase the Lifetime option. Any unused portion of your Weekly period will remain active until it expires."
        },
        {
          question: "How do I cancel my subscription?",
          answer: "Open your device's subscription settings, find GLP-1 Shot Tracker, and tap Cancel. You can also manage subscriptions through your Apple ID or Google Account settings."
        }
      ]
    },
    {
      title: "Data Security & Privacy",
      icon: Shield,
      items: [
        {
          question: "How is my data protected, and can I export or delete it?",
          answer: "Your data is encrypted (TLS 1.2+ in transit, AES-256 at rest) and never sold or shared without your explicit consent. Go to Settings › Data Controls to export a CSV/JSON file or permanently delete all data. Deletion requests are completed within 30 days."
        }
      ]
    },
    {
      title: "Medical Information",
      icon: Stethoscope,
      items: [
        {
          question: "Does the app provide medical advice?",
          answer: "No. The app is for tracking and informational support only; it is not a medical device. Always consult a licensed healthcare professional before making treatment decisions."
        }
      ]
    },
    {
      title: "Support",
      icon: HeadphonesIcon,
      items: [
        {
          question: "How do I contact support?",
          answer: "Tap Help › Contact Us in the app or email support@strivex.ai. We reply within one business day."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our AI solutions and services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem key={itemIndex} value={`${categoryIndex}-${itemIndex}`}>
                    <AccordionTrigger className="text-left hover:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-card rounded-lg p-8 border border-border text-center"
          >
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our team is here to help you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-muted-foreground">
                <strong>Email:</strong> support@strivex.ai
              </div>
              <div className="text-muted-foreground">
                <strong>Phone:</strong> +1 (555) 123-4567
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;