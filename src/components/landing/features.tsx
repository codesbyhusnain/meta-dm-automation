"use client";

import { motion } from "framer-motion";
import { Box, ChevronRight } from "lucide-react";
import Link from "next/link";

interface FeatureProps {
  title: string;
  description: string;
  href: string;
}

function Feature({ title, description, href }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="w-12 h-12 flex items-center justify-center">
        <Box className="w-8 h-8" />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold leading-tight">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-sm font-medium"
      >
        Learn More
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="container py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold tracking-tight mb-16 max-w-3xl"
      >
        Transform your Instagram engagement with our powerful automation tool.
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-12">
        <Feature
          title="Streamline your communication and enhance customer interaction effortlessly."
          description="Our tool automates direct messages, enabling you to respond instantly and efficiently."
          href="/features/communication"
        />
        <Feature
          title="Manage comments effortlessly with our intuitive comment management feature."
          description="Easily monitor and respond to comments to keep your audience engaged."
          href="/features/comments"
        />
        <Feature
          title="Leverage our AI-powered chatbot for 24/7 customer support and engagement."
          description="Provide instant answers to common inquiries, enhancing user satisfaction."
          href="/features/chatbot"
        />
      </div>
    </section>
  );
}
