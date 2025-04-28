import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

const faqData = [
  {
    question: "Who can use StriveX?",
    answer: "Any business looking to automate customer support and capture customer data — from restaurants and e-commerce stores to service providers."
  },
  {
    question: "What makes StriveX different?",
    answer: "StriveX offers ultra-fast setup, a private knowledge base, real-time live chat notifications, and strong data privacy — all designed to help you operate more efficiently."
  },
  {
    question: "How does StriveX work?",
    answer: "Simply upload your business documents (such as FAQs, product catalogs, or menus), and StriveX will create an AI-powered assistant that can answer customer questions and collect valuable insights for you."
  },
  {
    question: "How can StriveX save me time?",
    answer: "Automate your repetitive daily tasks with your virtual assistant. You'll only be notified when human intervention is truly necessary — letting you focus on what matters most."
  },
  {
    question: "How can I set up StriveX?",
    answer: "StriveX can be integrated into your website within minutes. Alternatively, you can share a dedicated link with your customers for instant access."
  },
  {
    question: "How do customers interact with my assistant?",
    answer: "Your customers can either chat with your assistant directly through an embedded chatbox on your website, or access it via a personalized link — whichever you prefer."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! Every new user receives a 14-day free trial with full access to all features — no credit card required."
  },
  {
    question: "How can I get support if I need help?",
    answer: "You can reach us 24/7 via live chat, email us at support@strivex.com, or call our support line. We're always here to help."
  },
  {
    question: "Can StriveX be customized for my business needs?",
    answer: "Absolutely. We offer tailored solutions and custom integrations for Enterprise clients. Please contact our sales team for more information."
  }
];

const FAQ = () => {
  return (
    <section id="faq-section" className="py-16 bg-gradient-to-b from-black to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Find answers to common questions about StriveX and how it can help your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <AccordionTrigger className="px-6 text-white hover:text-blue-300 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-blue-100">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
