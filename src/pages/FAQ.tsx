import { motion } from 'framer-motion';
import { MessageCircleQuestion, Bot, Zap, Shield, Lightbulb, Users } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Questions",
      icon: MessageCircleQuestion,
      items: [
        {
          question: "What is StriveX AI Solutions?",
          answer: "StriveX AI Solutions is a cutting-edge company that develops intelligent AI-powered applications and solutions to help businesses automate processes, enhance decision-making, and improve operational efficiency."
        },
        {
          question: "Who can benefit from your AI solutions?",
          answer: "Our AI solutions are designed for businesses of all sizes, from startups to enterprise-level organizations, across various industries including healthcare, finance, retail, manufacturing, and technology."
        },
        {
          question: "How do I get started with StriveX?",
          answer: "Getting started is easy! Contact us through our website or phone to schedule a consultation. We'll assess your needs and recommend the best AI solutions for your business requirements."
        }
      ]
    },
    {
      title: "AI Technology",
      icon: Bot,
      items: [
        {
          question: "What types of AI technologies do you use?",
          answer: "We utilize various AI technologies including machine learning, natural language processing, computer vision, predictive analytics, and deep learning algorithms to create comprehensive solutions."
        },
        {
          question: "Can your AI solutions integrate with existing systems?",
          answer: "Yes, our AI solutions are designed to seamlessly integrate with most existing business systems and workflows. We provide comprehensive integration support and documentation."
        },
        {
          question: "How accurate are your AI models?",
          answer: "Our AI models achieve industry-leading accuracy rates, typically above 95% for most applications. We continuously train and improve our models using the latest data and techniques."
        }
      ]
    },
    {
      title: "Implementation & Support",
      icon: Zap,
      items: [
        {
          question: "How long does implementation take?",
          answer: "Implementation timelines vary based on project complexity, but typically range from 2-12 weeks. We provide detailed project timelines during the consultation phase."
        },
        {
          question: "Do you provide training for our team?",
          answer: "Absolutely! We offer comprehensive training programs to ensure your team can effectively use and maintain the AI solutions. This includes documentation, workshops, and ongoing support."
        },
        {
          question: "What kind of support do you offer after implementation?",
          answer: "We provide 24/7 technical support, regular maintenance updates, performance monitoring, and continuous optimization to ensure your AI solutions perform at their best."
        }
      ]
    },
    {
      title: "Security & Privacy",
      icon: Shield,
      items: [
        {
          question: "How do you ensure data security?",
          answer: "We implement enterprise-grade security measures including encryption, secure data centers, access controls, and regular security audits to protect your data and maintain compliance."
        },
        {
          question: "Do you comply with data protection regulations?",
          answer: "Yes, we fully comply with GDPR, CCPA, and other relevant data protection regulations. We prioritize privacy by design in all our AI solutions."
        },
        {
          question: "Where is our data stored?",
          answer: "Data is stored in secure, certified cloud infrastructure with multiple backup locations. You maintain full control and ownership of your data at all times."
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
            <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our team is here to help you with any questions about our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-muted-foreground">
                <strong>Email:</strong> support@strivex.com
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