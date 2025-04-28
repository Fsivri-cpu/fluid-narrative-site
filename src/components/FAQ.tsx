
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
    answer: "Any business that wants to automate customer support and collect customer data — from restaurants to e-commerce to service providers."
  },
  {
    question: "What makes StriveX different?",
    answer: "StriveX offers fast setup, a private knowledge base, real-time live chat notifications, and strong data privacy."
  },
  {
    question: "How does StriveX work?",
    answer: "You upload your business documents (FAQs, product catalogs, menus), and StriveX uses AI to create a smart assistant that answers customer questions and collects data."
  },
  {
    question: "Vakit alan gündelik işleri otomasyon ile halledin.",
    answer: "Vakit alan işlerinizi sanal asistanınıza yaptırın. Sadece insan müdahalesine gerek olan durumlarda haberdar olun."
  },
  {
    question: "How can I set up StriveX?",
    answer: "StriveX can be integrated into your website within minutes. You can also simply share a link with your customers to start using it immediately."
  },
  {
    question: "How do customers interact with my assistant?",
    answer: "Müşterileriniz web sitenize entegre edilmiş bir chatbox'dan ya da tercihinize göre, asistanınıza özel üretilmiş linke tıklayarak web üzerinden erişilebilir."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, every new user gets a 14-day free trial with full access to all features."
  },
  {
    question: "How can I get support if needed?",
    answer: "You can reach us through 24/7 live chat, email at support@strivex.com, or by phone."
  },
  {
    question: "Can StriveX be customized for my business needs?",
    answer: "Yes, we offer custom solutions and integrations for Enterprise clients. Contact our sales team for more details."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-black">
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
