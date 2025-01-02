"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">FAQs</h2>
        <p className="text-xl text-muted-foreground">
          Find answers to your questions about our service.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}

const faqs = [
  {
    question: "How to set up?",
    answer:
      "Setting up is easy! Simply create an account, connect your Instagram profile, and start customizing your automated responses.",
  },
  {
    question: "Do I need Instagram support?",
    answer:
      "No, you don't need direct support from Instagram. Our tool works with any Instagram business or creator account.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, we offer a 14-day free trial on all our plans. You can test all features with no commitment required.",
  },
  {
    question: "What do I need?",
    answer:
      "You'll need an Instagram business or creator account and an active subscription to our service.",
  },
];
